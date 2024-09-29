import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const JourneyAboutDia_Items = [
  {
    icon: "/image 17.png",
    text: "Rough diamond",
    carat: "(0.96 carat)",
  },
  {
    icon: "/image 18.png",
    text: "Planned Model",
    carat: "",
  },

  {
    icon: "/image 19.png",
    text: "Polished Diamond",
    carat: "(0.30 carat)",
  },
];

const VerifyTrackJourneyAboutDiamond: React.FC<Props> = () => {
  return (
    <div className="w-full md:w-[716px] flex flex-col items-center px-4">
      <div className="flex flex-col justify-center items-center gap-9 self-stretch">
        <div className="flex flex-col items-start md:flex-row gap-12">
          {JourneyAboutDia_Items.map((item) => (
            <div
              className="w-[176px] flex flex-col items-center gap-4"
              key={item.text}
            >
              <Image
                src={item.icon}
                alt="Heart"
                height={70}
                width={70}
                className="m-auto w-16 h-16 mb-6"
              />
              <span className="text-black text-base font-montserrat font-normal leading-normal">
                {item.text}
              </span>
              <span className="text-black text-base font-montserrat font-normal leading-normal">
                {item.carat}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col self-stretch">
          <span className="text-black text-base font-montserrat font-normal leading-normal">
            The rough stone of carat is planned and after numerous stages of
            precise cutting and thorough polishing, the final round brilliant
            cut diamond of carat is formed. The diamonds mined from these are
            Responsibly Sourced, passed through Kimberley process & guarantees
            Natural Diamond with no artificial treatments or enhancements.
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifyTrackJourneyAboutDiamond;
export { type Props as VerifyTrackJourneyAboutDiamondProps };
