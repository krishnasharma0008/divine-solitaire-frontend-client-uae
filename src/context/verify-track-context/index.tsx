import { useRouter } from "next/router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
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

  const updateProductDetails = async (force = false) => {
    //console.log("verifytrack context", countrycode);
    showLoader();

    try {
      if (countrycode && query.uid && !Array.isArray(query.uid)) {
        // Only fetch data if force is true or productDetails is missing
        if (!productDetails || force) {
          const { data } = await getVerifyTrackByUid(query.uid, countrycode);

          // Only update productDetails if it has actually changed to avoid unnecessary re-renders
          if (JSON.stringify(productDetails) !== JSON.stringify(data.data)) {
            setProductDetails(data.data);
          }

          const isWishlist = data.data.uid_status === "UNSOLD";
          setIsWishlist(isWishlist);

          // Update wishlist or portfolio status based on current token and product status
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

    hideLoader();
  };

  useEffect(() => {
    console.log("verifytrack context", countrycode);
    //updateProductDetails(true);
    if (!productDetails || query.uid) {
      // Only force update if product details are not set or if the countrycode changes
      updateProductDetails(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countrycode, query.uid]);

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
