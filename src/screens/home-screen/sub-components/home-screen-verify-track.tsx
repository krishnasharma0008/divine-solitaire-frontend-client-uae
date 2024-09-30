import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

import getVerifyTrackByUid from "@/api/verify-track";
import { ArrowRightIcon, Button, InputText } from "@/components";
//import useCountryCode from "@/hooks/use-country-code";
import { useCurrency } from "@/context/currency-context";
//import { reverseCountryCurrencyMap } from "@/util/reverse-country-currency-map"; //

const labels = [
  "Value of your diamond",
  "Insure your solitaire",
  "Solitaire Certificate",
  "Solitaire Journey",
  "Upgrade your solitaire",
  "Take a loan",
];

const HomeScreenVerifyTrack: React.FC = () => {
  const [uid, setUid] = useState<string>("");

  const { push } = useRouter();

  //const countrycode = useCountryCode();
  const { currency } = useCurrency(); //for currency
  const countrycode = currency; //reverseCountryCurrencyMap[currency];

  const changeHandler = (fn: (str: string) => void) => (e: ChangeEvent) =>
    fn((e.target as HTMLInputElement).value);

  const onClickHandler = () => {
    // e.preventDefault();
    // e.stopPropagation();
    getVerifyTrackByUid(uid, countrycode as string)
      .then((res) => {
        if (res.data.data) push(`/track/jewellery/${uid}`);
      })
      .catch((err) => console.log("ERRRR", err));
  };

  return (
    <>
      <div className="flex flex-col items-center px-4 md:px-0">
        <div className="mb-9 text-gray-900 text-2xl md:text-5xl font-bold md:leading-[3.5rem] tracking-wider uppercase text-center md:text-left">
          Our Diamonds have a story to tell
        </div>
        <div className="hidden md:block mb-12 text-gray-700 text-sm md:text-xl font-normal leading-6 md:leading-7 tracking-wide ">
          <p className="text-justify">
            With the help of the UID (product ID), you can know the price &
            quality of your Divine Solitaires, know its journey from mining to
            the finished product,
          </p>
        </div>
      </div>
      <div className="md:flex justify-between px-4 md:px-0 w-full">
        <div className="m-auto md:ml-0 w-28 md:w-auto">
          <Image
            src="/Rectangle.png"
            alt="Divine Logo"
            height={476}
            width={250}
            className="m-auto"
          />
        </div>

        <div className="md:w-1/2 text-center pt-10 [&>div]:border-none">
          <InputText
            className="font-body rounded md:rounded-none border !border-gray_light "
            id="uid"
            name="uid"
            placeholder="Enter Divine Solitaire UID"
            onChange={changeHandler(setUid)}
            type="text"
            value={uid}
          />
          <Button
            onClick={onClickHandler}
            themeType="dark"
            type="button"
            classes="mt-8 md:mt-10 mx-auto w-full md:w-4/6 h-11 text-lg font-normal font-body rounded md:rounded-none border-rounded border-none"
          >
            VERIFY & TRACK YOUR DIAMOND
          </Button>
          <div className="w-full mt-6 md:mt-8 flex flex-col gap-2 md:gap-7">
            {labels.map((item) => (
              <div
                key={item}
                className="w-full bg-gray-100 px-4 py-1 md:py-2 text-sm md:text-lg leading-5 md:leading-7 text-left rounded md:rounded-none"
              >
                <ArrowRightIcon className="inline-block md:hidden mr-4" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreenVerifyTrack;
