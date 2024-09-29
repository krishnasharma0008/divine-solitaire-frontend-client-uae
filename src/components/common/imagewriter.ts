const generateImage = async (text: string): Promise<string | null> => {
  try {
    // Create a new canvas element
    const canvas = document.createElement("canvas");
    canvas.width = 280;
    canvas.height = 180;

    // Get the 2D rendering context
    const ctx = canvas.getContext("2d");

    // Check if ctx is null before using it
    if (!ctx) {
      console.error("Unable to get 2D context");
      return null;
    }

    // Create an image element
    const img = new Image();

    // Set the source of the image (replace 'path/to/your/image.png' with the actual path)
    img.src = "/vtdia/carousel_3.png";

    // Wait for the image to load
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    // Draw the image on the canvas
    ctx.drawImage(img, 0, 0, 280, 180);

    // Set font properties
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";

    // Draw text on the canvas
    ctx.fillText(text, 145, 126);

    // Get the data URL of the canvas
    const generatedDataUrl = canvas.toDataURL();

    // Return the data URL

    return generatedDataUrl;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};

export default generateImage;

// import { createCanvas, loadImage } from "canvas";

// const generateImage = async (text: string): Promise<string | null> => {
//   try {
//     const canvas = createCanvas(280, 180);
//     const ctx = canvas.getContext("2d");

//     const img = await loadImage("/vtdia/carousel_3.png");
//     ctx.drawImage(img, 0, 0, 280, 180);
//     ctx.font = "20px Arial";
//     ctx.fillStyle = "black";
//     ctx.fillText(text, 145, 126);

//     const generatedDataUrl = canvas.toDataURL();
//     return generatedDataUrl;
//   } catch (error) {
//     console.error("Error generating image:", error);
//     return null;
//   }
// };

// export default generateImage;
