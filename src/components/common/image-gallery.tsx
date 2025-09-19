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
    if (zoomRef.current) {
      zoomRef.current.style.display = "none"; // Hide zoom when switching images
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoomRef.current) {
      const target = e.currentTarget;
      const { top, height } = target.getBoundingClientRect();
      const x = ((e.pageX - target.offsetLeft) / target.clientWidth) * 100;
      const y = ((e.pageY - top) / height) * 100;

      // Set the zoom container position and background image
      zoomRef.current.style.display = "block";
      zoomRef.current.style.top = `${e.pageY - height / 2}px`;
      zoomRef.current.style.left = `${
        target.offsetLeft + target.clientWidth + 20
      }px`; // Offset for the magnified image on the right
      zoomRef.current.style.backgroundPosition = `${x}% ${y}%`;
    }
  };

  const handleMouseLeave = () => {
    if (zoomRef.current) {
      zoomRef.current.style.display = "none"; // Hide zoom when mouse leaves the image
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
            {filteredImages[selectedImage].url.includes("carousel_3.png") ? (
              <CanvasImage
                url={filteredImages[selectedImage].url}
                uid={filteredImages[selectedImage].uid}
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
              backgroundImage: `url(${filteredImages[selectedImage].url})`,
              backgroundSize: "200%",
            }}
          ></div>
        </div>
      )}

      {/* Thumbnails */}
      <div className="flex space-x-3 mt-4">
        {filteredImages.map((image: Image, index: number) => (
          <div
            key={image.uid}
            onClick={() => handleImageClick(index)}
            className={`cursor-pointer ${
              selectedImage === index
                ? "border border-gray-400"
                : "border border-gray-200"
            }`}
          >
            {image.title.slice(0, 5) === "Image" ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={image.thumbnailUrl}
                alt={image.title}
                className="w-12 h-12 object-contain p-[3px]"
                onError={(e) => {
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.src = "/Empty.jpg"; // Replace with your placeholder image URL
                }}
              />
            ) : (
              <div className="relative w-12 h-12">
                <video
                  src={image.thumbnailUrl}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="p-1 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/play.png"
                      alt="play button"
                      className="w-3 h-3"
                    />
                  </button>
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
