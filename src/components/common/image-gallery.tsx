import React, { useState, useEffect } from "react";

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

  const [videoLoading, setVideoLoading] = useState<boolean>(true);

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
            videoElement.onerror = () => {
              resolve(); // Treat as unavailable
            };
          });
        }
        return Promise.resolve();
      });

      await Promise.all(videoPromises);
    };

    checkVideoAvailability();
  }, [images]);

  const handleImageClick = (index: number) => {
    if (selectedImage !== index) {
      setSelectedImage(index);
    }
  };

  const handleVideoLoaded = () => {
    setVideoLoading(false);
  };

  const handleVideoError = () => {
    setVideoLoading(false);
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
    <div className="mb-7">
      {selectedImage !== null && (
        <div
          className="relative justify-center"
          style={{ width: "100%", height: 240 }}
        >
          {filteredImages[selectedImage].title.slice(0, 5) === "Image" ? (
            <img
              src={filteredImages[selectedImage].url}
              alt={filteredImages[selectedImage].title}
              width={200}
              height={60}
              className="center md:w-auto w-60 max-h-52 md:max-h-auto md:h-full m-auto object-contain"
              onError={(e) => {
                const imgElement = e.target as HTMLImageElement;
                imgElement.src = "/Empty.jpg"; // Replace with your placeholder image URL
              }}
            />
          ) : (
            <div className="relative w-full h-full">
              {videoLoading && (
                <div className="spinner absolute inset-0 flex items-center justify-center"></div>
              )}
              <video
                src={filteredImages[selectedImage].url}
                autoPlay
                loop
                className="object-contain w-full h-full"
                onCanPlayThrough={handleVideoLoaded}
                onError={handleVideoError}
              />
            </div>
            // <video
            //   poster="/Empty.jpg"
            //   src={filteredImages[selectedImage].url}
            //   // width={200}
            //   // height={60}
            //   autoPlay
            //   //controls
            //   //className="center md:w-auto w-60 max-h-52 md:max-h-auto md:h-full m-auto object-contain"
            //   className="object-contain w-full h-full"
            // />
          )}
          {filteredImages[selectedImage].url === "/vtdia/carousel_3.png" && (
            <div className="absolute md:right-[35%] md:top-[52.5%] right-[25%] top-[47%] text-[#303030] font-semibold text-lg md:text-xl md:ml-4 mt-4 md:mt-0">
              {filteredImages[selectedImage].uid}
            </div>
          )}
        </div>
      )}

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
              <img
                src={image.thumbnailUrl}
                alt={image.title}
                height={50}
                width={50}
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
                  height={50}
                  width={50}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="p-1 flex items-center justify-center">
                    <img
                      src="/play.png"
                      alt="play button"
                      height={12}
                      width={12}
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
