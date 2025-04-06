import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { BorderBar, Button } from "@/components/common";
//import Checkbox from "@/components/common/checkbox";
import InputText from "@/components/common/input-text";
import { XMarkIcon } from "@/components/icons";
import { SaleType } from "@/enum/sale-type-enum";
import { getToken, setRedirectionRoute } from "@/local-storage";
import { formatByCurrency } from "@/util";

import { RESALE_STEPS } from "./verify-track-resale-steps-enum";
import { VerifyTrackContext } from "../../../../context/verify-track-context";

interface VerifyTrackResaleUpgradeProps {
  setCurrentStep: (step: RESALE_STEPS) => void;
  productAmt: string;
  setProductAmt: (amt: string) => void;
  setSaletype: (saletype: SaleType) => void;
}

const VerifyTrackResaleUpgrade: React.FC<VerifyTrackResaleUpgradeProps> = ({
  setCurrentStep,
  productAmt,
  setProductAmt,
  setSaletype,
}) => {
  //const [tnc, setTnc] = useState<boolean>(false);
  useEffect(() => {
    setSwitchToSummary(false);
  }, []);

  const { productDetails, setSwitchToSummary } = useContext(VerifyTrackContext);

  const [isDialogOpen, setIsDialogOpen] = useState(false); //Login dialog visibility

  const { push } = useRouter();

  // const minValue =
  //   (35 / 100) * (productDetails?.current_price || 1) < 20000
  //     ? (productDetails?.current_price || 0) + 20000
  //     : (35 / 100) * (productDetails?.current_price || 1);

  // const minValue =
  //   (50 / 100) * (productDetails?.current_price || 0) < 50000
  //     ? 50000
  //     : (50 / 100) * (productDetails?.current_price || 0);

  const minValue = productDetails?.upgrade_minimum_price || 0;
  // 50 * 0.01 * (productDetails?.current_price || 1) < 50000 //*  (productDetails?.currency_code != "INR" ? oneInrEqualUsd : 1)
  //   ? (productDetails?.current_price || 0) + 50000
  //   : 50 * 0.01 * (productDetails?.current_price || 1);

  const [showErr, setShowErr] = useState<boolean>(false);

  const handleNewProductAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductAmt(e.target.value.toString());
    setShowErr(parseInt(e.target.value) < minValue);
  };

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const isChecked = (e.target as HTMLInputElement).checked;
  //   setTnc(isChecked);
  // };

  const handleClickProceed = () => {
    // if (!tnc) {
    //   alert("Please accept Terms & Conditions");
    //   return;
    // }

    // Show the login modal when button is clicked
    if (!getToken()) {
      //setShowLogin(true);
      handleDialogOpen();
      //hideLoader();
      return;
    }

    setCurrentStep(RESALE_STEPS.TWO);
    setSaletype(SaleType.UPGRADE);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true); // Open dialog
  };

  const handleLoginDialogClose = () => {
    setIsDialogOpen(false); // Close dialog
  };

  const handleDialogClose = () => {
    setRedirectionRoute(window.location.pathname);
    push("/login");
    setIsDialogOpen(false); // Close dialog
  };

  if (!productDetails) return null;

  return (
    <>
      <div className="w-full bg-white font-Montserrat [&>div]:px-4">
        <div className="flex justify-between mt-12 text-base leading-5 text-gray-900">
          Product ID:
          <span className="float-right">{`${productDetails.uid}`}</span>
        </div>
        <div className="flex justify-between mt-4 text-base leading-5 text-gray-900">
          Current Value
          <span className="float-right text-gold">
            {`${formatByCurrency(
              productDetails.current_price,
              productDetails.currency_locale,
              productDetails.currency_code
            )}`}
          </span>
        </div>
        <BorderBar className="mt-10" />
        {/* <div className="border-[#F4F4F4] border-4 my-3" /> */}

        <div className="mt-6 flex justify-between flex-col lg:flex-row items-center [&>div]:w-full [&>div>div>div>label]">
          <div className="hidden lg:block">Enter new product amount:</div>
          <div className="hidden lg:block">
            <InputText
              onChange={handleNewProductAmount}
              type="number"
              value={productAmt}
              className=" lg:float-right"
            />
            <span className={`text-rose-600 ${!showErr ? "invisible" : ""}`}>
              Minimum amount to upgrade is{" "}
              {formatByCurrency(
                minValue,
                productDetails.currency_locale,
                productDetails.currency_code
              )}
            </span>
          </div>
          <div className="lg:hidden">
            <InputText
              onChange={handleNewProductAmount}
              type="number"
              label="Enter new product amount:"
              value={productAmt}
            />
            <span className={`text-rose-600 ${!showErr ? "invisible" : ""}`}>
              Minimum amount to upgrade is{" "}
              {formatByCurrency(
                //minValue + productDetails.current_price,
                minValue,
                productDetails.currency_locale,
                productDetails.currency_code
              )}
            </span>
          </div>
        </div>
        <div className="px-4 mt-7 text-center   text-base">
          <div className="bg-black border rounded-md">
            <div className="text-white text-xl leading-6 pt-2.5 pb-2.5 font-medium tracking-wide">
              {`${formatByCurrency(
                parseInt(productAmt) < minValue
                  ? 0
                  : parseInt(productAmt) - productDetails.current_price || 0,
                productDetails.currency_locale,
                productDetails.currency_code
              )}`}
            </div>
            <div className="m-2.5 nnot-italic leading-5 text-white">
              Approximate Value Payable:
            </div>
          </div>
        </div>
      </div>
      {/* <div className="px-4 w-full flex mt-6 ">
        <Checkbox
          id="remember_me"
          onChange={handleCheckboxChange}
          className="text-base leading-5 [&>input]:w-4"
          checked={tnc}
        >
          Accept Terms & Conditions
        </Checkbox>
      </div> */}
      <div className="px-4 flex justify-between gap-4 mt-12 mb-[13px]">
        <Button
          themeType="light"
          classes="w-6/12 text-base leading-5 font-medium py-3"
        >
          CANCEL
        </Button>
        <Button
          themeType="dark"
          classes="w-6/12 text-base leading-5 font-medium"
          onClick={handleClickProceed}
          disabled={showErr || !productAmt.length} // || !tnc}
        >
          PROCEED
        </Button>
      </div>
      {isDialogOpen && (
        <div
          className="pointer-events-auto fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60"
          onClick={handleLoginDialogClose}
        >
          <div
            className="relative max-w-[311px]  lg:max-w-[40%] sm:max-w-[90%] rounded-md bg-white shadow-sm"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className=" flex shrink-0 font-[Montserrat] font-bold text-base justify-around align-middle py-4 text-[#000000]">
              <XMarkIcon
                className="h-5 w-5 absolute top-1.5 right-1.5"
                onClick={handleLoginDialogClose}
              />
            </div>
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
  );
};

export default VerifyTrackResaleUpgrade;
