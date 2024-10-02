import { useRouter } from "next/router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import getVerifyTrackByUid, {
  getProductPortfolioStatus,
  getProductWishlistStatus,
} from "@/api/verify-track";
//import useCountryCode from "@/hooks/use-country-code";
import { VerifyTrackByUid } from "@/interface";
import { getToken } from "@/local-storage";
//import { reverseCountryCurrencyMap } from "@/util/reverse-country-currency-map";//

import { useCurrency } from "../currency-context"; //
import LoaderContext from "../loader-context";

type VerifyTrackByUidType = VerifyTrackByUid | null;

type VerifyTrackContextData = {
  insuranceReceiptNumber: number | null;
  isAdded: boolean;
  isWishlist: boolean;
  productDetails: VerifyTrackByUidType;
  setInsuranceReceiptNumber: (num: number) => void;
  setProductDetails: (productDetails: VerifyTrackByUid) => void;
  setSwitchToInsurance: (val: boolean) => void;
  switchToInsurance: boolean;
  updateProductDetails: (force: boolean) => void;
};

const defaultState: VerifyTrackContextData = {
  insuranceReceiptNumber: null,
  isAdded: false,
  isWishlist: true,
  productDetails: null,
  setInsuranceReceiptNumber: () => null,
  setProductDetails: () => null,
  setSwitchToInsurance: () => null,
  switchToInsurance: false,
  updateProductDetails: () => null,
};

const VerifyTrackContext = createContext<VerifyTrackContextData>(defaultState);

interface VerifyTrackContextWrapperProps {
  children: React.ReactNode;
}

const VerifyTrackContextWrapper: React.FC<VerifyTrackContextWrapperProps> = ({
  children,
}) => {
  const [productDetails, setProductDetails] =
    useState<VerifyTrackByUidType>(null);
  const [insuranceNumber, setInsuranceNumber] = useState<number | null>(null);
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const [isWishlist, setIsWishlist] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  const [switchToInsurance, setSwitchToInsurance] = useState<boolean>(false);

  const { query } = useRouter();

  //const countrycode = useCountryCode();
  const { currency } = useCurrency(); //for currency
  //const countrycode = reverseCountryCurrencyMap[currency];

  const countrycode = currency;
  const prevCurrencyRef = useRef<string | null>(null);

  const setProductDetailsInContext = useCallback(
    (productDetails: VerifyTrackByUid) => setProductDetails(productDetails),
    []
  );

  // const updateProductDetails = async (force?: boolean) => {
  //   showLoader();
  //   try {
  //     if (countrycode !== null) {
  //       if (
  //         query.uid &&
  //         !Array.isArray(query.uid) &&
  //         (!productDetails || force)
  //       ) {
  //         const { data } = await getVerifyTrackByUid(
  //           query.uid,
  //           countrycode as string
  //         );
  //         const isWishlist = data.data.uid_status === "UNSOLD";
  //         setProductDetails(data.data);

  //         setIsWishlist(isWishlist);
  //         if (getToken() && isWishlist) {
  //           const currentStatus = await getProductWishlistStatus(query.uid);
  //           const status =
  //             currentStatus.data.data?.uid === query.uid.toUpperCase();
  //           setIsAdded(status);
  //         }
  //         if (getToken() && !isWishlist) {
  //           const currentStatus = await getProductPortfolioStatus(query.uid);
  //           const status =
  //             currentStatus.data.data?.uid === query.uid.toUpperCase();
  //           setIsAdded(status);
  //         }
  //       }
  //     }
  //   } catch (err) {
  //     console.log("Something went wrong: VerifyTrackSection", err);
  //   }
  //   hideLoader();
  // };

  // const updateProductDetails = async (force = false) => {
  //   //console.log("verifytrack context", countrycode);
  //   showLoader();

  //   try {
  //     if (countrycode && query.uid && !Array.isArray(query.uid)) {
  //       // Only fetch data if force is true or productDetails is missing
  //       if (!productDetails || force) {
  //         const { data } = await getVerifyTrackByUid(query.uid, countrycode);

  //         // Only update productDetails if it has actually changed to avoid unnecessary re-renders
  //         if (JSON.stringify(productDetails) !== JSON.stringify(data.data)) {
  //           setProductDetails(data.data);
  //         }

  //         const isWishlist = data.data.uid_status === "UNSOLD";
  //         setIsWishlist(isWishlist);

  //         // Update wishlist or portfolio status based on current token and product status
  //         if (getToken()) {
  //           const currentStatus = isWishlist
  //             ? await getProductWishlistStatus(query.uid)
  //             : await getProductPortfolioStatus(query.uid);

  //           const status =
  //             currentStatus.data.data?.uid === query.uid.toUpperCase();
  //           if (isAdded !== status) {
  //             setIsAdded(status);
  //           }
  //         }
  //       }
  //     }
  //   } catch (err) {
  //     console.log("Something went wrong: VerifyTrackSection", err);
  //   }

  //   hideLoader();
  // };

  const updateProductDetails = async (force = false) => {
    showLoader(); // Show the loader before the fetch

    try {
      // Ensure we have a valid countrycode and query.uid to fetch data
      if (countrycode && query.uid && !Array.isArray(query.uid)) {
        // Check if force is true or productDetails is missing
        if (!productDetails || force) {
          const { data } = await getVerifyTrackByUid(query.uid, countrycode);

          if (JSON.stringify(productDetails) !== JSON.stringify(data.data)) {
            setProductDetails(data.data);
          }

          const isWishlist = data.data.uid_status === "UNSOLD";
          setIsWishlist(isWishlist);

          if (getToken()) {
            const currentStatus = isWishlist
              ? await getProductWishlistStatus(query.uid)
              : await getProductPortfolioStatus(query.uid);

            const status =
              currentStatus.data.data?.uid === query.uid.toUpperCase();
            if (isAdded !== status) {
              setIsAdded(status);
            }
          }
        }
      }
    } catch (err) {
      console.log("Something went wrong: VerifyTrackSection", err);
    }

    hideLoader(); // Hide the loader after the fetch
  };

  useEffect(() => {
    let chk = 0; // Declare the counter
    const prevCurrency = prevCurrencyRef.current;

    // Check if currency has changed
    if (prevCurrency !== null && prevCurrency !== currency) {
      //console.log(`Currency has changed from ${prevCurrency} to ${currency}`);
      chk += 1; // Increment the counter
    }

    // Log query.number
    //console.log("query.number", chk);

    // Only call updateProductDetails if chk is greater than 0, countrycode is valid, and uid is a string
    if (chk > 0 && countrycode && query.uid && typeof query.uid === "string") {
      updateProductDetails(true); // Force refetch if conditions are met
    }

    // Update the ref to the current currency
    prevCurrencyRef.current = currency;
  }, [currency, countrycode, query.uid]);

  return (
    <VerifyTrackContext.Provider
      value={{
        insuranceReceiptNumber: insuranceNumber,
        isAdded,
        isWishlist,
        productDetails,
        setInsuranceReceiptNumber: setInsuranceNumber,
        setProductDetails: setProductDetailsInContext,
        setSwitchToInsurance,
        switchToInsurance,
        updateProductDetails,
      }}
    >
      {children}
    </VerifyTrackContext.Provider>
  );
};

export default VerifyTrackContextWrapper;
export { type VerifyTrackContextWrapperProps, VerifyTrackContext };
