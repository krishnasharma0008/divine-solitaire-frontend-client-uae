import { useContext, useState } from "react";

import { BorderBar, Button, Options, OptionsProps } from "@/components/common";
import Checkbox from "@/components/common/checkbox";
import InputText from "@/components/common/input-text";
//import { InfoIcon } from "@/components/icons";
import { SaleType } from "@/enum/sale-type-enum";
import { formatByCurrency } from "@/util";

import { RESALE_STEPS } from "./verify-track-resale-steps-enum";
import { VerifyTrackContext } from "../../../../context/verify-track-context";

interface OptionType {
  txt: string;
  percentage: string;
  amount: string;
}

interface VerifyTrackResaleBuybackProps {
  setCurrentStep: (currentStep: RESALE_STEPS) => void;
  setProductAmt: (amt: string) => void;
  setSaletype: (saletype: SaleType) => void;
}

const OptionComponent: React.FC<OptionType> = ({ txt, amount }) => (
  <div className="flex justify-between text-base leading-5 font-normal items-center">
    <div className="">{txt}</div>
    <div className="[&>div>div]:max-w-[100px] [&>div>div]:min-w-[100px]">
      <InputText
        value={amount}
        type="text"
        className="text-gold w-32 disabled:bg-white rounded-none text-right border"
        containerClass="!m-0 border"
        label=""
        disabled
      />
    </div>
  </div>
);

const VerifyTrackResaleBuyback: React.FC<VerifyTrackResaleBuybackProps> = ({
  setCurrentStep,
  setProductAmt,
  setSaletype,
}) => {
  const [tnc, setTnc] = useState<boolean>(false);

  const [storetype, setStoreType] = useState<string>("");

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = (e.target as HTMLInputElement).checked;
    setTnc(isChecked);
  };

  const handleClickProceed = () => {
    setProductAmt("");
    setProductAmt(storetype);
    setSaletype(SaleType.BUYBACK);
    if (!tnc) return;
    setCurrentStep(RESALE_STEPS.TWO);
  };

  const { productDetails } = useContext(VerifyTrackContext);

  if (!productDetails) return null;

  const options: OptionsProps<OptionType> = {
    options: [
      {
        txt: "Buyback through same store",
        percentage: (
          (productDetails.buyback_same_store_price /
            productDetails.current_price) *
          100
        ).toFixed(2),
        amount: formatByCurrency(productDetails.buyback_same_store_price, productDetails.currency_locale, productDetails.currency_code),
      },
      {
        txt: "Buyback through different store",
        percentage: (
          (productDetails.buyback_diffrent_store_price /
            productDetails.current_price) *
          100
        ).toFixed(2),
        amount: formatByCurrency(productDetails.buyback_diffrent_store_price, productDetails.currency_locale, productDetails.currency_code),
      },
    ],
    render: (data, idx) => <OptionComponent {...data} key={idx} />,
    name: "buyback",
  };

  const radioCheckboxChange = (
    idx: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = (e.target as HTMLInputElement).checked;
    //setTnc(isChecked);
    setStoreType("");
    if (idx === 0 && isChecked === true) {
      setStoreType(
        "buyback_same_store," +
          productDetails.buyback_same_store_price.toString()
      );
    }
    if (idx === 1 && isChecked === true) {
      setStoreType(
        "buyback_diffrent_store," +
          productDetails.buyback_diffrent_store_price.toString()
      );
    }
  };

  return (
    <>
      <div className="w-full font-Montserrat [&>div]:pr-4">
        <div className="flex justify-between mt-12 mb-5 text-base leading-5 text-gray-900 pl-4">
          Product ID:
          <span className="float-right">{`${productDetails.uid}`}</span>
        </div>
        {/* <div className="flex justify-between mt-4 text-base leading-5 text-gray-900 pl-4">
          Current Value
          <span className="float-right">
            {`${formatByCurrency(productDetails.current_price, "en-IN", "INR")}`}
          </span>
        </div> */}

        <BorderBar className="border-y" />

        <Options
          {...options}
          name="store-type"
          // className="[&>input]:accent-black gap-2 items-baseline [&>input]:absolute [&>input]:mt-0.5 [&>label]:ml-6"
          onChange={radioCheckboxChange}
          className="[&>div]:w-full [&>div>label:nth-child(2)]:w-full [&>div]:pl-o gap-2 mt-5"
        />
        {/* <div className="mt-2">Buyback applicable on or after: 04/05/2023</div> */}
      </div>
      {/* <a className="px-4 mt-9 flex items-center h-2 gap-1">
        <InfoIcon className="fill-white w-6 h-6" /> Check Price Breakup
      </a> */}
      <div className="px-4 w-full flex mt-10">
        <Checkbox
          id="remember_me"
          onChange={handleCheckboxChange}
          className="text-base leading-5 [&>input]:w-4"
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
          disabled={!tnc}
        >
          PROCEED
        </Button>
      </div>
    </>
  );
};

export default VerifyTrackResaleBuyback;
