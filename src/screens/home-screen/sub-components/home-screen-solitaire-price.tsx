import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

import getVerifyTrackByUid from "@/api/verify-track";
import { Button, InputText } from "@/components";
//import useCountryCode from "@/hooks/use-country-code";
import { useCurrency } from "@/context/currency-context";
import { reverseCountryCurrencyMap } from "@/util/reverse-country-currency-map"; //

const HomeScreenSolitairePrice: React.FC = () => {
  const [uid, setUid] = useState<string>("");

  const { push } = useRouter();

  //const countrycode = useCountryCode();
  const { currency } = useCurrency(); //for currency
  const countrycode = reverseCountryCurrencyMap[currency];

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
    <div className="flex flex-col items-center md:px-0">
      <div>
        <div className="mb-9 text-gray-900 text-2xl md:text-5xl font-bold md:leading-[3.5rem] tracking-wider uppercase text-center">
          Solitaire Price Index
        </div>
        <div className="mb-12 text-gray-700 text-sm md:text-xl font-normal leading-6 md:leading-7 tracking-wide text-center">
          India&apos;s first and only Diamond Index by Divine Solitaire.
        </div>
      </div>
      <div className="w-full md:flex justify-between bg-[#FAFAFA] md:p-12">
        <Image
          src="/hominsure.png"
          alt="Insurance"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full md:w-64 h-auto "
        />

        <div className="w-5/12">
          <InputText
            label="Please Enter Unique ID"
            className="w-full uppercase"
            id="uid"
            name="uid"
            onChange={changeHandler(setUid)}
            type="text"
            value={uid}
          />
          <Button
            onClick={onClickHandler}
            // type="submit"
            themeType="dark"
            classes="mt-9 w-full inline-flex items-center justify-center px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold capitalize text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition"
          >
            SUBMIT
          </Button>
          <Image
            src="/image 21.png"
            alt="Divine Logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto mt-14"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreenSolitairePrice;
