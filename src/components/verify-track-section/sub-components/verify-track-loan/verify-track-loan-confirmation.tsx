import Image from "next/image";

import Button from "@/components/common/button";

import { STEPS } from "./verify-track-loan-steps-enum";

interface Props {
  children?: React.ReactNode;
  setCurrentStep: (step: STEPS) => void;
}

const VerifyTrackLoanConfirmation: React.FC<Props> = ({ setCurrentStep }) => {
  const handleClickProceed = () => {
    setCurrentStep(STEPS.ONE);
  };
  return (
    <div className="flex flex-col items-center gap-24 w-96">
      <div className="flex flex-col items-center gap-14 w-[409px]">
        <Image
          src="/Vector.png"
          alt="Thank You"
          className="m-auto  mb-6"
          height={80}
          width={97}
        />
        <div className="flex flex-col justify-center items-center gap-6 self-stretch">
          <div className="text-gray-700 text-lg font-medium font-montserrat">
            Thank You for your request!!!
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col self-stretch">
            <div className="text-gray-700 text-base font-normal font-montserrat">
              You have requested for loan of ₹ 16,000 against UID <b>18A6N</b>
            </div>
          </div>
          <div className="flex flex-col self-stretch">
            <div className="text-gray-700 text-base font-normal font-montserrat">
              Your Request number is IU12531. A copy of request has been sent to
              your whatsapp and email.
            </div>
          </div>
          <div className="flex flex-col self-stretch">
            <div className="text-gray-700 text-base font-normal font-montserrat">
              Please visit nearest branch to submit your solitaire
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center text-center [&>Button]:w-52 ">
          <Button
            themeType="dark"
            classes="w-6/12 text-base leading-5 font-medium"
            onClick={handleClickProceed}
          >
            GO HOME
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyTrackLoanConfirmation;
export { type Props as VerifyTrackLoanConfirmationProps };
