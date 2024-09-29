//import { debounce } from "lodash";
import dayjs from "dayjs";
import { useContext, useEffect, useReducer, useState } from "react";

import { comparePastPrices, getStonePrice } from "@/api/pricing";
import { saveSolitairePrice } from "@/api/pricing";
import { NOTIFICATION_MESSAGES } from "@/config";
//import LoaderContext from "@/context/loader-context";
import { useCurrency } from "@/context/currency-context";//
import NotificationContext from "@/context/notification-context";
import { Clarity, Colour, Shape } from "@/enum";
import { ClarityRound, ClarityRoundcarat } from "@/enum/clarity-enum";
//import { IntenseColour, VividColour } from "@/enum/colour-enum";
import { FancyShape } from "@/enum/shape-enum";
import { ComparePrice } from "@/interface";
import { getToken, setRedirectionRoute } from "@/local-storage";
import { reverseCountryCurrencyMap } from "@/util/reverse-country-currency-map";

//import useCountryCode from "./use-country-code";

//const fshapes = Object.values(FancyShape);

const colors = ["D", "E", "F", "G", "H", "I", "J", "K", "VDF", "INY"]; //"DEFGHIJK".split("");

const otherRoundColors = ["EF", "GH", "IJ", "VDF", "INY"];

const otherRoundColorsCarat = ["EF", "GH", "VDF", "INY"];

// const VividColors = ["VDF"];
// const IntenseColors = ["INY"];

const clarities = Object.values(Clarity);

const claritiesRound = Object.values(ClarityRound);

const claritiesRoundCarat = Object.values(ClarityRoundcarat);

const initialState: ComparePrice = {
  shape: Shape.ROUND,
  cts: 0.18,
  colour: Colour.D,
  clarity: Clarity.IF,
  day: 1,
  month: 1,
  year: 2023,
};

interface ComparePriceAction {
  type: string;
  payload?: string | ComparePrice;
}

interface ComparedPrice {
  month: string;
  price: string;
  growth: string;
  date: string;
}

const comparePriceReducer = (
  state: ComparePrice,
  action: ComparePriceAction
) => {
  switch (action.type) {
    case "ALL":
      return { ...state, ...(action.payload as ComparePrice) };
    case "roundChange":
      return {
        ...state,
        //shape: (action.payload as ComparePrice).shape,
        cts: (action.payload as ComparePrice).cts,
        colour: (action.payload as ComparePrice).colour,
        clarity: (action.payload as ComparePrice).clarity,
      };
    case "shape":
      return { ...state, shape: action.payload as Shape };
    default:
      return { ...state, [action.type]: action.payload };
  }
};

