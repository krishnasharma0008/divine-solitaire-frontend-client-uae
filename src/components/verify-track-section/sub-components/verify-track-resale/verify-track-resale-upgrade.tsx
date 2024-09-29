import { useContext, useState } from "react";

import { BorderBar, Button } from "@/components/common";
import Checkbox from "@/components/common/checkbox";
import InputText from "@/components/common/input-text";
import { SaleType } from "@/enum/sale-type-enum";
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
  const [tnc, setTnc] = useState<boolean>(false);
  const { productDetails } = useContext(VerifyTrackContext);

  const minValue =
    (35 / 100) * (productDetails?.current_price || 1) < 20000
      ? (productDetails?.current_price || 0) + 20000
      : (35 / 100) * (productDetails?.current_price || 1);

  const [showErr, setShowErr] = useState<boolean>(false);

  const handleNewProductAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductAmt(e.target.value.toString());
    setShowErr(parseInt(e.target.value) < minValue);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = (e.target as HTMLInputElement).checked;
    setTnc(isChecked);
  };

  const handleClickProceed = () => {
    if (!tnc) {
      alert("Please accept Terms & Conditions");
      return;
    }

    setCurrentStep(RESALE_STEPS.TWO);
    setSaletype(SaleType.UPGRADE);
  };

  if (!productDetails) return null;

  return (
    <>
      <div className="w-full font-Montserrat [&>div]:px-4">
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
                minValue + productDetails.current_price,
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
                minValue + productDetails.current_price,
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
      <div className="px-4 w-full flex mt-6 ">
        <Checkbox
          id="remember_me"
          onChange={handleCheckboxChange}
          className="text-base leading-5 [&>input]:w-4"
          checked={tnc}
        >
          Accept Terms & Conditions
        </Checkbox>
      </div>
      <div className="px-4 flex justify-between gap-4 mt-12">
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
          disabled={showErr || !productAmt.length || !tnc}
        >
          PROCEED
        </Button>
      </div>
    </>
  );
};

export default VerifyTrackResaleUpgrade;
