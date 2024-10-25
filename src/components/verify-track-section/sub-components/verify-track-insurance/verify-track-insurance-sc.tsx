import { useRouter } from "next/router";
import { useContext, useState } from "react";

import {
  Button,
  SafetyIcon,
  EasyClaimProcessIcon,
  TermsConditionIcon,
} from "@/components";
import { InsuranceIcon } from "@/components";
import { getToken, setRedirectionRoute } from "@/local-storage";

import { VerifyTrackContext } from "../../../../context/verify-track-context";
import { STEPS } from "../verify-track-loan/verify-track-loan-steps-enum";

const INSURANCE_ITEMS = [
  {
    icon: <SafetyIcon />,
    text: "FREE INSURANCE FOR 1 YEAR",
    link: {
      //text: "Read More",
      href: "",
    },
  },
  {
    icon: <EasyClaimProcessIcon />,
    text: "EASY CLAIM PROCESS",
    link: {
      //text: "Read More",
      href: "",
    },
  },

  {
    icon: <TermsConditionIcon />,
    text: "TERMS & CONDITIONS",
    link: {
      //text: "Read More",
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
  const [isDialogOpen, setIsDialogOpen] = useState(false); //Login dialog visibility

  const { push } = useRouter();

  if (!productDetails) return null;
  const handleClick = () => {
    if (getToken()) {
      setCurrentStep(STEPS.TWO);
    } else {
      handleDialogOpen();
    }
  };

  //console.log("Image Gallery :", imageGalleryImages);
  const handleDialogOpen = () => {
    setIsDialogOpen(true); // Open dialog
  };
  const handleDialogClose = () => {
    setRedirectionRoute(window.location.pathname);
    push("/login");
    setIsDialogOpen(false); // Close dialog
  };

  return (
    <div>
      <>
        {/* Dialog Structure */}
        {isDialogOpen && (
          <div className="pointer-events-auto fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60">
            <div className="relative max-w-[311px]  lg:max-w-[40%] sm:max-w-[90%] bg-white shadow-sm">
              <div className="w-full relative border-t border-slate-200 p-4 ">
                <div className="flex justify-center items-center font-[Montserrat] text-sm leading-6">
                  <p className="font-medium">Please Login To Proceed</p>
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap items-center pb-4 justify-center">
                <div className="w-24 ">
                  <Button
                    onClick={handleDialogClose} // Close dialog on Cancel button
                    className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100"
                    themeType="dark"
                  >
                    Login In
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
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
                  {/* <a href={item.link.href}>{item.link.text}</a> */}
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
