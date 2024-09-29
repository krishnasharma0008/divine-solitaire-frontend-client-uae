import Image from "next/image";

interface DiamondFeaturesProps {
  className?: string;
}

const DiamondFeatures: React.FC<DiamondFeaturesProps> = ({ className }) => (
  <div className={`mb-8 w-full bg-cover ${className}`}>
    <div className="flex flex-col py-4 px-4 m-2 md:m-0 md:px-4 border-[#826344] border rounded-lg">
      <span className="flex gap-4 md:gap-6 items-center font-[Montserrat] font-semibold text-xl md:text-2xl leading-6 md:leading-7 text-center text-[#000000]">
        Guaranteed on all Round Brilliant Diamond
      </span>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col items-center text-center pt-4 md:pt-6 gap-y-2 md:gap-y-4">
          <div className="relative h-16 w-16 md:h-28 md:w-28">
            <Image
              src="/HEARTS.png"
              alt="Hearts"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className="md:pt-2 font-[Montserrat] font-semibold md:text-2xl leading-5 md:leading-7 text-center text-[#000000]">
            Hearts
          </span>
        </div>
        <div className="flex flex-col items-center text-center pt-4 md:pt-6 gap-y-2 md:gap-y-4">
          <div className="relative h-16 w-16 md:h-28 md:w-28">
            <Image
              src="/ARROWS.png"
              alt="Arrows"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className=" md:pt-2 font-[Montserrat] font-semibold leading-5 md:text-2xl md:leading-7 text-center text-[#000000]">
            Arrows
          </span>
        </div>
      </div>
      <div className="mt-4 md:mt-6">
        <p className="font-[Montserrat] font-medium text-sm md:text-lg leading-6 md:leading-7 text-center text-[#000000]">
          Every diamond is guaranteed to be natural, rare, unmatched, precious
          and curated to qualify on all the 123 parameters Quality Check, the
          most stringent check possible in diamonds.
        </p>
      </div>
    </div>
  </div>
);

export default DiamondFeatures;
