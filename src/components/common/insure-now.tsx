import { useState } from "react";

import { Button } from "@/components";

import Download from "../icons/download-icon";

export interface InsureNowFormProps {
  uid: string;
  polno: string;
  polstatus: string;
  phname: string;
  purstore: string;
  // current_price: string;
  // carat: string;
  imgurl: string;
  onDownloadClick?: () => void;
  // onUpgradeClick?: () => void;
}

const InsureNowForm: React.FC<InsureNowFormProps> = ({
  uid,
  polno,
  polstatus,
  phname,
  purstore,
  imgurl,
  onDownloadClick,
}) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      {step === 1 && (
        <>
          {/* <h2 className="text-2xl mb-4">Step 1: Personal Information</h2> */}
          {/* Add your Step 1 form fields here */}

          <div className="w-full border rounded-md items-center justify-center">
            <div className="p-4 flex justify-center items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgurl === "" ? "/color_1_D.png" : imgurl}
                alt={`${uid} InsureNow`}
                width={200}
                height={60}
                onError={(event) => {
                  const imgElement = event.target as HTMLImageElement;
                  if (imgElement) {
                    imgElement.src = "/Empty.jpg";
                    //imgElement.src = "/color_1_D.png";
                  }
                }}
                className="center md:w-auto w-60 max-h-52 md:max-h-auto md:h-full m-auto"
              />
            </div>
            <div className="p-4  bg-yellow-50">
              <div className="grid gap-3">
                <div className="flex justify-between">
                  <p className="text-left text-gray-700 font-Montserrat text-xl font-semibold leading-6">
                    {"Uid"} - {uid}
                  </p>
                </div>

                <div className="flex justify-between">
                  <p className="text-right text-gray-700 font-montserrat font-normal text-sm">
                    {polno}
                  </p>
                  <p className="text-right text-red-700 font-montserrat font-normal text-sm">
                    {polstatus}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={nextStep}
            themeType="dark"
            className="inline-flex items-center justify-center px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold capitalize text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition"
          >
            See Policy Details
          </Button>
        </>
      )}

      {step === 2 && (
        <>
          {/* <h2 className="text-2xl mb-4">Step 2: Contact Information</h2> */}
          {/* Add your Step 2 form fields here */}

          <div className="w-full border rounded-md items-center justify-center">
            <div className="p-4 flex justify-center items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgurl === "" ? "/color_1_D.png" : imgurl}
                alt={`${uid} InsureNow`}
                width={200}
                height={60}
                onError={(event) => {
                  const imgElement = event.target as HTMLImageElement;
                  if (imgElement) {
                    imgElement.src = "/Empty.jpg";
                    //imgElement.src = "/color_1_D.png";
                  }
                }}
                className="center md:w-auto w-60 max-h-52 md:max-h-auto md:h-full m-auto"
              />
            </div>
            <div className="p-4">
              <div className="grid gap-3">
                <div className="flex justify-between">
                  <p className="text-left text-gray-700 font-Montserrat">
                    {"Policy Detail"}
                  </p>
                  <p className="text-right bg-red-100 px-4 py-2 rounded border-2 border-red-200 text-red-700 font-montserrat font-normal text-sm">
                    {polstatus}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-right font-normal text-sm">
                    Policy Number
                  </p>
                  <p className="text-right text-red-700 font-montserrat font-normal text-sm">
                    <Download
                      className="inline-block md:mr-1"
                      onClick={onDownloadClick}
                    />{" "}
                    Download Policy
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-left text-gold font-montserrat font-medium text-sm">
                    {polno}
                  </p>
                </div>
                <div className="flex justify-between border-t">
                  <span>
                    <p className="text-left text-gray-700 py-4  font-montserrat font-normal text-sm">
                      Policy Holder Name
                    </p>
                    <p className="text-left text-gold font-medium">{phname}</p>
                  </span>
                </div>
                <div className="flex justify-between border-t">
                  <span>
                    <p className="text-left text-gray-700 py-4  font-montserrat font-normal text-sm">
                      Product Uid
                    </p>
                    <p className="text-left text-gold font-medium">{uid}</p>
                  </span>
                </div>
                <div className="flex justify-between border-t">
                  <span>
                    <p className="text-left text-gray-700 py-4  font-montserrat font-normal text-sm">
                      Purchase store Name
                    </p>
                    <p className="text-left text-gold font-medium">
                      {purstore}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <Button
              onClick={prevStep}
              themeType="dark"
              className="inline-flex items-center justify-center px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold capitalize text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition"
            >
              Back
            </Button>
            {/* <button type="submit" className="btn-primary">
                Submit
              </button> */}
          </div>
        </>
      )}
    </div>
  );
};

export default InsureNowForm;
