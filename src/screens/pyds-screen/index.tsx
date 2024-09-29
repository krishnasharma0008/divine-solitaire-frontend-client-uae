import dayjs from "dayjs";
import { useMemo } from "react";

import { ArrowRightIcon } from "@/components";
import {
  CaratCalculator,
  ClaritySelector,
  ColorSelector,
  Separator,
  ShapeSelector,
} from "@/components/divine-components";
import ValidationModal from "@/components/modals/validation-modal";
import { useSolitairePrice } from "@/hooks";
import { formatByCurrency } from "@/util";

const PydsScreen: React.FC = () => {
  const {
    setShowValidationMessage,
    showValidationMessage,
    changeHandler,
    caratChangeHandler,
    isRound,
    state,
    premiumper,
    premiumsizerange,
    premiumfcts,
    premiumtcts,
    stonePrice,
    colorOptions,
    clarityOptions,
    countrylocale,
    countryode,
    shapeType,
  } = useSolitairePrice();

  const stoneRetailPrice = stonePrice * state.cts;
  const downPayment = stoneRetailPrice * 0.2;

  const installment = (stoneRetailPrice - downPayment) / 10;

  // const downPayment = stonePrice * 0.2;

  // const installment = (stonePrice - downPayment) / 10;

  const installments = useMemo(() => {
    const res = [];
    const date = new Date();
    for (let i = 0; i < 10; i++) {
      date.setMonth(date.getMonth() + 1);
      res.push(dayjs(date).format("DD MMM, YYYY"));
    }
    return res;
  }, []);

  return (
    <div className="flex flex-col items-center mt-6 md:px-0">
      <ValidationModal
        setShow={() => setShowValidationMessage("")}
        show={!!showValidationMessage.length}
        message={showValidationMessage}
      />
      <div className="px-2">
        <div className="mb-6 md:mb-9 text-gray-900 text-2xl md:text-5xl font-bold md:leading-[3.5rem] tracking-wider uppercase md:text-center">
          What is PYDS?
        </div>
        <div className="mb-12 text-gray-700 text-sm md:text-xl font-normal leading-6 md:leading-7 tracking-wide md:text-center">
          PYDS ia an offer provided by Divine Solitaires where youas a customer
          will pay 10 installments.
        </div>
      </div>
      <div className="xl:max-w-5xl 2xl:max-w-6xl m-auto w-full">
        <div className="hidden md:flex justify-between">
          <div className="flex flex-col">
            <ShapeSelector
              onSelect={changeHandler("shape")}
              defaultValue={0}
              options={[{ img: "/image7.png", text: "ROUND", value: "RND" }]}
              stype={shapeType}
            />
            <CaratCalculator
              onChange={caratChangeHandler}
              defaultValue={0.18}
              isRound
              premiumper={premiumper}
              premiumsizerange={premiumsizerange}
              premium_f_cts={premiumfcts}
              premium_t_cts={premiumtcts}
            />
          </div>
          <div className="flex flex-col gap-20">
            <ColorSelector
              onSelect={changeHandler("colour")}
              defaultValue={0}
              options={colorOptions}
              selected={state.colour}
            />
            <ClaritySelector
              onSelect={changeHandler("clarity")}
              defaultValue={0}
              options={clarityOptions}
              selected={state.clarity}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="px-2 flex md:hidden  flex-col w-full">
            <ShapeSelector
              onSelect={changeHandler("shape")}
              className="[&>span]:text-black [&>div>div>span]:text-black [&>div>div]:border-black [&>div]:flex [&>div]:justify-left [&>div]:mt-2 w-full my-2"
              defaultValue={0}
              options={[{ img: "/image7.png", text: "ROUND", value: "RND" }]}
              stype={shapeType}
            />
            <CaratCalculator
              className="mt-3 [&>div>span]:text-black [&>.slider]:hidden [&>span]:hidden"
              onChange={caratChangeHandler}
              defaultValue={isRound ? 0.18 : 0.3}
              isRound={isRound}
              premiumper={0}
              premiumsizerange={""}
              premium_f_cts={0}
              premium_t_cts={0}
            />
            <ColorSelector
              className="[&>span]:text-black"
              onSelect={changeHandler("colour")}
              defaultValue={0}
              options={colorOptions}
              selected={state.colour}
            />
            <ClaritySelector
              className="[&>span]:text-black"
              onSelect={changeHandler("clarity")}
              defaultValue={0}
              options={clarityOptions}
              selected={state.clarity}
            />
          </div>

          <div className=" p-2 flex flex-row justify-between my-2 mx-3 rounded-lg p-4">
            <div className="flex flex-col items-center">
              <span className="text-base">
                Retail Price of Solitaire{" ( "} As of{" "}
                {dayjs(new Date()).format("DD MMM, YYYY")}
                {" ) "}
              </span>
            </div>
            <div className="bg-[#FFF9F2] w-min leading-10 text-4xl p-3 border border-[#BEBEBE]">
              {/* {formatByCurrency(
                stonePrice * state.cts,
                countrylocale,
                countryode
              )} */}
              {countrylocale &&
                countryode &&
                countryode !== "" &&
                `${formatByCurrency(
                  stonePrice * state.cts,
                  countrylocale,
                  countryode
                )}`}
            </div>
          </div>
          <div className="bg-black text-white p-2 flex flex-col justify-center my-2 mx-3 rounded-lg p-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-semibold">
                {/* {formatByCurrency(
                  (stonePrice * state.cts - stonePrice * state.cts * 0.2) / 10,
                  countrylocale,
                  countryode
                )} */}
                {countrylocale &&
                  countryode &&
                  countryode !== "" &&
                  `${formatByCurrency(
                    (stonePrice * state.cts - stonePrice * state.cts * 0.2) /
                      10,
                    countrylocale,
                    countryode
                  )}`}
              </span>
              <span className="text-base">Installment</span>
            </div>
            <div className="flex justify-between text-sm mt-4">
              <span>
                <sup>*</sup>Down Payment (min 20%):
              </span>
              <span>
                {/* {formatByCurrency(
                  stonePrice * state.cts * 0.2,
                  countrylocale,
                  countryode
                )} */}
                {countrylocale &&
                  countryode &&
                  countryode !== "" &&
                  `${formatByCurrency(
                    stonePrice * state.cts * 0.2,
                    countrylocale,
                    countryode
                  )}`}
              </span>
            </div>
          </div>
          <div className="px-2 mb-2">
            <h3 className="text-lg font-semibold mt-3 mb-2">
              Installment Calender
            </h3>
            {installments.length > 0 && (
              <table className="w-full [&>tr:nth-child(2n-1)]:bg-gray_normal [&>tr>td]:py-3 [&>tr>th]:py-3">
                <tr className="bg-gray_light">
                  <th>Sr. No.</th>
                  <th>Date</th>
                  <th>Installment</th>
                </tr>
                {installments.map((date, idx) => (
                  <tr key={idx}>
                    <td className="text-center">{idx + 1}</td>
                    <td className="text-center">{date}</td>
                    <td className="text-center">
                      {/* {formatByCurrency(installment, countrylocale, countryode)} */}
                      {countrylocale &&
                        countryode &&
                        countryode !== "" &&
                        `${formatByCurrency(
                          installment,
                          countrylocale,
                          countryode
                        )}`}
                    </td>
                  </tr>
                ))}
              </table>
            )}
            <div className="mt-4">
              Visit Nearest Stores or Contact to protect price of your
              solitaires.
              <a
                className="font-bold ml-3"
                href="tel:+91 9769888666"
                target="_blank"
              >
                +91 9769888666
              </a>
            </div>
          </div>
          <Separator />
          <div className="px-2">
            <h1 className="uppercase font-bold text-lg">
              Price protection guarantee
            </h1>
            <span className="mt-2 inline-block">
              Divine Solitaire guarantees to protect price of your solitaires.
            </span>
          </div>
          <Separator />
          <div className="mx-2 border border-black p-3 flex justify-between items-center">
            <div className="flex flex-col w-1/3 items-center">
              <span>Price at the end of installments</span>
              <span>
                {/* {formatByCurrency(120000, countrylocale, countryode)} */}
                {countrylocale &&
                  countryode &&
                  countryode !== "" &&
                  `${formatByCurrency(120000, countrylocale, countryode)}`}
              </span>
            </div>
            <div>
              <ArrowRightIcon />
            </div>
            <div className="flex flex-col w-1/3">
              <span>You pay</span>
              {/* <span>{formatByCurrency(100000, countrylocale, countryode)}</span> */}
              <span>
                {countrylocale &&
                  countryode &&
                  countryode !== "" &&
                  `${formatByCurrency(100000, countrylocale, countryode)}`}
              </span>
            </div>
          </div>
          <div className="mx-2 border border-black p-3 flex justify-between items-center my-2">
            <div className="flex flex-col w-1/3 items-center">
              <span>Price at the end of installments</span>
              {/* <span>{formatByCurrency(90000, countrylocale, countryode)}</span> */}
              <span>
                {countrylocale &&
                  countryode &&
                  countryode !== "" &&
                  `${formatByCurrency(90000, countrylocale, countryode)}`}
              </span>
            </div>
            <div>
              <ArrowRightIcon />
            </div>
            <div className="flex flex-col w-1/3">
              <span>You pay</span>
              <span className="text-gold">
                {/* {formatByCurrency(90000, countrylocale, countryode)} */}
                {countrylocale &&
                  countryode &&
                  countryode !== "" &&
                  `${formatByCurrency(90000, countrylocale, countryode)}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PydsScreen;
