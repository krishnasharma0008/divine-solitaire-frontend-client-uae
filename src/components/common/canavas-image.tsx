import React, { useEffect, useRef } from "react";

interface CanvasImageProps {
  url: string;
  uid: string;
  width?: number; // optional pixel width
  height?: number; // optional pixel height
  onReady?: (dataUrl: string) => void; // callback for magnifier
}

const CanvasImage: React.FC<CanvasImageProps> = ({
  url,
  uid,
  width,
  height,
  onReady,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

      // Draw the image scaled
      ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

      // Draw UID text
      ctx.font = canvasWidth <= 50 ? "500 5px Arial" : "500 1.6em Arial";
      ctx.fillStyle = "#1E2939";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";

      // const x = canvasWidth - 38;
      // const y = canvasHeight / 2 + 32;
      const x = canvasWidth - canvasWidth * 0.15; // 5% from right
      const y = canvasHeight * 0.675;
      ctx.fillText(uid, x, y);

      if (onReady) {
        onReady(canvas.toDataURL());
      }
    };
  }, [url, uid, width, height, onReady]);

  return <canvas ref={canvasRef} className="object-contain w-full h-full" />;
};

export default CanvasImage;
