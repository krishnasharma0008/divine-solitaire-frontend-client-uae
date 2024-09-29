interface ImageCardProps {
  src: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => (
  <div className="group relative">
    <div className="mt-5 relative h-80 w-full overflow-hidden bg-white md:aspect-h-1 md:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:ring-2 md:h-64 flex justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={200}
        height={60}
        className="center md:w-auto w-60 max-h-52 md:max-h-auto md:h-full m-auto"
      />
    </div>
  </div>
);

export default ImageCard;
export { type ImageCardProps };
