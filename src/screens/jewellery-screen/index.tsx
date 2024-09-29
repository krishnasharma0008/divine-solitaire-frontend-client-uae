import Image from "next/image";

import Carousel from "@/components/common/carousel";

const Jewellery: React.FC = () => {
  const images = ["/Rectangle 13.png", "/BEYOND BEAUTY 1.png", "/SETU 1.png"];
  const image = [
    "/Rectangle 13 (1).png",
    "/BALLERINA 1.png",
    "/COLORS OF LOVE 1.png",
  ];

  const making_iamges = [
    {
      src: "/Rectangle 135.png",
      alt: "Our Craftsmanship",
      //text: "Our Craftsmanship",
    },
    {
      src: "/Rectangle 136.png",
      alt: "Jewellery USP&apos;s",
    },
    {
      src: "/Rectangle 137.png",
      alt: "Collections",
    },
  ];
  const renderImages = (images: Array<string>, className?: string) =>
    images.map((image) => (
      <div key={image} className={className}>
        <Image
          src={image}
          alt="feature-image"
          height={0}
          width={0}
          sizes="100vw"
          className="w-auto h-auto"
        />
      </div>
    ));

  return (
    <div>
      <div className="inline-flex flex-col items-center mt-[72px]">
        <div className="flex flex-col items-center">
          <div className=" text-center">
            <span className="text-gray-900 text-3xl font-montserrat font-medium tracking-widest">
              EXPLORE OUR COLLECTIONS
            </span>
          </div>
          <div className="mt-4 mb-8 flex items-center">
            <span className=" text-center text-gray-700 text-xl font-montserrat font-medium tracking-wider">
              Discover your new favorite piece. Explore our collections
            </span>
          </div>

          <div className="flex justify-center items-center">
            <div>{renderImages(images.slice(0, 4), "mb-6 mr-4 ml-4")}</div>
            <div>{renderImages(image.slice(0, 4), "mb-6 mr-4")}</div>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center mt-[108px]">
          <div className=" text-center">
            <span className="text-gray-900 text-3xl font-montserrat font-medium tracking-widest uppercase">
              Solitaires crafted to charm
            </span>
          </div>
          <div className="mt-1 mb-12 flex items-center">
            <span className=" text-center text-gray-700 text-xl font-montserrat font-medium tracking-wide">
              Solitaire jewellery crafted with precision and care
            </span>
          </div>
          <div className="flex justify-center items-center">
            {making_iamges.map((item) => (
              <div className="relative mb-6 mr-4" key={item.alt}>
                <Image
                  src={item.src}
                  alt="feature"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-auto h-auto"
                />
                <div className="absolute top-0 left-0 bg-[#161616] bg-opacity-50 w-full h-[42px] flex items-center justify-center">
                  <span className="text-white text-24 font-montserrat font-medium">
                    {item.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-Jewelbgimg bg-cover bg-center text-white shadow-md hidden md:flex flex-wrap mt-[108px]">
          <div className="w-full md:w-2/3 py-[69px] pl-[109px] pr-[605px] md:px-20 text-black">
            <div className="w-full">
              <div className="flex flex-col items-center pb-10">
                <div className="w-full flex items-center justify-left">
                  <div>
                    <h2 className="text-gray-900 text-3xl font-montserrat font-medium tracking-wide">
                      Flexibility In Design
                    </h2>
                    <p className="mt-6 text-gray-900 text-base font-montserrat leading-6 tracking-tight">
                      With high levels of creativity and exceptional
                      artisanship, inspired jewellery designers can create
                      customised jewellery to make your special moments last
                      forever. Besides captivating designs, our jewellery range
                      offers you the freedom to choose your own design and the
                      desired solitaire to create a unique jewellery piece that
                      you can truly call your “own” creation. The authenticity
                      of our jewellery range is guaranteed by its unique and
                      exclusive trademark symbol, with an embedded diamond on
                      the inner side of the ring between “D” and “S” embossing.
                      This trademark symbol is a mark of guarantee and purity
                      from our exclusive jewellery range. It assures customers
                      the best quality and finish of the highest international
                      standard that is comparable with reputed international
                      brands. The solitaires used in our signature designs are
                      the most magnificent and glamorous.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3"></div>
        </div>
      </div>

      <div className="md:hidden items-center mt-auto">
        <div className=" text-center">
          <span className="text-gray-900 text-3xl font-montserrat font-medium tracking-widest uppercase">
            Solitaires crafted to charm
          </span>
        </div>
        <div className="mt-1 mb-12 flex items-center">
          <span className=" text-center text-gray-700 text-xl font-montserrat font-medium tracking-wide">
            Solitaire jewellery crafted with precision and care
          </span>
        </div>
        <div>
          <Carousel
            type="slide"
            cardType="ImageCard"
            className="w-full mt-0"
            slidesPerView={1}
            navigation={false}
            items={making_iamges}
          />
        </div>
      </div>

      <div className="block md:hidden w-full flex items-center justify-center px-2.5">
        <div>
          <h2 className="text-gray-900 text-3xl font-montserrat font-medium tracking-wide">
            Flexibility In Design
          </h2>
          <p className="mt-6 text-gray-900 text-base font-montserrat leading-6 tracking-tight">
            With high levels of creativity and exceptional artisanship, inspired
            jewellery designers can create customised jewellery to make your
            special moments last forever. Besides captivating designs, our
            jewellery range offers you the freedom to choose your own design and
            the desired solitaire to create a unique jewellery piece that you
            can truly call your “own” creation. The authenticity of our
            jewellery range is guaranteed by its unique and exclusive trademark
            symbol, with an embedded diamond on the inner side of the ring
            between “D” and “S” embossing. This trademark symbol is a mark of
            guarantee and purity from our exclusive jewellery range. It assures
            customers the best quality and finish of the highest international
            standard that is comparable with reputed international brands. The
            solitaires used in our signature designs are the most magnificent
            and glamorous.
          </p>
        </div>
      </div>

      <div className="w-full mt-[63px] mb-[72px]">
        <Image
          alt="features2"
          src="/Rectangle 131.png"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Jewellery;
