"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useEffect, useState } from "react"; //useEffect,

import getVerifyTrackByUid from "@/api/verify-track";
//import generateImage from "@/components/common/imagewriter";
import InputText from "@/components/common/input-text";
import { NOTIFICATION_MESSAGES } from "@/config";
import { useCurrency } from "@/context/currency-context";
import LoaderContext from "@/context/loader-context";
import NotificationContext from "@/context/notification-context";
import { VerifyTrackContext } from "@/context/verify-track-context";
//import useCountryCode from "@/hooks/use-country-code";
import { deletePortfoliouid, getPortfoliouid } from "@/local-storage";
//import { countryCurrencyMap } from "@/util/country-currency-map";
//import { reverseCountryCurrencyMap } from "@/util/reverse-country-currency-map";

import "react-toastify/dist/ReactToastify.css";

export default function Track() {
  const [uid, setUid] = useState<string>("");

  const { push } = useRouter();
  const { setProductDetails } = useContext(VerifyTrackContext);
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const { notifyErr } = useContext(NotificationContext);

  //const countrycode = useCountryCode();

  const { currency } = useCurrency(); //for currency
  const countrycode = currency;//reverseCountryCurrencyMap[currency];
  // const fetchImage = async (text: string): Promise<string | null> => {
  //   try {
  //     const imageUrl = await generateImage(text);
  //     //setGeneratedImageUrl(imageUrl);
  //     return imageUrl;
  //   } catch (error) {
  //     console.error("Error fetching image:", error);
  //     return null;
  //   }
  // };

  const changeHandler = (fn: (str: string) => void) => (e: ChangeEvent) =>
    fn((e.target as HTMLInputElement).value);

  const onClickHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    //const imageUrl = "/api/add-text-image?text="+ uid +"&imagePath=/vtdia/carousel_3.png";
    //console.log(imageUrl);
    // SearchData(uid, "no", imageUrl || undefined);
    SearchData(uid, "no");
  };

  const SearchData = async (
    UID: string,
    portfolio?: string
    //,imageUrl?: string
  ) => {
    try {
      showLoader();
      //console.log("currency", currency);
      //console.log("countryCode", reverseCountryCurrencyMap[currency]);
      const res = await getVerifyTrackByUid(UID, countrycode as string);
      //console.log(res.data.data);
      if (res.data.data) {
        // if (res.data.data.product_type === "Diamond") {
        //   //   // if (!imageUrl) {
        //   //   //   imageUrl = (await fetchImage(UID)) || ""; // Provide a default value
        //   //   // }
        //   res.data.data.images = [
        //     "/vtdia/carousel_1.png",
        //     "/vtdia/carousel_2.png",
        //     "/api/add-text-image?text=" +
        //       UID +
        //       "&imagePath=/vtdia/carousel_3.png",
        //     "/vtdia/carousel_4.png",
        //   ];
        // }
        // console.log(res.data.data);
        setProductDetails(res.data.data);
        if (portfolio === "yes") {
          console.log(
            "Check Type",
            res.data.data.product_type === "Diamond" ? "solitaire" : "jewellery"
          );
          push({
            //pathname: `/track/jewellery/${UID.toUpperCase()}`,
            pathname: `/${
              res.data.data.uid_status === "SOLD" ? "track" : "verify"
            }/${
              res.data.data.product_type === "Diamond"
                ? "solitaire"
                : "jewellery"
            }/${UID.toUpperCase()}`,
            query: { portfolio: "yes" },
          });
        } else {
          //push(`/track/jewellery/${UID.toUpperCase()}`);
          push(
            `/${res.data.data.uid_status === "SOLD" ? "track" : "verify"}/${
              res.data.data.product_type === "Diamond"
                ? "solitaire"
                : "jewellery"
            }/${UID.toUpperCase()}`
          );
        }
        deletePortfoliouid();
        hideLoader();
      } else {
        throw new Error("Something Went Wrong");
      }
    } catch (err) {
      notifyErr(NOTIFICATION_MESSAGES.SOMETHING_WRONG);
      hideLoader();
      console.log("Error in fetching data", err);
    }
  };
  // console.log("Portfolio Uid : ", portuid);
  useEffect(() => {
    const storedUid = getPortfoliouid();
    if (storedUid !== null) {
      SearchData(storedUid, "yes");
      deletePortfoliouid();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto px-4 pt-4">
      <h2 className="text-xl font-bold mb-2 md:text-2xl md:text-3xl lg:text-4xl">
        Verify & Track Your Diamond
      </h2>

      <p className="text-gray-600 mb-8 md:text-base md:text-lg lg:text-xl">
        Divine Solitaires’ “Verify & Track” is a never-seen-before digital
        experience which brings a distinctive diamond experience to the
        consumers’ fingertips.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex md:block md:w-full">
          {/* <Image
            src="/Rectangle.png"
            alt="Divine Logo"
            height={476}
            width={250}
          /> */}
          <Image
            src="/Rectangle.png"
            alt="Divine Logo"
            height={476}
            width={250}
            className="hidden md:block" // Hide on mobile, show on desktop
          />
          <Image
            src="/hrd-11.gif" // Mobile image source
            alt="Divine Logo"
            height={244}
            width={422}
            className="block md:hidden" // Show on mobile, hide on desktop
          />
        </div>

        <div className="bg-white mt-6 md:mt-0 md:p-6 w-full">
          <form onSubmit={onClickHandler}>
            <div className="mt-2">
              <InputText
                className="w-full uppercase"
                id="uid"
                label="Please Enter Unique ID"
                onChange={changeHandler(setUid)}
                type="text"
                value={uid}
              />
            </div>

            <div className="mt-6">
              <button
                onClick={onClickHandler}
                id="search"
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold capitalize text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition"
              >
                SUBMIT
              </button>
            </div>
          </form>

          <div className="mt-6 flex items-center justify-center w-full">
            {/* <Image
              src="/hrd-11.gif"
              alt="Divine Logo"
              className="object-cover h-full w-full"
              height={244}
              width={422}
            /> */}
            <Image
              src="/hrd-11.gif" // Mobile image source
              alt="Divine Logo"
              height={244}
              width={422}
              className="object-cover h-full w-full hidden md:block" // Show on mobile, hide on desktop
            />
            <Image
              src="/Rectangle.png" // Default image source
              alt="Divine Logo"
              height={476}
              width={250}
              className="block md:hidden" // Hide on mobile, show on desktop
            />
          </div>
        </div>
      </div>
    </div>
  );
}
