import Image from "next/image";

import { Button } from "@/components/common";

interface Props {
  children?: React.ReactNode;
}

const VerifyTrackResaleConfirmation: React.FC<Props> = () => (
  <div className="flex flex-col items-center gap-9 mt-24">
    <Image
      src="/Vector.png"
      alt="Thank You"
      className="m-auto  mb-6"
      height={50}
      width={60}
    />

    <div className="flex flex-col items-center gap-2">
      <div className="text-gray-900 text-lg font-montserrat font-semibold leading-normal tracking-tight">
        Thank You!!
      </div>
      <div className="text-gray-900 text-center text-base font-montserrat font-normal leading-normal">
        Your policy is under review
      </div>
    </div>

    <div className="flex items-center justify-center">
      <Button
        themeType="dark"
        classes="w-60 text-white text-base font-montserrat font-semibold leading-normal tracking-tight"
      >
        Home
      </Button>
    </div>
  </div>
);

export default VerifyTrackResaleConfirmation;
export { type Props as VerifyTrackResaleConfirmationProps };
