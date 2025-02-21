import dayjs from "dayjs";
import { Ref, forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { formatByCurrency } from "@/util";

import { Button } from "../common";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowDownIcon,
  ArrowUpIcon,
  CalendarIcon,
  ChartLineUpIcon,
  XIcon,
} from "../icons";

interface ComparePricesProps {
  className?: string;
  comparisions: Array<{
    month: string;
    price: string;
    growth: string;
    date: string;
  }>;
  onDateChange: (date: Date) => void;
  removePrice: (idx: number) => void;
  cts: number;
  clocale: string;
  ccode: string;
}

// eslint-disable-next-line react/display-name
const CustomDatePicker = forwardRef(
  (
    { value, onClick }: { value: string; onClick: (value: string) => void },
    ref: Ref<HTMLButtonElement>
  ) => (
    <Button
      themeType="light"
      classes="lg:px-24 xl:px-32 text-base font-normal flex gap-4"
      onClick={() => onClick(value)}
      refP={ref}
    >
      <span>Select Date</span>
      <span>
        <CalendarIcon />
      </span>
    </Button>
  )
);

const ComparePrices: React.FC<ComparePricesProps> = ({
  className,
  comparisions,
  onDateChange,
  removePrice,
  cts,
  clocale,
  ccode,
}) => {
  const removePriceWrapper = (idx: number) => () => removePrice(idx);
  return (
    <div className={className}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6 self-stretch">
            <span className="text-black text-base font-montserrat font-medium">
              Compare Past Prices :
            </span>
          </div>

          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={comparisions.length < 4 ? comparisions.length : 4}
            className="max-w-full"
            navigation={{
              enabled: true,
              prevEl: ".swiper-prev-slide-compare-price",
              nextEl: ".swiper-next-slide-compare-price",
            }}
          >
            {comparisions.map((priceItem, idx) => (
              <SwiperSlide key={idx} className="!max-w-xl p-2">
                <div
                  className="relative flex bg-[#fffaf3] justify-center items-center px-14 py-5 mx-2"
                  key={priceItem.month}
                >
                  <XIcon
                    className="w-4 h-4 text-gray-500 absolute -right-2 -top-2"
                    onClick={removePriceWrapper(idx)}
                  />
                  <div className="gap-2.5">
                    <ChartLineUpIcon />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-black text-base font-normal font-montserrat leading-normal">
                      Date :{" "}
                      {dayjs(new Date(priceItem.date)).format("MMM, YYYY")}
                    </div>
                    <div className="text-gray-900 text-base font-normal font-montserrat leading-normal">
                      Price:{" "}
                      {`${formatByCurrency(
                        parseInt(priceItem.price) * cts,
                        clocale,
                        ccode
                      )}`}
                    </div>
                    <div className="flex justify-center items-center gap-1">
                      <div className="text-base font-normal font-montserrat leading-normal">
                        {/* {priceItem.growth}% */}Growth:&nbsp;
                        <span
                          className={`text-base font-normal font-montserrat leading-normal 
                  ${
                    parseFloat(priceItem.growth) < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                        >
                          {priceItem.growth}%
                        </span>
                      </div>
                      <div>
                        {/* <ArrowUpIcon /> */}
                        {parseFloat(priceItem.growth) < 0 ? (
                          <ArrowDownIcon />
                        ) : (
                          <ArrowUpIcon />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex justify-end mt-[43px]">
        <div className="flex items-end gap-x-[333px]">
          <div className="flex justify-end">
            <ReactDatePicker
              customInput={<CustomDatePicker value="" onClick={console.log} />}
              onChange={onDateChange}
              //showMonthYearPicker
              dateFormat="DD/MM/YYYY"
            />
          </div>
          <div
            className={`flex items-center gap-6 ${
              !comparisions.length ? "invisible" : ""
            }`}
          >
            <ArrowCircleLeft className="swiper-prev-slide-compare-price" />
            <ArrowCircleRight className="swiper-next-slide-compare-price" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComparePrices;
