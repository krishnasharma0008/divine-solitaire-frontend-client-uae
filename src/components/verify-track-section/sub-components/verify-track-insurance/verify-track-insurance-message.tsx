import Image from "next/image";
import { useContext } from "react";

import { InsuranceIcon } from "@/components";

import { VerifyTrackContext } from "../../../../context/verify-track-context";

const VerifyTrackInsuranceMessage: React.FC = () => {
  const { productDetails, insuranceReceiptNumber } =
    useContext(VerifyTrackContext);

  if (!productDetails) return null;

  return (
    <div>
      <div className="w-full">
        <div className="text-white bg-Chinese-Black-sidebar p-2.5 float-left absolute">{`UID : ${productDetails.uid}`}</div>
        <div className="bg-Chinese-Black-sidebar flex justify-center items-center text-center py-14">
          <InsuranceIcon className="w-24 h-24" />
        </div>
        <div className="flex flex-col items-center gap-9 mt-24">
          <Image
            src="/Vector.png"
            alt="Thank You"
            className="m-auto  mb-6"
            height={50}
            width={60}
          />

          <div className="flex flex-col items-center gap-2">
            <div className="text-gray-700 text-2xl font-medium font-montserrat tracking-tighter leading-normal">
              Thank You!!
            </div>
            <div className="text-gray-700 text-center text-xl font-normal font-montserrat tracking-tight leading-normal">
              Your request # ${insuranceReceiptNumber} is under process...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyTrackInsuranceMessage;
