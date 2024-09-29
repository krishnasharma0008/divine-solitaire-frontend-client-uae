import Image from "next/image";
import Link from "next/link";

interface ImageWithTextCardProps {
  url: string;
  name: string;
  description: string;
  src: string;
  alt: string;
}

const ImageWithTextCard: React.FC<ImageWithTextCardProps> = ({
  alt,
  name,
  src,
  url,
  description,
}) => (
  <Link href={url} key={name}>
    <div className="group relative">
      <div className="mt-5 relative h-80 w-full overflow-hidden  bg-white md:aspect-h-1 md:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:ring-2 md:h-64">
        <Image
          src={src}
          alt={alt}
          width={324}
          height={60}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {name && (
        <div className="text-center h-16 w-full bg-Chinese-Black-sidebar opacity-50 font-semibold  absolute inset-x-0 top-0">
          <h2 className="text-white m-3">{name}</h2>
          <span className="">{description}</span>
        </div>
      )}
    </div>
  </Link>
);

export default ImageWithTextCard;
export { type ImageWithTextCardProps };
