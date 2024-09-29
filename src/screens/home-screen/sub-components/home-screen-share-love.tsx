import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components";

const images = [
  "/share-homepage/share-1.jpeg",
  "/share-homepage/share-2.jpeg",
  "/share-homepage/share-3.jpeg",
  "/share-homepage/share-4.jpeg",
  "/share-homepage/share-5.jpeg",
  "/share-homepage/share-6.jpeg",
  "/share-homepage/share-7.jpeg",
  "/share-homepage/share-8.jpeg",
];

const HomeScreenShareLove: React.FC = () => {
  const renderImages = (images: Array<string>, className?: string) =>
    images.map((image) => (
      <div key={image} className={className}>
        <Image
          src={image}
          alt="feature-image"
          height={400}
          width={600}
          className="w-60 h-96 rounded-3xl"
        />
      </div>
    ));

  return (
    <div className="flex flex-col items-center px-4 md:px-0">
      <div>
        <div className="mb-6 md:mb-9 text-gray-900 text-2xl md:text-5xl font-bold md:leading-[3.5rem] tracking-wider uppercase text-center">
          SHARE THE LOVE!
        </div>
        <div className="w-full mb-12 text-gray-700 text-sm md:text-xl font-normal leading-6 md:leading-7 tracking-wide text-center">
          <div>#DIVINESOLITAIRES</div>
          <Link
            href="https://www.instagram.com/divinesolitaires/"
            target="_blank"
          >
            <Button
              themeType="dark"
              type="submit"
              classes="w-full font-body text-xs !mt-7 md:w-96 font-normal"
              //onClick={() => ""}
            >
              FOLLOW US ON INSTAGRAM
            </Button>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex w-full justify-center items-center gap-6 max-h-[41rem] overflow-hidden">
        <div className="flex gap-6 flex-col -mt-[33rem]">
          {renderImages(images.slice(0, 4))}
        </div>
        <div className="flex gap-6 flex-col -mt-24">
          {renderImages(images.slice(0, 4))}
        </div>
        <div className="flex gap-6 flex-col -mt-80">
          {renderImages(images.slice(0, 4))}
        </div>
      </div>
      <div className="block md:hidden">
        <Image
          src={"/share-homepage/share-6.jpeg"}
          alt="feature-image"
          height={400}
          width={600}
          className="w-72 h-96 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HomeScreenShareLove;
