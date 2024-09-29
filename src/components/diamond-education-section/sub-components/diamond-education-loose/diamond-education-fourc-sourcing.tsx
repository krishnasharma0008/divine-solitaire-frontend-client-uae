import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const DiamondEducationFourCSourcing: React.FC<Props> = () => {
  return (
    <div className="w-full bg-[#F3F4F8] border">
      <div className="m-auto bg-white shadow-md">
        <div className="md:p-4">
          <div className="mb-4 md:mb-8">
            <Image
              alt="Diamond Cut"
              src="/diamond-education-four-c-sourcing.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <div className="px-2">
            <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
              <p className="mb-2.5 text-justify">
                While selecting your favourite diamond shape, the ideal cut with
                excellent clarity, etc., it is also important for you to know
                that the diamonds you choose are ethically sourced. But before
                understanding what the term means, let’s have a look at what
                conflict-free diamonds are.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondEducationFourCSourcing;
export { type Props as DiamondEducationFourCSourcingProps };
