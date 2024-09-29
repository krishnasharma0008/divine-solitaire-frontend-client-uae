import { useContext, useState } from "react";

import { BorderBar, Button, Options, OptionsProps } from "@/components/common";
import InputText from "@/components/common/input-text";
import { InfoIcon } from "@/components/icons";
import { formatByCurrency } from "@/util";

import { STEPS } from "./verify-track-loan-steps-enum";
import { VerifyTrackContext } from "../../../../context/verify-track-context";

interface OptionType {
  txt: string;
  percentage?: string;
  amount?: string;
  className?: string;
}

const OptionComponent: React.FC<OptionType> = ({ txt }) => (
  <div className="flex justify-between text-base leading-5 font-normal ">
    <div>
      <div className="font-Montserrat not-italic font-normal text-sm lg:text-base leading-5 ">
        {txt}
      </div>
      <div className="text-xs text-[#B0B0B0]"></div>
    </div>
    <span className="mr-4 font-Montserrat underline not-italic font-normal text-base leading-5 ml-1">
      View Details
    </span>
  </div>
);

interface VerifyTrackLoanProps {
  setCurrentStep: (step: STEPS) => void;
}

const VerifyTrackLoanSc: React.FC<VerifyTrackLoanProps> = ({
  setCurrentStep,
}) => {
  const handleCheckboxChange = (changedIdx: number) =>
    setOptions(
      options.map((option, idx) => ({
        ...option,
        className: idx === changedIdx ? "bg-black text-white" : "",
      }))
    );

  const [options, setOptions] = useState<Array<OptionType>>([
    {
      txt: "₹ 2500 x 12 Months",
    },
    {
      txt: "₹ 3334 x 9 Months",
    },
    {
      txt: "₹ 5000 x 6 Months",
    },
    {
      txt: "₹ 10000 x 3 Months",
    },
  ]);

  const handleClickProceed = () => setCurrentStep(STEPS.TWO);

  const { productDetails } = useContext(VerifyTrackContext);

  if (!productDetails) return null;

  const optionsProps: OptionsProps<OptionType> = {
    options,
    name: "loan-options",
    render: (data, idx) => <OptionComponent {...data} key={idx} />,
  };

  return (
    <>
      <div className="w-full font-Montserrat">
        <div className="flex flex-col items-center p-0 h-8 gap-3">
          <span className="not-italic font-normal text-xl leading-6 text-gray-900">
            Request a Loan
          </span>
        </div>
        <BorderBar className="border-y border-[#A6A6A6]" />
        <div className="flex justify-between not-italic font-normal text-base leading-5 text-gray-900">
          Current Value:
          <span className="float-right not-italic font-medium text-lg leading-5 text-gray-900">
            {`${formatByCurrency(
              productDetails.current_price,
              productDetails.currency_locale,
              productDetails.currency_code
            )}`}
          </span>
        </div>
        <div className="mt-7">
          <div className="flex flex-row justify-between items-center p-0 gap-9">
            <div className="not-italic font-normal text-base leading-5 text-center text-gray-900">
              Required Loan Amount
            </div>
            <div>
              <InputText
                // onChange={handleCheckboxChange}
                type="number"
                label="Amount"
                value=""
                className="float-right"
              />
            </div>
          </div>
          <div className="mt-6 font-Montserrat not-italic font-normal text-base leading-5 text-[#5B5B5B] items-baseline">
            Maximum Loan Amount : ₹ 50,000
          </div>
          <div className="mt-6 flex flex-row items-center p-0 gap-2 mb-5">
            <div className="font-Montserrat not-italic font-normal text-base leading-5 text-gray-900">
              Pick your EMI plan
            </div>
            <div className="not-italic font-normal text-base leading-5 text-gray-900">
              @14.99% p.a.
            </div>
          </div>
        </div>
        <div>
          <Options
            {...optionsProps}
            className={
              'py-4 justify-between gap-2 [&>input[type="radio"]]:accent-white [&>div]:border [&>div]:border-black'
            }
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
      <a className="mt-9 flex items-center h-2 gap-1">
        <InfoIcon className="fill-white w-6 h-6" />
        <span className="underline italic font-normal text-base leading-5 text-gray-900">
          {" "}
          Check Price Breakup
        </span>
      </a>
      <div className="flex justify-between gap-4 mt-12">
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
        >
          PROCEED
        </Button>
      </div>
    </>
  );
};

export default VerifyTrackLoanSc;
