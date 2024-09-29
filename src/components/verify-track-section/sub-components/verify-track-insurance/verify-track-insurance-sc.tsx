import { Dialog, DialogBody } from "@material-tailwind/react";
//import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

import {
  Button,
  SafetyIcon,
  EasyClaimProcessIcon,
  TermsConditionIcon,
} from "@/components";
import { InsuranceIcon } from "@/components";
import { getToken } from "@/local-storage";

import { VerifyTrackContext } from "../../../../context/verify-track-context";
import { STEPS } from "../verify-track-loan/verify-track-loan-steps-enum";

const INSURANCE_ITEMS = [
  {
    icon: <SafetyIcon />,
    text: "FREE INSURANCE FOR 1 YEAR",
    link: {
      text: "Read More",
      href: "",
    },
  },
  {
    icon: <EasyClaimProcessIcon />,
    text: "EASY CLAIM PROCESS",
    link: {
      text: "Read More",
      href: "",
    },
  },

  {
    icon: <TermsConditionIcon />,
    text: "TERMS & CONDITIONS",
    link: {
      text: "Read More",
      href: "",
    },
  },
];

interface VerifyTrackInsuranceScProps {
  setCurrentStep: (currentStep: number) => void;
}

const VerifyTrackInsuranceSc: React.FC<VerifyTrackInsuranceScProps> = ({
  setCurrentStep,
}) => {
  const { productDetails } = useContext(VerifyTrackContext);
  const [showLogin, setShowLogin] = useState<boolean>(false);

  if (!productDetails) return null;
  const handleClick = () => {
    if (getToken()) {
      setCurrentStep(STEPS.TWO);
    } else {
      setShowLogin(true);
    }
  };

  // useEffect(() => {
  //   if (currentTab !== "") {
  //     handleClick();
  //   }
  // }, [handleClick]);

  return (
    <div>
      <>
        <Dialog
          open={showLogin}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          handler={() => {
            setShowLogin(false);
          }}
          className="md:max-w-[350px] md:min-w-[350px] lg:max-w-[350px] lg:min-w-[350px] rounded-none"
        >
          <DialogBody className="p-8 font-body text-black text-center">
            Please Login To Proceed
            <Link className="mt-4 block max-w-xs m-auto" href="/login">
              <Button themeType="dark" classes="">
                Login
              </Button>
            </Link>
          </DialogBody>
        </Dialog>
      </>
      <div className="w-full px-4">
        <div>
          <div className="text-white bg-Chinese-Black-sidebar p-2.5 float-left absolute">{`UID : ${productDetails.uid}`}</div>
          <div className="bg-Chinese-Black-sidebar flex justify-center items-center text-center py-14">
            <InsuranceIcon className="w-24 h-24" />
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-7">
          {INSURANCE_ITEMS.map((item) => (
            <div
              className="flex text-[#826344] text-3xl leading-8 items-center gap-3"
              key={item.text}
            >
              <div className="">{item.icon}</div>
              <div className="text-left m-2.5">
                <div className="not-italic font-medium text-sm leading-5 text-yellow-800 font-montserrat">
                  {item.text}
                </div>
                <div className="font-montserrat not-italic font-normal text-xs leading-4 text-yellow-800 underline pt-1.5">
                  <a href={item.link.href}>{item.link.text}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex mt-14 justify-center items-center text-center [&>Button]:w-80 ">
          <Button
            themeType="dark"
            classes="text-base leading-5 font-medium"
            onClick={handleClick}
          >
            APPLY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyTrackInsuranceSc;
