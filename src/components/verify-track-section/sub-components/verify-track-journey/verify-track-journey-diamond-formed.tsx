import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const Journey_Items = [
  {
    icon: "/image 20.png",
    text: "Up to 3 billion years ago",
  },
  {
    icon: "/image 14.png",
    text: "Up to 200 km in depth",
  },
  {
    icon: "/image 15.png",
    text: "At 900 - 1300 Degree Celsius",
  },
];

const VerifyTrackJourneyDiamondFormed: React.FC<Props> = () => {
  return (
    <div className="w-full md:w-[716px] flex flex-col items-center gap-14 px-4">
      <div className="flex flex-col items-start gap-9">
        <div className="h-[300px] w-full bg-bgdiajur bg-cover bg-center"></div>
        <div className="flex flex-col items-start gap-3">
          <span className="text-black text-base font-montserrat font-normal font-semibold leading-normal">
            How was your diamond formed?
          </span>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {Journey_Items.map((item) => (
            <div
              className="flex flex-col items-center gap-[21px] md:w-1/3"
              key={item.text}
            >
              <Image
                src={item.icon}
                alt="Heart"
                height={50}
                width={66}
                className="m-auto w-16 h-12 mb-6"
              />
              <span className="text-black text-base font-montserrat font-semibold">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col">
          <span className="text-black text-base font-montserrat font-normal">
            Your diamond was formed hundreds of kilometres below the earth’s
            surface forging through extreme heat and pressure crystalizing
            fragments of carbon to form a rough diamond.
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifyTrackJourneyDiamondFormed;
export { type Props as VerifyTrackJourneyDiamondFormedProps };
