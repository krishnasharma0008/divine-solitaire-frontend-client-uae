import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const DiamondEducationRingSize: React.FC<Props> = () => {
  return (
    <div className="w-full bg-[#F3F4F8] border">
      <div className="m-auto bg-white shadow-md">
        <div className="md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="px-2">
              {/* Content for the first column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-ring-size-chart.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="">
              {/* Content for the first column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-ring-size-chart1.jpg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="px-2 pt-5">
            <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
              <p className="mb-2.5 text-justify">
                Comfort is the most basic requirement of any commodity.
                Similarly, your wedding ring should perfectly fit your finger as
                it is going to be on your finger for most of the time. The
                diamond ring design will lose its charm completely if the ring
                sizing is not perfect. Hence, here are some tips on ring sizing.
                A perfectly fitting wedding ring or engagement rin is one that
                slides over the knuckle easily but won’t fall off your finger.
                Considering how precious a diamond wedding ring is, it is
                extremely important to choose a ring that fits perfectly well.
                However, tips on ring sizes for men are different from tips on
                ring sizes for women. Ring sizing is not a cumbersome process as
                one might expect it to be. To do so you could either measure
                your ring size online or get a plastic mould made which is
                equivalent to the actual engagement ring or wedding ring to
                ensure that your ring fits you well.
              </p>
              <p className="mb-2.5 text-justify">
                Before you begin taking the measurement of your ring, pick the
                finger that you want to wear your diamond ring on. It is
                possible that the fingers on your dominant hand might be larger
                than those on your non-dominant hand. Cold weather might cause
                your fingers to shrink, while heat or water retention might
                cause swelling of fingers. Hence, these precautions should be
                taken care of before you measure your solitaire ring size. It is
                suggested that you measure your fingers at the end of the day as
                the size of your finger changes due to the weather and the time
                of the day. It is also essential to measure your fingers more
                than 5 times to get an accurate result. If in case, your finger
                size falls between two sizes that are available, choose the
                diamond ring of larger size. You can also refer to certain size
                charts that are available on the internet.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondEducationRingSize;
export { type Props as DiamondEducationRingSizeProps };
