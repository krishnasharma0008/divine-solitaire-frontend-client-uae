import React, { useEffect, useRef } from "react";

interface CanvasImageProps {
  url: string;
  uid: string;
}

const CanvasImage: React.FC<CanvasImageProps> = ({ url, uid }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = url;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // ✅ Draw UID text
      ctx.font = "bold 16px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";

      const x = canvas.width - 68; // little away from right edge
      const y = canvas.height / 2 + 33; // a bit below center
      ctx.fillText(uid, x, y);
    };
  }, [url, uid]);

  return <canvas ref={canvasRef} style={{ maxWidth: "300px" }} />;
};

export default CanvasImage;
