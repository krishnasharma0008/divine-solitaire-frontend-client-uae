import React, { useState, useEffect, useRef } from "react";

import CanvasImage from "./canavas-image";

interface Image {
  url: string;
  thumbnailUrl: string;
  title: string;
  uid: string;
}

const ImageGallery: React.FC<{ images: Image[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(0);
  const [availableVideos, setAvailableVideos] = useState<Set<number>>(
    new Set()
  );
  const [canvasDataUrl, setCanvasDataUrl] = useState<string | null>(null); // 👈 for UID canvas
  const zoomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkVideoAvailability = async () => {
      const videoPromises = images.map((image, index) => {
        if (image.title.slice(0, 5) === "Video") {
          return new Promise<void>((resolve) => {
            const videoElement = document.createElement("video");
            videoElement.src = image.url;
            videoElement.oncanplaythrough = () => {
              setAvailableVideos((prev) => new Set(prev).add(index));
              resolve();
            };
            videoElement.onerror = () => resolve(); // Treat as unavailable
          });
        }
        return Promise.resolve();
      });

      await Promise.all(videoPromises);
    };

    checkVideoAvailability();
  }, [images]);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setCanvasDataUrl(null); // reset when switching
    if (zoomRef.current) {
      zoomRef.current.style.display = "none";
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoomRef.current || selectedImage === null) return;

    const target = e.currentTarget;
    const { left, top, width, height } = target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    zoomRef.current.style.display = "block";
    zoomRef.current.style.top = `${top}px`;
    zoomRef.current.style.left = `${left + width + 20}px`;
    zoomRef.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  const handleMouseLeave = () => {
    if (zoomRef.current) {
      zoomRef.current.style.display = "none";
    }
  };

  const filteredImages = images.filter(
    (image, index) =>
      (image.title.slice(0, 5) === "Image" || availableVideos.has(index)) &&
      image.thumbnailUrl &&
      image.thumbnailUrl.trim() !== ""
  );

  if (filteredImages.length === 0) {
    return <div>No images or available videos</div>;
  }

  const isCanvasImage =
    selectedImage !== null &&
    filteredImages[selectedImage].url.includes("carousel_3.png");

  return (
    <div className="mb-7 flex flex-col space-y-4">
      {selectedImage !== null && (
        <div className="flex space-x-6 items-center">
          {/* Main Image on the Left */}
          <div
            className="relative group"
            style={{ width: "300px", height: "300px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {isCanvasImage ? (
              <CanvasImage
                url={filteredImages[selectedImage].url}
                uid={filteredImages[selectedImage].uid}
                onReady={setCanvasDataUrl} // 👈 get dataURL
              />
            ) : filteredImages[selectedImage].title.slice(0, 5) === "Image" ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.src = "/Empty.jpg";
                }}
              />
            ) : (
              <div className="relative w-full h-full">
                <video
                  src={filteredImages[selectedImage].url}
                  autoPlay
                  loop
                  className="object-contain w-full h-full"
                />
              </div>
            )}
          </div>

          {/* Magnified Image on the Right */}
          <div
            ref={zoomRef}
            className="absolute rounded-lg border border-gray-300 w-[300px] h-[300px] bg-cover bg-no-repeat pointer-events-none hidden"
            style={{
              backgroundImage: `url(${
                isCanvasImage && canvasDataUrl
                  ? canvasDataUrl
                  : filteredImages[selectedImage].url
              })`,
              backgroundSize: "200%",
            }}
          ></div>
        </div>
      )}

      {/* Thumbnails */}
      <div className="flex space-x-3 mt-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.uid}
            onClick={() => handleImageClick(index)}
            className={`relative cursor-pointer ${
              selectedImage === index
                ? "border border-gray-400"
                : "border border-gray-200"
            } w-12 h-12`}
          >
            {image.url.includes("carousel_3.png") ? (
              <CanvasImage
                url={image.url}
                uid={image.uid}
                width={48}
                height={48}
              />
            ) : image.title.slice(0, 5) === "Image" ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.thumbnailUrl}
                  alt={image.title}
                  className="w-full h-full object-contain p-[2px]"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src = "/Empty.jpg")
                  }
                />
              </>
            ) : (
              <div className="relative w-full h-full">
                <video
                  src={image.thumbnailUrl}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/play.png" alt="play" className="w-3 h-3" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
