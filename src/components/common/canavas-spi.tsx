import React, { useEffect, useRef } from "react";

interface SPIData {
  currentMonth: string;
  currentYear: string;
  firstDayOfMonth: string;
  Current_Month_SPI: number;
  Growth_Month_Percentage: number;
  Growth_Year_Percentage: number;
  currency_locale: string;
}

interface CanvasSPIProps {
  url: string; // background board image
  data: SPIData;
  width?: number;
  height?: number;
  onReady?: (dataUrl: string) => void;
}

const CanvasSPI: React.FC<CanvasSPIProps> = ({
  url,
  data,
  width,
  height,
  onReady,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Get ordinal suffix for day
  const getOrdinalSuffix = (day: number): string => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = url;

    img.onload = () => {
      const canvasWidth = width || img.width;
      const canvasHeight = height || img.height;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // Draw background image scaled
      ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

      // Common text style
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillStyle = "#000";

      // // Date (top left)
      // ctx.font = "bold 36px Arial";
      // ctx.fillText(
      //   `${data.firstDayOfMonth} ${data.currentMonth}, ${data.currentYear}`,
      //   canvasWidth * 0.12,
      //   canvasHeight * 0.48
      // );

      // === Day + Ordinal Suffix ===
      // === Day + Ordinal Suffix ===
      const day = Number(data.firstDayOfMonth);
      const suffix = getOrdinalSuffix(day);

      //ctx.font = `${canvasWidth * 0.025}px Montserrat`;
      ctx.font = "500 38px Montserrat";
      ctx.fillStyle = "#001";
      ctx.textAlign = "left";
      const dayX = canvasWidth * 0.12;
      const dayY = canvasHeight * 0.48;
      // ctx.fillText(
      //   `${day}${getOrdinalSuffix(day)}`,
      //   canvasWidth * 0.12,
      //   canvasHeight * 0.48
      // );
      ctx.fillText(`${day}`, dayX, dayY);

      // Ordinal suffix (smaller + higher)
      ctx.font = `500 ${canvasWidth * 0.02}px Montserrat`; // smaller font
      ctx.fillText(
        suffix,
        dayX + ctx.measureText(`${day}`).width + 9,
        dayY - 7
      );

      // === Month, Year ===
      ctx.font = "500 38px Montserrat";
      ctx.fillText(
        `${data.currentMonth}, ${data.currentYear}`,
        canvasWidth * 0.16,
        canvasHeight * 0.48
      );

      // SPI Value (large center-left)
      ctx.font = "bold 110px Montserrat";
      ctx.fillText(
        `${data.Current_Month_SPI.toLocaleString(data.currency_locale)}*`,
        canvasWidth * 0.15,
        canvasHeight * 0.57
      );

      // Monthly Growth
      // ctx.font = " 58px Montserrat";
      // ctx.fillStyle = data.Growth_Month_Percentage > 0 ? "green" : "red";
      // ctx.textAlign = "right";
      // ctx.textBaseline = "middle"; // center vertically (optional)
      // ctx.fillText(
      //   `${data.Growth_Month_Percentage}%`,
      //   canvasWidth * 0.63,
      //   canvasHeight * 0.52
      // );
      // ctx.font = "bold 72px Arial";
      // ctx.fillStyle = data.Growth_Month_Percentage >= 0 ? "green" : "red";
      // ctx.fillText(
      //   data.Growth_Month_Percentage >= 0 ? "↑" : "↓",
      //   canvasWidth * 0.66,
      //   canvasHeight * 0.515
      // );

      // Percentage value
      ctx.font = "500 58px Montserrat";
      ctx.fillStyle = data.Growth_Month_Percentage > 0 ? "green" : "red";
      ctx.textBaseline = "middle";

      const percentageText = `${data.Growth_Month_Percentage}%`;

      // Anchor for the arrow
      const arrowX = canvasWidth * 0.63;
      const centerY = canvasHeight * 0.53;

      // Draw percentage → right aligned before the arrow
      ctx.textAlign = "right";
      ctx.fillText(percentageText, arrowX - 10, centerY); // -10 for spacing

      // Draw arrow at fixed position
      ctx.font = "500 72px Arial";
      ctx.fillStyle = data.Growth_Month_Percentage >= 0 ? "green" : "red";
      ctx.textAlign = "left"; // so arrow grows to the right
      ctx.fillText(
        data.Growth_Month_Percentage >= 0 ? "↑" : "↓",
        arrowX,
        centerY - 10
      );

      // // Yearly Growth
      // ctx.font = " 58px Montserrat";
      // ctx.fillStyle = data.Growth_Year_Percentage > 0 ? "green" : "red";
      // ctx.fillText(
      //   `${data.Growth_Year_Percentage}%`,
      //   canvasWidth * 0.86,
      //   canvasHeight * 0.52
      // );
      // ctx.font = "bold 72px Arial";
      // ctx.fillStyle = data.Growth_Month_Percentage >= 0 ? "green" : "red";
      // ctx.fillText(
      //   data.Growth_Year_Percentage >= 0 ? "↑" : "↓",
      //   canvasWidth * 0.9,
      //   canvasHeight * 0.515
      // );

      // Percentage value
      ctx.font = "500 58px Montserrat";
      ctx.fillStyle = data.Growth_Year_Percentage > 0 ? "green" : "red";
      ctx.textBaseline = "middle";

      const percentageTextY = `${data.Growth_Year_Percentage}%`;

      // Anchor for the arrow
      const arrowXy = canvasWidth * 0.87;
      const centerYy = canvasHeight * 0.53;

      // Draw percentage → right aligned before the arrow
      ctx.textAlign = "right";
      ctx.fillText(percentageTextY, arrowXy - 10, centerYy); // -10 for spacing

      // Draw arrow at fixed position
      ctx.font = "500 72px Arial";
      ctx.fillStyle = data.Growth_Year_Percentage >= 0 ? "green" : "red";
      ctx.textAlign = "left"; // so arrow grows to the right
      ctx.fillText(
        data.Growth_Year_Percentage >= 0 ? "↑" : "↓",
        arrowXy,
        centerYy - 10
      );

      if (onReady) {
        onReady(canvas.toDataURL());
      }
    };
  }, [url, data, width, height, onReady]);

  return <canvas ref={canvasRef} className="object-contain w-full h-full" />;
};

export default CanvasSPI;
