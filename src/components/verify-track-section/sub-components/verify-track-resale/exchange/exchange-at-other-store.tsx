import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";

import { getUserStore } from "@/api/store-locator";
import { Button } from "@/components/common";
//import Checkbox from "@/components/common/checkbox";
import LoaderContext from "@/context/loader-context";
import NotificationContext from "@/context/notification-context";
import { VerifyTrackContext } from "@/context/verify-track-context";
import { SaleType } from "@/enum/sale-type-enum";
import { StoreLocator } from "@/interface";
import { getToken, setRedirectionRoute } from "@/local-storage";
import { formatByCurrency } from "@/util";

import SummaryAccordion from "./summary-accordion";
import { RESALE_STEPS } from "../verify-track-resale-steps-enum";

interface ExchangeAtOtherStoreProps {
  setCurrentStep: (currentStep: RESALE_STEPS) => void;
  setProductAmt: (amt: string) => void;
  setSaletype: (saletype: SaleType) => void;
}

const ExchangeAtOtherStore: React.FC<ExchangeAtOtherStoreProps> = ({
  setCurrentStep,
  setProductAmt,
  setSaletype,
}) => {
  const { productDetails } = useContext(VerifyTrackContext);

  //const [tnc, setTnc] = useState<boolean>(false);
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const { notifyErr } = useContext(NotificationContext);
  //const [stores, setStores] = useState<string>(""); // Selected store ID
  const [searchQuery, setSearchQuery] = useState(""); // Store search input
  const [storeList, setStoreList] = useState<Array<StoreLocator>>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false); //Login dialog visibility

  const { push } = useRouter();

  const useClickOutside = (
    ref: React.RefObject<HTMLElement>,
    callback: () => void
  ) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, callback]);
  };

  // Usage in component:
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => setShowSuggestions(false));

  const handleClickProceed = () => {
    //if (!tnc) return;
    showLoader();
    // Show the login modal when button is clicked
    if (!getToken()) {
      //setShowLogin(true);
      handleDialogOpen();
      hideLoader();
      return;
    }
    // If logged in, proceed to form

    setCurrentStep(RESALE_STEPS.TWO);
    setProductAmt(
      `exchange_at_other_store,${productDetails?.exchange_diffrent_store_price.toString()},${searchQuery},`
    );
    setSaletype(SaleType.EXCHANGE);
    hideLoader();
    console.log("Proceeding to the next step...");
    //console.log("Selected Store ID:", stores);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true); // Open dialog
  };

  const handleDialogClose = () => {
    setRedirectionRoute(window.location.pathname);
    push("/login");
    setIsDialogOpen(false); // Close dialog
  };

  if (!productDetails) return <div>Loading product details...</div>;

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setLoading(true);
    if (value.trim() === "") {
      setShowSuggestions(false);
      setLoading(false);
      return;
    }

    try {
      //showLoader();
      const result = await getUserStore(value);
      setStoreList(result.data.data ?? []);
      setShowSuggestions(true);
    } catch (error) {
      notifyErr("An error occurred while fetching customer details.");
      console.error(error);
    } finally {
      //hideLoader();
      setLoading(false);
    }
  };

  const handleSuggestionClick = (id: string) => {
    setSearchQuery(id);
    setShowSuggestions(false);
    //setSearchQuery(""); // Optionally clear the search query
  };

  return (
    <div className="px-3 bg-[#FAFAFA]">
      <div className="w-full flex flex-col gap-2 mt-[25px]">
        <div className="relative w-full" ref={wrapperRef}>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            {/* Chevron down SVG */}
            <svg
              className={`transition-transform ${
                showSuggestions ? "rotate-180" : ""
              }`}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Select a store"
            value={searchQuery}
            onChange={handleSearch}
            onClick={() => setShowSuggestions(true)}
            className="w-full bg-[#F3F4F6] p-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 cursor-pointer appearance-none bg-white"
          />

          {loading && (
            <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
              <div className="loader small"></div>
            </div>
          )}

          {/* Dropdown suggestion box */}
          {showSuggestions && (
            <ul className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
              {storeList.length === 0 ? (
                <li className="px-4 py-2 text-gray-500">No stores found</li>
              ) : (
                storeList.map((store) => (
                  <li
                    key={store.id}
                    onClick={() =>
                      handleSuggestionClick(`${store.name}, ${store.city}`)
                    }
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    {store.name}, {store.city}
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      </div>
      <div className="mt-5 pl-[2.75px]">
        <div className="font-Montserrat text-sm font-medium text-[#121212] mb-3">
          Product Details
        </div>

        <>
          <SummaryAccordion
            title={{
              main: "Divine Solitaires:",
              details: productDetails.solitaire_details_1,
              smount: "",
              //currentPrice: productDetails.slt_total_current_price,
              currentPrice: productDetails.exchange_solitaire_price, //display current price
              purchasePrice: productDetails?.slt_total_purchase_price,
              isCoin: productDetails.is_coin,
              uid_status: productDetails.uid_status,
              sd_cts: productDetails.sd_cts,
              currency_locale: productDetails.currency_locale,
              currency_code: productDetails.currency_code,
            }}
            className="!px-0"
          />
          {productDetails.product_type !== "Diamond" && (
            <SummaryAccordion
              title={{
                main: "Divine Mount",
                details: `${productDetails.net_wt} gms | ${productDetails.mount_details_1}`,
                smount: productDetails.mount_details_2,
                // currentPrice:
                //   productDetails.metal_total_current_price +
                //   productDetails?.sd_total_current_price,
                currentPrice: productDetails?.exchange_mount_price, //display current price
                purchasePrice: productDetails?.metal_sd_purchase_price,
                isCoin: productDetails.is_coin,
                uid_status: productDetails.uid_status,
                sd_cts: productDetails.sd_cts,
                currency_locale: productDetails.currency_locale,
                currency_code: productDetails.currency_code,
              }}
              className="mt-3 !px-0"
            />
          )}
        </>

        <div className="flex my-2.5 border-dotted border-[0.5px] border-black"></div>

        <div className="bg-[#F8F8F8]  pl-[11px] pt-[15px] pb-4 rounded-sm">
          <div className="flex justify-between text-xs font-Montserrat font-medium text-[#121212]">
            Exchange Amount:
            <div className="text-gold text-sm font-semibold font-Montserrat mr-[6px]">
              {`${formatByCurrency(
                Math.round(productDetails.exchange_price),
                productDetails.currency_locale,
                productDetails.currency_code
              )}`}
            </div>
          </div>

          <div className="flex justify-between py-5 font-Montserrat text-xs font-normal text-gray-900">
            Admin & Processing Charge:
            <div className="text-[#7E7E7E] text-sm font-medium font-Montserrat mr-[6px]">
              {`-${formatByCurrency(
                productDetails.exchange_processing_charges,
                productDetails.currency_locale,
                productDetails.currency_code
              )}`}
            </div>
          </div>

          <div className="flex justify-between font-Montserrat text-xs font-medium text-[#000000]">
            Exchange Amount at Other Store:
            <div className="text-gold text-sm font-semibold font-Montserrat mr-[6px]">
              {`${formatByCurrency(
                Math.round(productDetails.exchange_diffrent_store_price),
                productDetails.currency_locale,
                productDetails.currency_code
              )}`}
            </div>
          </div>
        </div>
        {/* <div className="flex my-2.5 border-dotted  border border-[]"></div> */}
        {/* <div className="px-4 w-full flex mt-10">
          <Checkbox
            id="remember_me"
            onChange={handleCheckboxChange}
            className="text-base leading-5 [&>input]:w-4"
          >
            Accept Terms & Conditions
          </Checkbox>
        </div> */}
      </div>
      <div className="px-4 flex justify-between gap-4 mt-[45px] mb-[13px]">
        <Button
          themeType="light"
          classes="w-6/12 text-base leading-5 font-medium py-3"
        >
          CANCEL
        </Button>
        <Button
          themeType="dark"
          classes="w-6/12 text-base leading-5 font-medium"
          onClick={handleClickProceed}
          //disabled={!tnc}
        >
          PROCEED
        </Button>
      </div>
      {isDialogOpen && (
        <div className="pointer-events-auto fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60">
          <div className="relative max-w-[311px]  lg:max-w-[40%] sm:max-w-[90%] bg-white shadow-sm">
            <div className="w-full relative border-t border-slate-200 p-4 ">
              <div className="flex justify-center items-center font-[Montserrat] text-sm leading-6">
                <p className="font-medium">Please Login To Proceed</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap items-center pb-4 justify-center">
              <div className="w-24 ">
                <Button
                  onClick={handleDialogClose} // Close dialog on Cancel button
                  className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100"
                  themeType="dark"
                >
                  Login In
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExchangeAtOtherStore;
