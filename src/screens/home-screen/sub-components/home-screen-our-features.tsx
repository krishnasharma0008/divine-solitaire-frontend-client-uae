import Image from "next/image";
import Marquee from "react-fast-marquee";

const images = [
  "/features/dna.svg",
  "/features/forbes.svg",
  "/features/mint.svg",
  "/features/pune-times.svg",
  "/features/times-of-india.svg",
  "/features/business-line.svg",
  "/features/bombay-times.svg",
  "/features/business-standard.svg",
  "/features/economic-times.svg",
];

const HomeScreenOurFeatures: React.FC = () => {
  const renderImages = (images: Array<string>, className?: string) =>
    images.map((image) => (
      <div key={image} className={className}>
        <Image
          src={image}
          alt="feature-image"
          height={400}
          width={4000}
          className="w-36 md:w-full max-w-[250px] h-auto"
        />
      </div>
    ));

  return (
    <div className="flex flex-col items-center md:px-0 [&>div]:px-4 bg-[#f2efec] md:bg-white py-11 md:py-0">
      <div className="mb-9 text-gray-900 text-2xl md:text-5xl font-bold md:leading-[3.5rem] tracking-wider uppercase text-center md:text-left">
        Our Features
      </div>
      <div
        className="hidden md:flex w-full overflow-x-scroll whitespace-nowrap"
        style={{ overflowX: "hidden" }}
      >
        <Marquee>
          {renderImages(
            images,
            "inline-block py-2.5 w-36 align-middle mx-2 [&>img]:h-10 scrollbar-hide"
          )}
        </Marquee>
      </div>
      {/* <div className="hidden md:flex mt-12 w-full justify-between items-center gap-18 max-w-4xl">
        {renderImages(images.slice(0, 5))}
      </div>
      <div className="hidden md:flex mt-12 w-full justify-between items-center gap-18">
        {renderImages(images.slice(5, 9))}
      </div> */}
      <div className="block md:hidden w-full overflow-x-scroll whitespace-nowrap">
        <Marquee>
          {renderImages(
            images,
            "inline-block py-2.5 w-36 align-middle mx-2 [&>img]:h-10 scrollbar-hide"
          )}
        </Marquee>
      </div>
    </div>
  );
};

export default HomeScreenOurFeatures;
