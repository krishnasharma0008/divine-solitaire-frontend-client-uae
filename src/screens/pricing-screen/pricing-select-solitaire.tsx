import dayjs from "dayjs";
import { Ref, forwardRef, useContext, useEffect } from "react";
import React from "react";
import ReactDatePicker from "react-datepicker";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  Button,
  CalendarIcon,
  ChartLineUpIcon,
  FileTextIcon,
  //InputText,
} from "@/components";
//import pricingDialog from "@/components/common/pricing-dialog";
import {
  CaratCalculator,
  ClaritySelector,
  ColorSelector,
  ComparePrices,
  DiamondFeatures,
  PriceDisplay,
  Separator,
  ShapeSelector,
  //FancyColorOption,
} from "@/components/divine-components";
import LoginModal from "@/components/modals/login-modal";
import ValidationModal from "@/components/modals/validation-modal";
import KnowYourDiamondContext from "@/context/know-your-diamond-context";
import { useSolitairePrice } from "@/hooks";
import { formatByCurrency } from "@/util";

// eslint-disable-next-line react/display-name
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

const SelectYourSolitaire: React.FC = () => {
  const { selectedKyd, setSelectedKyd } = useContext(KnowYourDiamondContext);
  //const [stype, setStype] = useState("regular"); //for shape

  //const [minDate, setMinDate] = useState(dayjs().toDate());

  const {
    showLogin,
    setShowLogin,
    changeHandler,
    setShowValidationMessage,
    showValidationMessage,
    caratChangeHandler,
    isRound,
    state,
    stonePrice,
    premiumper,
    premiumsizerange,
    premiumfcts,
    premiumtcts,
    countrylocale,
    countryode,
    comparedPrices,
    getComparision,
    removePrice,
    onClickSaveSolitaire,
    removePriceFromList,
    clarityOptions,
    colorOptions,
    shapeType,
    //handleReset,
  } = useSolitairePrice();

  useEffect(() => {
    // console.log("check clarity state :", state.clarity);
    // console.log("check colour state :", state.colour);
    if (selectedKyd) {
      //console.log("check :", selectedKyd.colour);
      changeHandler("clarity")(selectedKyd.purity);
      changeHandler("colour")(selectedKyd.colour);
      changeHandler("shape")(selectedKyd.shape);
      caratChangeHandler(selectedKyd.carat);
      setSelectedKyd(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKyd, state]);

  return (
    <>
      <LoginModal setShowLogin={setShowLogin} showLogin={showLogin} />
      <ValidationModal
        setShow={() => setShowValidationMessage("")}
        show={!!showValidationMessage.length}
        message={showValidationMessage}
      />
      <div className="w-full hidden md:flex justify-between">
        <div className="flex flex-col w-1/2">
          {/* <Button themeType="light" onClick={handleReset}>
            Clear Selection
          </Button> */}
          <ShapeSelector
            onSelect={changeHandler("shape")}
            defaultValue={0}
            stype={shapeType}
            //className="[&>span]:text-black [&>div>div>span]:text-black [&>div>div]:border-black [&>div]:flex [&>div]:justify-around [&>div]:mt-2 w-full"
            className="[&>span]:text-black [&>div>div>span]:text-black [&>div>div]:border-black [&>div]:flex [&>div]:mt-2 w-full"
          />
          {/* <FancyColorOption
            onSelect={changeHandler("colour")}
            defaultValue={0}
            options={colorOptions}
            selected={state.colour}
            name="Fancy Color"
          /> */}
          {/* <CaratCalculator
            onChange={caratChangeHandler}
            //defaultValue={isRound ? 0.18 : 0.18}
            defaultValue={state.cts}
            isRound={isRound}
            //onClick={handleOpen}
            premiumper={premiumper}
            premiumsizerange={premiumsizerange}
            premium_f_cts={premiumfcts}
            premium_t_cts={premiumtcts}
          /> */}
          <CaratCalculator
            className="mt-3 [&>div>span]:text-black [&>.slider]:hidden [&>.span]:hidden"
            //className="mt-3 [&>div>span]:text-black "
            onChange={caratChangeHandler}
            //defaultValue={isRound ? 0.18 : 0.18}
            defaultValue={state.cts}
            isRound={isRound}
            premiumper={premiumper}
            premiumsizerange={premiumsizerange}
            premium_f_cts={premiumfcts}
            premium_t_cts={premiumtcts}
          />
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
          <div className="flex justify-start my-8">
            <Button
              themeType="dark"
              classes="flex items-center justify-between font-normal text-sm !px-4 w-max gap-4 shadow-none"
              onClick={onClickSaveSolitaire}
            >
              Save This Solitaire <FileTextIcon />
            </Button>
          </div>
        </div>
        <div className="m-0 w-1/2 md:px-6">
          <DiamondFeatures className="md:!w-full m-auto" />
          <PriceDisplay
            price={stonePrice}
            carats={state.cts}
            clocale={countrylocale}
            ccode={countryode}
          />
          {/* {loading ? <p>Loading...</p> : <p>Country Code: {countryCode}</p>} */}

          {/* <div className="mt-12 mb-16">
            <div className="flex justify-end mt-14">
              <Button
                themeType="dark"
                classes="flex items-center justify-between font-normal text-sm !px-4 w-max gap-4 shadow-none"
                onClick={onBtnClick}
              >
                Save This Solitaire <FileTextIcon />
              </Button>
            </div>
          </div> */}
        </div>
      </div>

      <div className="flex md:hidden flex-col">
        <div className="px-2 flex flex-col w-full">
          <ShapeSelector
            onSelect={changeHandler("shape")}
            className="[&>span]:text-black [&>div>div]:border-black [&>div]:flex [&>div]:justify-between [&>div]:mt-2 w-full"
            defaultValue={0}
            stype={shapeType}
          />

          <CaratCalculator
            //className="mt-3 [&>div>span]:text-black [&>.slider]:hidden [&>.span]:hidden"
            className="mt-3 [&>div>span]:text-black "
            onChange={caratChangeHandler}
            //defaultValue={isRound ? 0.18 : 0.18}
            defaultValue={state.cts}
            isRound={isRound}
            premiumper={premiumper}
            premiumsizerange={premiumsizerange}
            premium_f_cts={premiumfcts}
            premium_t_cts={premiumtcts}
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

        <div className="bg-black text-white p-2 flex flex-row justify-between">
          <div className="flex flex-col items-center">
            <span className="text-base">Retail Price</span>
            <span className="text-sm font-normal">
              {dayjs(new Date()).format("DD MMM, YYYY")}
            </span>
          </div>
          <div className="flex items-center text-xl font-medium">
            {/* {formatByCurrency(stonePrice * state.cts, "en-IN", "INR")} */}
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
        <DiamondFeatures className="md:!w-80 m-auto" />
        <div className="px-2">
          <Button
            themeType="dark"
            classes="mt-3 py-3 font-normal tracking-widest text-sm leading-6 capitalize"
            onClick={onClickSaveSolitaire}
          >
            Save This Solitaire
          </Button>
        </div>
        <Separator />
        <div className="px-2 mb-2">
          <div className="font-semibold text-lg">Compare Past Prices :-</div>
          <div className="text-gray_light">
            Please choose to compare with past price list
          </div>
          <ReactDatePicker
            customInput={<CustomDatePicker value="" onClick={console.log} />}
            onChange={getComparision}
            wrapperClassName="w-full"
            dateFormat="MM/YYYY"
          />
        </div>
        {comparedPrices.map((price, idx) => (
          <div
            className="relative flex items-center bg-[#fffaf3] mt-2"
            key={price.month}
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
                Date: {dayjs(new Date(price.date)).format("DD MMM, YYYY")}
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="text-gray-900 text-base font-normal font-montserrat leading-normal">
                  Price:{" "}
                  {countrylocale &&
                    countryode &&
                    countryode !== "" &&
                    `${formatByCurrency(
                      parseInt(price.price) * state.cts,
                      countrylocale,
                      countryode
                    )}`}
                  ,
                  {/* ,
                  {`${formatByCurrency(
                    parseInt(price.price) * state.cts,
                    "en-IN",
                    "INR"
                  )}`} */}
                </div>
                <div className="text-base font-normal font-montserrat leading-normal">
                  Growth:
                  <span
                    className={`text-base font-normal font-montserrat leading-normal 
                  ${
                    parseFloat(price.growth) < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                  >
                    {price.growth}%
                  </span>
                  {parseFloat(price.growth) < 0 ? (
                    <ArrowDownIcon className="inline-block" />
                  ) : (
                    <ArrowUpIcon className="inline-block" />
                  )}
                </div>
                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ComparePrices
        className="hidden md:block"
        comparisions={comparedPrices}
        onDateChange={getComparision}
        removePrice={removePrice}
        cts={state.cts}
        clocale={countrylocale}
        ccode={countryode}
      />
    </>
  );
};

export default SelectYourSolitaire;
