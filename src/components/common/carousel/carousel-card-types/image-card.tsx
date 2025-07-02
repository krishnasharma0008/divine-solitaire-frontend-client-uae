interface ImageCardProps {
  src: string;
  alt: string;
  onClick?: () => void; // <-- Add this
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, onClick }) => (
  <div className="group relative cursor-pointer" onClick={onClick}>
    <div className="mt-5 relative h-80 w-full overflow-hidden bg-white md:aspect-h-1 md:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:ring-2 md:h-64 flex justify-center">
      {/* <img
        src={src}
        alt={alt}
        width={200}
        height={60}
        className="center md:w-auto w-60 max-h-52 md:max-h-auto md:h-full m-auto"
      /> */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={200}
        height={60}
        sizes="100vw"
        className="center md:w-auto w-60 max-h-52 md:max-h-auto md:h-full m-auto"
        onError={(e) => {
          const imgElement = e.target as HTMLImageElement;
          imgElement.src = "/logo/new_logo.png"; // Replace with your placeholder image URL
          imgElement.className = "w-1/2 h-1/2 hover:pointer bg-black p-2";
        }}
      />
    </div>
  </div>
);

export default ImageCard;
export { type ImageCardProps };
