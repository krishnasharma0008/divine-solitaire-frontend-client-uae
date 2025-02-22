import crypto from "crypto";
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import sharp from "sharp";

import getSolitairePriceIndex from "@/api/spi";
import { SolitairePriceIndex } from "@/interface";

// SVG paths for decline and growth indicators
const decline =
  '<path xmlns="http://www.w3.org/2000/svg" id="XMLID_10_" d="M154.394,325.606C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l37.5-37.5  c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.356-5.858-21.213,0L180,278.787V15c0-8.284-6.716-15-15-15  c-8.284,0-15,6.716-15,15v263.787l-11.893-11.894c-5.858-5.858-15.356-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213  L154.394,325.606z"/>';
const growth =
  '<path xmlns="http://www.w3.org/2000/svg" id="XMLID_29_" d="M100.606,100.606L150,51.212V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V51.212l49.394,49.394  C232.322,103.535,236.161,105,240,105c3.839,0,7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213l-75-75  c-5.857-5.858-15.355-5.858-21.213,0l-75,75c-5.858,5.857-5.858,15.355,0,21.213C85.251,106.463,94.749,106.463,100.606,100.606z"/>';

// Utility function to generate a hash
const getHash = (spi: SolitairePriceIndex): string => {
  const hash = crypto.createHash("sha256");
  hash.update(JSON.stringify(spi));
  return hash.digest("hex");
};

// Get ordinal suffix for day
const getOrdinalSuffix = (day: number): string => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
};

// Read file from the filesystem
const getFile = (filename: string): Buffer | null => {
  try {
    const fileBuffer = fs.readFileSync(
      path.join(process.cwd(), "tmp", filename)
    );
    return fileBuffer;
  } catch (err) {
    console.error("Error reading file:", err);
    return null;
  }
};

// Create image from SPI data
const createImage = async (
  spi: SolitairePriceIndex,
  filename: string
): Promise<void> => {
  const width = 5500;
  const height = 2000;

  // Date Logic
  const currentDate = new Date();
  currentDate.setDate(1);
  const firstDayOfMonth = `${currentDate.getDate()}`;
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  const isMonthlyGrowth = spi.Growth_Month_Percentage >= 0;
  const isYearlyGrowth = spi.Growth_Year_Percentage >= 0;

  const svgImage = `
  <svg width="${width}" height="${height}">
    <style>
      .title { fill: #001; font-size: 700px; font-family: Montserrat;}
      .title-2 { fill: #001; font-size: 550px; font-family: Montserrat;}
      .month-year, .day, .ordinal { font-size: 200px; font-family: Montserrat; }
      text.ordinal { font-size: 100px; }
      .percentage { font-size: 300px; font-family: Montserrat; }
      .red { fill: red; }
      .green { fill: #AAFF00; }
    </style>
    <text x="5%" y="9%" text-anchor="middle" class="day">${firstDayOfMonth}</text>
    <text x="6.6%" y="4%" text-anchor="middle" class="ordinal">${getOrdinalSuffix(parseInt(firstDayOfMonth))}</text>
    <text x="23%" y="9%" text-anchor="middle" class="month-year">${currentMonth}, ${currentYear}</text>
    <text x="19%" y="50%" text-anchor="middle" class="title">${Number(spi.Current_Month_SPI).toLocaleString(spi.currency_locale)}</text>
    <text x="39%" y="40%" text-anchor="middle" class="title-2">*</text>
    <text x="55%" y="23%" text-anchor="middle" class="percentage ${isMonthlyGrowth ? "green" : "red"}">${spi.Growth_Month_Percentage}%</text>
    <svg x="63%" y="8%" height="800px" width="500px" class="percentage ${isMonthlyGrowth ? "green" : "red"}">
      ${isMonthlyGrowth ? growth : decline}
    </svg>
    <text x="85%" y="23%" text-anchor="middle" class="percentage ${isYearlyGrowth ? "green" : "red"}">${spi.Growth_Year_Percentage}%</text>
    <svg x="93%" y="8%" height="800px" width="500px" class="percentage ${isYearlyGrowth ? "green" : "red"}">
      ${isYearlyGrowth ? growth : decline}
    </svg>
  </svg>
  `;

  const spiImageBuffer = Buffer.from(svgImage);

  await sharp("public/edit/spi_banner.png")
    .composite([{ input: spiImageBuffer, left: 550, top: 1800 }])
    .toFile(`./tmp/${filename}.png`);
};


// Main API handler
const getSpiImage = async (
  req: NextApiRequest,
  res: NextApiResponse<string | null>
) => {
  try {
    const currentDate = new Date();
    const currentMonthNumber = `${currentDate.getMonth() + 1}`; // Months are zero-indexed in JS
    const currentYear = currentDate.getFullYear();
    
    // Get country code based on IP
    const countrycode = req.query.currency as string;
    
    if (!countrycode) {
      return res.status(400).json("Unable to determine country code.");
    }

    const result = await getSolitairePriceIndex(
      currentMonthNumber,
      currentYear,
      countrycode as string
    );

    if (!result.data || !result.data.data) {
      throw new Error("Invalid SPI data received.");
    }

    console.log("Data",result.data.data);
    const hashValue = getHash(result.data.data);
    const existingFile = getFile(`${hashValue}.png`);

    if (existingFile) {
      res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": existingFile.length,
      });
      res.end(existingFile);
      return;
    }

    await createImage(result.data.data, hashValue);
    const newFile = getFile(`${hashValue}.png`);

    if (newFile) {
      res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": newFile.length,
      });
      res.end(newFile);
    } else {
      res.status(404).json("Image not found");
    }
  } catch (error) {
    console.error("Error generating SPI image:", error);
    res.status(500).json("Internal Server Error");
  }
};

export default getSpiImage;
