import React, { useContext } from "react";

import { Button, InputFile } from "@/components";
import InputText from "@/components/common/input-text";

import { STEPS } from "./verify-track-loan-steps-enum";
import { VerifyTrackContext } from "../../../../context/verify-track-context";

interface VerifyTrackLoanFormProps {
  children?: React.ReactNode;
  setCurrentStep: (step: STEPS) => void;
}

const VerifyTrackLoanForm: React.FC<VerifyTrackLoanFormProps> = ({
  setCurrentStep,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = (e.target as HTMLInputElement).checked;
    console.log(isChecked);
  };

  const handleClickProceed = () => {
    setCurrentStep(STEPS.THREE);
  };

  const { productDetails } = useContext(VerifyTrackContext);

  if (!productDetails) return null;

  return (
    <div>
      <div className="w-full">
        <div>
          <div className="font-montserrat not-italic font-medium text-xl leading-6 text-gray-900">
            Personal Information
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <InputText
              label="Name"
              type="text"
              value={""}
              onChange={handleChange}
              className="w-full"
              containerClass="!mb-0"
            />

            <InputText
              label="E-Mail Id"
              type="email"
              value={""}
              onChange={handleChange}
              className="w-full"
              containerClass="!mb-0"
            />

            <InputText
              label="Mobile No."
              type="number"
              value={""}
              onChange={handleChange}
              className="w-full"
              containerClass="!mb-0"
            />

            <InputText
              label="Address"
              type="text"
              value={""}
              onChange={handleChange}
              className="w-full"
              containerClass="!mb-0"
            />

            <InputText
              label="Pin Code"
              type="number"
              value={""}
              onChange={handleChange}
              className="w-full"
              containerClass="!mb-0"
            />

            <InputText
              label="Date of Birth*"
              type="date"
              value={""}
              onChange={handleChange}
              className="w-full"
              containerClass="!mb-0"
            />
          </div>
        </div>

        <div className="mt-12">
          <div className="font-montserrat not-italic font-medium text-xl leading-6 text-gray-900">
            Product Information
          </div>
          <div className="flex flex-col gap-4 mt-6 mb-4">
            <InputText
              label="UID *"
              type="text"
              value={""}
              onChange={handleChange}
              className="w-full"
              containerClass="!mb-0"
            />
            <InputText
              label="Invoice Number *"
              type="text"
              value={""}
              onChange={handleChange}
              className="w-full"
              containerClass="!mb-0"
            />
            <InputText
              label="Invoice Date *"
              type="date"
              value={""}
              onChange={handleChange}
              className="w-full"
              containerClass="!mb-0"
            />

            <InputText
              label="Invoice Amount *"
              type="number"
              value={""}
              onChange={handleChange}
              className="w-full"
              containerClass="!mb-0"
            />
          </div>
          <InputFile
            label=""
            //onChange={onChangeHandlerCreator("polfile")}
            //value={state.polfile}
            placeholder="Upload KYC Documents"
          />
        </div>
        <div className="mt-12">
          <div className="font-montserrat not-italic font-medium text-xl leading-6 text-gray-900">
            Payment Details
          </div>
          <div className="flex flex-col gap-4 mt-6 mb-4">
            <InputText
              label="Account Holder Name*"
              type="text"
              value={""}
              onChange={handleChange}
              className="w-full"
              containerClass="!mb-0"
            />
            <InputText
              label="Account Number*"
              type="text"
              value={""}
              onChange={handleChange}
              className="w-full"
              containerClass="!mb-0"
            />
            <InputText
              label="IFSC Code*"
              type="text"
              value={""}
              onChange={handleChange}
              className="w-full"
              containerClass="!mb-0"
            />
          </div>
          <InputFile
            label=""
            //onChange={onChangeHandlerCreator("polfile")}
            //value={state.polfile}
            placeholder="Upload Cancelled Cheque"
          />
        </div>
      </div>
      <div className="flex justify-between gap-1 mt-12">
        <Button
          themeType="light"
          classes="w-6/12 text-base leading-5 font-medium"
        >
          CANCEL
        </Button>
        <Button
          themeType="dark"
          classes="w-6/12 text-base leading-5 font-medium"
          onClick={handleClickProceed}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default VerifyTrackLoanForm;
export { type VerifyTrackLoanFormProps };
