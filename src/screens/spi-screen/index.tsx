import dayjs from "dayjs";
import Image from "next/image";
import { Ref, forwardRef, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";

import getSolitairePriceIndex from "@/api/spi";
import {
  //ArrowUpIcon,
  Button,
  CalendarIcon,
  GrowthUpIcon,
  ChartLineUpIcon,
  GrowthDownIcon,
  //   FileTextIcon,
  //   ShareFatIcon,
} from "@/components";
//import { ComparePrices } from "@/components/divine-components";
//import { SolitairePriceIndex } from "@/interface";
//import useCountryCode from "@/hooks/use-country-code";
import { useCurrency } from "@/context/currency-context";
import { formatByCurrency } from "@/util";
import { reverseCountryCurrencyMap } from "@/util/reverse-country-currency-map";

interface SPIPrice {
  Month: string;
  Current_Month_SPI: string;
  Past_Month_SPI: string;
  Growth_Month_Percentage: string;
  Growth_Year_Percentage: string;
  date: string;
  currency_code: string;
  currency_locale: string;
}

//eslint-disable-next-line react/display-name
const CustomDatePicker = forwardRef(
  (
    { value, onClick }: { value: string; onClick: (value: string) => void },
    ref: Ref<HTMLButtonElement>
  ) => (
    <Button
      themeType="light"
      classes="mt-3 font-normal rounded-none tracking-widest text-sm leading-6 flex items-center justify-center"
      onClick={() => onClick(value)}
      refP={ref}
    >
      Select Month <CalendarIcon className="inline-block ml-3" />
    </Button>
  )
);

const SolitairePriceIndexScreen: React.FC = () => {
  //const [spi, setSpi] = useState<Array<SolitairePriceIndex>>([]);

  const [comparedPrices, setComparedPrices] = useState<Array<SPIPrice>>([]);

  const [isShowMore, setIsShowMore] = useState(false);
  const [isShowMore1, setIsShowMore1] = useState(false);

  //const countrycode = useCountryCode();
  const { currency } = useCurrency(); //for currency
  const countrycode = reverseCountryCurrencyMap[currency];

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const toggleReadMoreLess1 = () => {
    setIsShowMore1(!isShowMore1);
  };

  const getComparision = async (month: Date) => {
    const currentMonthNumber = String(month.getMonth() + 1).padStart(2, "0");
    const currentYear = month.getFullYear();
    try {
      const result = await getSolitairePriceIndex(
        currentMonthNumber,
        currentYear,
        countrycode as string
      );
      const addedComparion = {
        Month: month.toDateString(),
        Current_Month_SPI: `${result.data.data.Current_Month_SPI.toString()}`,
        Past_Month_SPI: `${result.data.data.Past_Month_SPI.toString()}`,
        Growth_Month_Percentage: `${result.data.data.Growth_Month_Percentage.toString()}`,
        Growth_Year_Percentage: `${result.data.data.Growth_Year_Percentage.toString()}`,
        date: month.toISOString(),
        currency_code: `${result.data.data.currency_code}`,
        currency_locale: `${result.data.data.currency_locale}`,
      };
      setComparedPrices([...comparedPrices, addedComparion]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // const getlistdata = async (currentDate: Date) => {
    //   //SetselectedDate(currentDate);
    //   const currentMonthNumber = String(currentDate.getMonth() + 1).padStart(
    //     2,
    //     "0"
    //   );
    //   const currentYear = currentDate.getFullYear();
    //   //console.log(currentMonthNumber, currentYear);
    //   try {
    //     const result = await getSolitairePriceIndex(
    //       currentMonthNumber,
    //       currentYear
    //     );
    //     setSpi([result.data.data]);
    //     //console.log(result.data.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  }, []);

  const removePrice = (idx: number) => {
    setComparedPrices((prices) =>
      prices.filter((price, priceIdx) => idx !== priceIdx)
    );
  };

  const removePriceFromList = (idx: number) => () => removePrice(idx);

  return (
    <div className="gap-24">
      <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto">
        <div className="flex flex-col items-center md:px-0 [&>div]:px-4 px-[70px]">
          <div className="mb-4 text-gray-900 text-2xl md:text-5xl font-bold md:leading-[3.5rem] tracking-wider uppercase text-center md:text-left">
            Solitaire Price Index
          </div>
          <div className="mb-12 text-gray-700 text-sm md:text-xl font-normal leading-6 md:leading-7 tracking-wide text-center">
            India&apos;s first and only Diamond Index by Divine Solitaires.
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center self-stretch">
          {/* First column */}
          <div className="flex flex-col gap-2 md:w-1/2">
            <Image
              src="/api/get-spi-image"
              alt="spiimage"
              height={0}
              width={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          {/* Second column */}
          <div className="flex flex-col justify-between items-center md:pt-[88px] pt-0 self-stretch md:w-1/2 px-2">
            <div className="flex flex-col items-start gap-6">
              <span className="text-gray-700 font-montserrat text-base font-normal leading-6 tracking-wide">
                This is an average of Divine Solitaire Price List.
              </span>
              <span className="text-gray-700 font-montserrat text-base font-normal leading-6 tracking-wide">
                Only Divine Solitaire provides with price
              </span>
              <span className="text-gray-700 font-montserrat text-base font-normal leading-6 tracking-wide">
                Price list is released 1st of every month
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  align-top content-start mt-[50px]">
          {/* First column */}
          <div className="flex flex-col items-start gap-2 p-4 rounded-lg md:w-1/2 px-8 align-top ">
            <div className="w-full inline-block ">
              <ReactDatePicker
                customInput={
                  <CustomDatePicker value="" onClick={console.log} />
                }
                onChange={getComparision}
                wrapperClassName="w-full"
                dateFormat="MM/YYYY"
                className="w-full"
              />
            </div>

            <div className="w-full">
              {comparedPrices.map((item, idx) => (
                <div
                  className="w-full relative flex items-center bg-[#fffaf3] mt-2"
                  key={idx}
                >
                  <span
                    className="w-4 h-4 text-gray-500 absolute right-0 top-0"
                    onClick={removePriceFromList(idx)}
                  >
                    x
                  </span>
                  <div className="">
                    <ChartLineUpIcon />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-black text-base font-normal font-montserrat leading-normal">
                      Date:{" "}
                      {dayjs(
                        new Date(
                          new Date(item.date).getFullYear(),
                          new Date(item.date).getMonth(),
                          1
                        )
                      ).format("DD MMM, YYYY")}
                    </div>
                    <div className="flex justify-center items-center gap-3">
                      <div className="text-gray-900 text-base font-normal font-montserrat leading-normal">
                        Price:{" "}
                        {`${formatByCurrency(
                          parseFloat(item.Current_Month_SPI),
                          item.currency_locale,
                          item.currency_code
                        )}`}
                      </div>
                      <div className="text-base font-normal font-montserrat leading-normal">
                        Growth: {/* {item.Growth_Month_Percentage}% */}
                        <span
                          className={`text-base font-normal font-montserrat leading-normal 
                  ${
                    parseFloat(item.Growth_Month_Percentage) < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                        >
                          {item.Growth_Month_Percentage}%
                        </span>
                        {parseFloat(item.Growth_Year_Percentage) > 0 ? (
                          <span>
                            <GrowthUpIcon className="inline-block" />
                          </span>
                        ) : (
                          <span>
                            <GrowthDownIcon className="inline-block" />
                          </span>
                        )}
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Second column */}
          <div className="flex flex-col justify-between items-center self-stretch md:w-1/2 px-2 align-top content-start">
            {/* <Image
              src="/Rectangle 102.png"
              alt="Arrow"
              height={416}
              width={751}
              className="m-auto h-[416] w-[751px] md:h-[208px] md:w-[360px]"
            /> */}
          </div>
        </div>
      </div>
      {/* <ComparePrices
        className="hidden md:block"
        comparisions={comparedPrices}
        onDateChange={getComparision}
        removePrice={removePrice}
      /> */}
      {/* <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto py-10 md:py-16 lg:py-24 border border-x-0 border-t-0 border-[#BCBCBC]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 lg:gap-24">
          <div className="flex-shrink-0 w-full md:w-[338px] md:h-[312px]">
            <Image
              src="/image 32.png"
              alt="Arrow"
              height={312}
              width={338}
              className="m-auto h-[312] w-[338px] "
            />
          </div>

          <div className="w-full flex flex-col items-start gap-6 w-full md:w-[640px] md:h-[154px] justify-center px-2">
            <span className="text-black font-montserrat text-2xl md:text-4xl font-normal leading-8 md:leading-[56px] tracking-wider">
              What is Solitaire Price Index?
            </span>
            <span className="text-black text-sm md:text-base font-montserrat font-normal leading-[22.4px]">
              Nationwide Standard & Transparent Pricing since 2006. Published on
              the 1st of every month. Historically, India has always been at the
              forefront of the diamond business. Until the discovery of diamonds
              in Brazil in 1726, India was the only place where diamonds were
              mined. However, in the recent times, consumers began doubting the
              quality and price of Indian diamonds. As the diamond price was
            </span>
            {isShowMore && (
              <span className="text-black text-16 font-montserrat font-normal leading-[22.4px]">
                difficult to ascertain without laboratory equipment or a
                specific diamond price index, it was difficult to know the
                correct solitaire price of loose diamonds in India. The most
                consumers could do was to rely on the word of the attendant at
                the jeweller’s store where they made their purchase. Often
                people were misled and ended up with low quality diamonds at
                prices higher than the actual value. The need for a standard and
                transparent price was dire. Thus, to address this issue head-on,
                Divine Solitaires, on the 1st of April 2006, introduced the
                Solitaire Price Index (SPI).
              </span>
            )}
            <span
              className="text-black font-montserrat text-base font-bold leading-normal"
              onClick={toggleReadMoreLess}
            >
              {isShowMore ? "Read Less" : "Read More"}
            </span>
          </div>
        </div>
      </div> */}

      <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto my-24 border border-x-0 border-y-0 border-[#BCBCBC]">
        <div className="flex flex-col justify-between items-center">
          <div className="flex flex-col items-start gap-12">
            <div className="flex flex-col items-end gap-8 px-2">
              <span className="w-full justify-between items-center text-black font-montserrat text-2xl md:text-4xl font-normal leading-8 md:leading-[56px] tracking-wider">
                What is Solitaire Price Index?
              </span>
              <div>
                <p className="text-black text-justify text-sm md:text-base font-montserrat font-normal leading-[22.4px]">
                  Nationwide Standard & Transparent Pricing since 2006.
                  Published on the 1st of every month. Historically, India has
                  always been at the forefront of the diamond business. Until
                  the discovery of diamonds in Brazil in 1726, India was the
                  only place where diamonds were mined. However, in the recent
                  times, consumers began doubting the quality and price of
                  Indian diamonds. As the diamond price was
                </p>
                {isShowMore && (
                  <p className="text-black text-justify text-16 font-montserrat font-normal leading-[22.4px]">
                    difficult to ascertain without laboratory equipment or a
                    specific diamond price index, it was difficult to know the
                    correct solitaire price of loose diamonds in India. The most
                    consumers could do was to rely on the word of the attendant
                    at the jeweller’s store where they made their purchase.
                    Often people were misled and ended up with low quality
                    diamonds at prices higher than the actual value. The need
                    for a standard and transparent price was dire. Thus, to
                    address this issue head-on, Divine Solitaires, on the 1st of
                    April 2006, introduced the Solitaire Price Index (SPI).
                  </p>
                )}
                <p
                  className="text-black font-montserrat text-base font-bold leading-normal float-left"
                  onClick={toggleReadMoreLess}
                >
                  {isShowMore ? "Read Less" : "Read More"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto my-24 border border-x-0 border-y-0 border-[#BCBCBC]">
        <div className="flex flex-col justify-between items-center">
          <div className="flex flex-col items-start gap-12">
            <div className="flex flex-col gap-8 px-2">
              <span className="float-left text-black font-montserrat text-[40px] font-normal leading-[56px] tracking-widest">
                Return in Sensex, Gold & Diamonds since 2010
              </span>
              <div>
                <p className="text-black text-justify text-sm md:text-base font-montserrat font-normal leading-[22.4px]">
                  Just as the stock market indexes the share prices of different
                  companies, the Solitaire Price Index (SPI) denotes the price
                  of diamonds. Focused on bringing standard and transparent
                  pricing to the procurement of loose diamonds, SPI is purely
                  based on the Divine Solitaires’ “Nationwide Standard and
                  Transparent Price List ”. Since we at Divine Solitaires are
                  aware that buying a diamond is a huge moment from, both, an
                  emotional and an investment
                </p>
                {isShowMore1 && (
                  <p className="text-black text-justify text-16 font-montserrat font-normal leading-[22.4px]">
                    standpoint, we publish the Divine Solitaire Price Index on
                    the 1st of every month. This diamond price index gives clear
                    indications on how the value of diamonds have risen over the
                    month, year and quarter, and can be used by anyone to
                    effectively track trends in diamond pricing. Divine
                    Solitaires sends its price list to around 70 of the very top
                    jewellers in the country. The diamond price list serves to
                    help customers across the world to know the right solitaire
                    prices and also to know the prevailing rates for upgrading
                    or selling any diamond they own. The Solitaire Price Index
                    (SPI) is computed from the prices of shape (Round Brilliant
                    Cut Diamond), size (0.10 cents to 2.99 cents and above),
                    colour (D to K) and clarity (IF to SI2). In all, the SPI
                    carries a comprehensive listing that helps all consumers to
                    know for themselves the right price of the diamond they wish
                    to buy or sell, whatever be its size, shape, cut or colour.
                  </p>
                )}
                <p
                  className="text-black font-montserrat text-base font-bold leading-normal float-left"
                  onClick={toggleReadMoreLess1}
                >
                  {isShowMore1 ? "Read Less" : "Read More"}
                </p>
              </div>
            </div>
            {/* <div className="flex-shrink-0 w-full md:w-[1078px] md:h-[520px]">
              <Image
                src="/Rectangle 128.png"
                alt="Arrow"
                height={520}
                width={1078}
                className="m-auto h-[520] w-[1078px] "
              />
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto py-24 border border-x-0 border-t-0 border-[#BCBCBC]">
        <HomeScreenOurFeatures />
      </div> */}
    </div>
  );
};

export default SolitairePriceIndexScreen;