const useSolitairePrice = () => {
  const { notifyErr, notify } = useContext(NotificationContext);
  const [state, dispatch] = useReducer(comparePriceReducer, initialState);
  //const [stoneCarats, setStoneCarats] = useState<number>(0);
  const [stonePrice, setStonePrice] = useState<number>(0); //
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showValidationMessage, setShowValidationMessage] =
    useState<string>("");
  const [premiumper, setPremiumPer] = useState<number>(0); //for premium percentage
  const [premiumsizerange, setPremiumSizeRange] = useState<string>(""); //for premium size range
  const [premiumfcts, setPremiumFcts] = useState<number>(0); //for premium percentage
  const [premiumtcts, setPremiumTcts] = useState<number>(0); //for premium size range

  const [countrylocale, setCountryLocale] = useState<string>("");
  const [countryode, seyCountryode] = useState<string>("");

  const [shapeType, setShapeType] = useState<string>("regular");

  //const { showLoader, hideLoader } = useContext(LoaderContext);

  const isRound = state.shape === Shape.ROUND;

  // const colorOptions = isRound
  //   ? state.cts < 0.18
  //     ? otherRoundColors
  //     : colors
  //   : state.cts >= 0.1 && state.cts <= 0.17
  //   ? otherRoundColorsCarat
  //   : colors.slice(0, 5);

  const colorOptions =
    shapeType === "regular"
      ? isRound
        ? state.cts < 0.18
          ? otherRoundColors
          : colors
        : state.cts >= 0.1 && state.cts <= 0.17
        ? otherRoundColorsCarat
        : colors.filter(
            (color) => color !== "I" && color !== "J" && color !== "K"
          )
      : colors;

  // const clarityOptions = isRound
  //   ? state.cts < 0.18
  //     ? claritiesRound
  //     : clarities
  //   : state.cts >= 0.1 && state.cts <= 0.17
  //   ? claritiesRoundCarat
  //   : clarities.slice(0, 5);

  const clarityOptions =
    shapeType === "regular"
      ? isRound
        ? state.cts < 0.18
          ? claritiesRound
          : clarities
        : state.cts >= 0.1 && state.cts <= 0.17
        ? claritiesRoundCarat
        : clarities.slice(0, 5)
      : claritiesRoundCarat;

  const [comparedPrices, setComparedPrices] = useState<Array<ComparedPrice>>(
    []
  );

  // const getValidFancyShapeValue = (): Shape | FancyShape => {
  //   if (shapeType === "VDF" || shapeType === "INY") {
  //     if (!fshapes.includes(state.shape as unknown as FancyShape)) {
  //       return fshapes[0];
  //     }
  //   }
  //   //console.log("Shape Change function ", state.shape);
  //   return state.shape;

  // }

  const getValidColourValue = (value: number): Colour => {
    //console.log("check");
    if (shapeType === "regular") {
      const otherShapeColors = colors.slice(0, 5);
      if (state.shape === Shape.ROUND) {
        if (value < 0.18) {
          if (!otherRoundColors.includes(state.colour)) {
            return otherRoundColors[0] as Colour;
          } else if (!colors.includes(state.colour)) {
            return colors[0] as Colour;
          }
        }
      } else if (
        state.shape === Shape.PRINCESS ||
        state.shape === Shape.OVAL ||
        state.shape === Shape.PEAR
      ) {
        // Handle specific shapes that are not 'Shape.ROUND'

        if (value >= 0.1 && value <= 0.17) {
          return otherRoundColorsCarat[0] as Colour;
        } else {
          console.log("3");
          return otherShapeColors[0] as Colour;
        }
      }
      // else if (!otherShapeColors.includes(state.colour)) {
      //   return otherShapeColors[0] as Colour;
      // }
    }
    // else if (shapeType === "VDF" || shapeType === "INY") {
    //   return colors[0] as Colour;
    // }
    return state.colour;
  };

  const getValidClarityValue = (
    value: number
  ): Clarity | ClarityRound | ClarityRoundcarat => {
    if (shapeType === "regular") {
      const otherShapeClarity = clarities.slice(0, 5);

      if (state.shape === Shape.ROUND) {
        if (value < 0.18) {
          if (!claritiesRound.includes(state.clarity as ClarityRound)) {
            return claritiesRound[0];
          } else if (!clarities.includes(state.clarity as Clarity)) {
            return clarities[0];
          }
        }
      } else if (value >= 0.1 && value <= 0.17) {
        return claritiesRoundCarat[0];
      } //if (!otherShapeClarity.includes(state.clarity as Clarity)) {
      else {
        return otherShapeClarity[0];
      }
    } else if (shapeType === "VDF" || shapeType === "INY") {
      //return claritiesRoundCarat[0];
      if (!claritiesRoundCarat.includes(state.clarity as ClarityRoundcarat)) {
        return claritiesRoundCarat[0];
      }
    }
    return state.clarity;
  };

  //const countrycode = useCountryCode();
  const { currency } = useCurrency(); //for currency
  const countrycode = reverseCountryCurrencyMap[currency];

  // useEffect(() => {
  //   console.log("State Shape :", state.shape);
  //   console.log("State Color :", state.colour);
  //   console.log("State Clarity :", state.clarity);

  //   if (countrycode) {
  //     const { shape, clarity, colour, cts } = state;

  //     getStonePrice({ shape, clarity, colour, cts }, countrycode as string)
  //       .then((res) => {
  //         //console.log(res.data.data);
  //         setStonePrice(res.data.data);
  //         setCountryLocale(res.data.currency_locale);
  //         seyCountryode(res.data.currency_code);
  //         setPremiumPer(res.data.premium_per);
  //         setPremiumSizeRange(res.data.premium_size_range);
  //         setPremiumFcts(res.data.premium_fr_cts);
  //         setPremiumTcts(res.data.premium_to_cts);
  //       })
  //       .catch(console.log);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [countrycode, JSON.stringify(state)]);

  const fetchData = async () => {
    //showLoader();
    if (countrycode) {
      const { shape, clarity, colour, cts } = state;
      try {
        const response = await getStonePrice(
          { shape, clarity, colour, cts },
          countrycode as string
        );
        const { data } = response;
        //console.log("Price : ", data.data);
        setStonePrice(data.data);
        setCountryLocale(data.currency_locale);
        seyCountryode(data.currency_code);
        setPremiumPer(data.premium_per);
        setPremiumSizeRange(data.premium_size_range);
        setPremiumFcts(data.premium_fr_cts);
        setPremiumTcts(data.premium_to_cts);
      } catch (error) {
        console.error("Error fetching stone price:", error);
      } finally {
        //hideLoader();
      }
    } else {
      //hideLoader();
    }
  };

  useEffect(() => {
    console.log("State changed:", JSON.stringify(state));
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, countrycode]);

  useEffect(() => {
    if (state.shape === Shape.ROUND) {
      dispatch({ type: "cts", payload: 0.18 as unknown as string });
    } else {
      dispatch({
        type: "roundChange",
        payload: {
          colour: getValidColourValue(0.18),
          clarity: getValidClarityValue(0.18),
          cts: 0.18,
        } as ComparePrice,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.shape]);

  const getComparision = async (date: Date) => {
    // state.month = date.getMonth() + 1;
    // state.year = date.getFullYear();
    // Get the current date
    const currentDate = dayjs();

    // Check if selected date is after the current date
    if (dayjs(date).isAfter(currentDate, "month")) {
      notifyErr("Selected date cannot exceed the current month.");
      return;
    }
    const isAlreadyFetched = comparedPrices.some((entry) => {
      const entryDate = new Date(entry.date);

      return (
        entryDate.getMonth() + 1 === date.getMonth() + 1 &&
        entryDate.getFullYear() === date.getFullYear()
      );
    });

    if (isAlreadyFetched) {
      notifyErr(`Date  ${state.month}/${state.year} already Selected.`);
      return;
    }

    try {
      const addedComparison = await fetchComparisonData(date);

      setComparedPrices([...comparedPrices, addedComparison]);
    } catch (error) {
      console.error("Error in getComparison:", error);
    }
  };

  const fetchComparisonData = async (date: Date) => {
    try {
      state.month = date.getMonth() + 1;
      state.year = date.getFullYear();

      const res = await comparePastPrices(state, countrycode as string);

      return {
        month: date.toDateString(),
        price: `${res.data.data.past_price}`,
        growth: `${res.data.data.difference}`,
        date: `${date.toISOString()}`,
      };
      // Return the result if needed
      //return res;
    } catch (error) {
      console.error("Error fetching comparison data:", error);
      throw error; // Re-throw the error to be caught by the calling function
    }
  };

  const changeHandler = (type: string) => (value: number | string) => {
    //console.log("Type : ", type, "Value :", value);

    if (type === "colour") {
      const stype = value === "VDF" || value === "INY" ? value : "regular";
      setShapeType(stype);

      if (value !== "EF" && value !== "GH" && value !== "IJ") {
        dispatch({
          type: "ALL",
          payload: {
            shape: stype === "regular" ? Shape.ROUND : FancyShape.RADIANT,
            colour: value,
            //clarity: getValidClarityValue(state.cts),
            clarity:
              stype === "regular"
                ? state.shape === Shape.ROUND
                  ? getValidClarityValue(state.cts)
                  : "IF"
                : "VVS",
            cts: 0.18,
          } as unknown as ComparePrice,
        });
      }
    }
    dispatch({ type, payload: `${value}` });

    changePastPriceHandler();
  };

  useEffect(() => {
    //console.log("shapeType has changed:", shapeType);
  }, [shapeType]);

  // useEffect(() => {
  //   fancyShapeChangeHandler();
  // }, [shapeType]);

  const changePastPriceHandler = async () => {
    if (comparedPrices.length > 0) {
      const monthYearArray = [...comparedPrices];

      const collect_data: ComparedPrice[] = [];

      await Promise.all(
        monthYearArray.map(async (entry) => {
          const date = new Date(entry.date);
          const addedComparison = await fetchComparisonData(date);
          collect_data.push(addedComparison);
        })
      );

      setComparedPrices(collect_data);
    }
  };

  const calculateValueAndChangeHandler = (value: number): number => {
    if (shapeType === "regular") {
      if (isRound && (value < 0.1 || value > 2.99)) {
        setShowValidationMessage(
          "The size should be between 0.10 and 2.99 carat"
        );
        return value < 0.1 ? 0.1 : value < 0.18 ? 0.18 : 2.99;
      } else if (!isRound && (value < 0.1 || value > 1.23)) {
        setShowValidationMessage(
          "The size should be between 0.10 and 1.23 carat"
        );
        return value < 0.1 ? 0.1 : 1.23;
      }
    } else if (
      shapeType === "VDF" ||
      (shapeType === "INY" && (value < 0.18 || value > 1.5))
    ) {
      setShowValidationMessage("The size should be between 0.18 and 1.5 carat");
      return value < 0.18 ? 0.18 : 1.5;
    }
    return value;
  };

  const caratChangeHandler = (value: number): number => {
    //console.log("value", value);
    const newVal = calculateValueAndChangeHandler(value);
    dispatch({
      type: "roundChange",
      payload: {
        colour: getValidColourValue(newVal),
        clarity: getValidClarityValue(newVal),
        cts: newVal,
      } as unknown as ComparePrice,
    });

    return newVal;
  };

  // const resetState = () => {
  //   dispatch({ type: "ALL", payload: initialState });
  // };

  // const fancyShapeChangeHandler = () => {
  //   if (shapeType === "VDF" || shapeType === "INY") {
  //     changeHandler("clarity")(getValidClarityValue(state.cts));
  //     dispatch({ type: "shape", payload: FancyShape.RADIANT });
  //   } else {
  //     changeHandler("clarity")(getValidClarityValue(state.cts));
  //     dispatch({ type: "shape", payload: Shape.ROUND });
  //     //resetState();
  //   }
  // };

  const onClickSaveSolitaire = async () => {
    try {
      if (!getToken()) {
        setRedirectionRoute("/pricing");
        setShowLogin(true);
        return;
      }

      await saveSolitairePrice(
        {
          carat: state.cts,
          colour: state.colour,
          chkdate: new Date().toISOString(),
          price: stonePrice,
          purity: state.clarity,
          shape: state.shape,
        },
        countrycode as string
      );
      notify(NOTIFICATION_MESSAGES.SOLITAIRE_SAVED);
    } catch (err) {
      console.log(err);
      notifyErr(NOTIFICATION_MESSAGES.SOLITAIRE_ERROR);
    }
  };

  const removePrice = (idx: number) => {
    setComparedPrices((prices) =>
      prices.filter((price, priceIdx) => idx !== priceIdx)
    );
  };

  const removePriceFromList = (idx: number) => () => removePrice(idx);

  return {
    showLogin,
    setShowLogin,
    setShowValidationMessage,
    showValidationMessage,
    changeHandler,
    isRound,
    caratChangeHandler,
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
    removePriceFromList,
    onClickSaveSolitaire,
    colorOptions,
    clarityOptions,
    shapeType,
  };
};

export default useSolitairePrice;
