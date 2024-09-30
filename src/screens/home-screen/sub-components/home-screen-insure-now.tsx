import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

import getVerifyTrackByUid from "@/api/verify-track";
import { Button, InputText } from "@/components";
//import useCountryCode from "@/hooks/use-country-code";
import { useCurrency } from "@/context/currency-context";
//import { reverseCountryCurrencyMap } from "@/util/reverse-country-currency-map"; //

const HomeScreenInsureNow: React.FC = () => {
  const [uid, setUid] = useState<string>("");

  const { push } = useRouter();

  //const countrycode = useCountryCode();
  const { currency } = useCurrency(); //for currency
  const countrycode = currency; //reverseCountryCurrencyMap[currency];

  const changeHandler = (fn: (str: string) => void) => (e: ChangeEvent) =>
    fn((e.target as HTMLInputElement).value);

  const onClickHandler = () => {
    getVerifyTrackByUid(uid, countrycode as string)
      .then((res) => {
        if (res.data.data) push(`/track/jewellery/${uid}`);
      })
      .catch((err) => console.log("ERRRR", err));
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-0">
      <div>
        <div className="mb-6 md:mb-9 text-gray-900 text-2xl md:text-5xl font-bold md:leading-[3.5rem] tracking-wider uppercase text-center">
          Insure Now
        </div>
        <div className="mb-12 text-gray-700 text-sm md:text-xl font-normal leading-6 md:leading-7 tracking-wide text-center">
          Each of our solitaires carries a 1-year insurance from a reputed
          insurance company to offer our customers complete peace of mind.
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between md:bg-[#FAFAFA] md:p-12">
        <Image
          src="/hominsure.png"
          alt="Insurance"
          width="0"
          height="0"
          sizes="100vw"
          className="w-24 md:w-64 h-auto my-4 md:my-0"
        />

        <div className="w-full md:w-5/12">
          <InputText
            label="Please Enter Unique ID"
            containerClass=""
            className="w-full uppercase !border-gray_light"
            placeholder="Enter UID"
            id="uid"
            name="uid"
            onChange={changeHandler(setUid)}
            type="text"
            value={uid}
          />
          <Button
            onClick={onClickHandler}
            themeType="dark"
            classes="mt-6 !md:mt-5 !rounded-[0.25rem] font-normal !text-base !leading-5"
          >
            SUBMIT
          </Button>
          <Image
            src="/image 21.png"
            alt="Divine Logo"
            width="0"
            height="0"
            sizes="100vw"
            className="hidden md:block w-full h-auto mt-14"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreenInsureNow;
