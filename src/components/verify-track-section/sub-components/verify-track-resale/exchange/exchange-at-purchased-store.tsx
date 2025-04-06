import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { Button } from "@/components/common";
//import Checkbox from "@/components/common/checkbox";
import RestrictionModal from "@/components/common/restriction-modal";
import { XMarkIcon } from "@/components/icons";
import LoaderContext from "@/context/loader-context";
import { VerifyTrackContext } from "@/context/verify-track-context";
import { SaleType } from "@/enum/sale-type-enum";
//import useIsWithinOneYear from "@/hooks/use-withinayear";
import { getToken, setRedirectionRoute } from "@/local-storage";
import { formatByCurrency } from "@/util";

import RequisitionForm from "./requisition-form";
import SummaryAccordion from "./summary-accordion";
import { RESALE_STEPS } from "../verify-track-resale-steps-enum";

interface ExchangeAtPurchasedStoreProps {
  setCurrentStep: (currentStep: RESALE_STEPS) => void;
  setProductAmt: (amt: string) => void;
  setSaletype: (saletype: SaleType) => void;
}

const ExchangeAtPurchasedStore: React.FC<ExchangeAtPurchasedStoreProps> = ({
  setCurrentStep,
  setProductAmt,
  setSaletype,
}) => {
  const { productDetails, setSwitchToSummary } = useContext(VerifyTrackContext);
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const [totalPcs, setTotalPcs] = useState<number>(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false); //Login dialog visibility
  const [isRDialogOpen, setIsRDialogOpen] = useState(false); //request dialog visibility
  const [isStepTwoOpen, setIsStepTwoOpen] = useState(false); // Step Two modal
  const [productAmount, setProductAmount] = useState(""); // Ensure this is in the parent
  const [salestype, setSalestype] = useState<SaleType>(
    SaleType.EXCHANGE_REQUEST
  );
  //const [isMRDialogOpen, setIsMRDialogOpen] = useState(false); // restriction modal date is null
  //const [isMRNDialogOpen, setIsMRNDialogOpen] = useState(false); // restriction modal
  //const { checkDate } = useIsWithinOneYear();

  const { push } = useRouter();
  if (!productDetails) return <div>Loading product details...</div>;
  // Move the useState hook to the top level
  //const [tnc, setTnc] = useState<boolean>(false);

  // const { isWithinOneYear, untilDate } = checkDate(
  //   productDetails.purchase_date
  // );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const totcts =
      productDetails?.product_type === "Diamond"
        ? productDetails?.slt_details?.reduce(
            (total, item) => total + item.carat,
            0
          )
        : 0;
    setTotalPcs(totcts);

    // if (!productDetails.purchase_date) {
    //   handleMRDialogOpen(); // Trigger pop-up when purchase_date is missing
    // } else if (isWithinOneYear) {
    //   console.log("2");
    //   console.log("untilDate :", untilDate);
    //   handleMRNDialogOpen(); // Trigger pop-up if within one year
    // } else
    if (Number(totcts) >= 3 && productDetails.product_type === "Diamond")
      handleRDialogOpen();
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  //useEffect(() => {
  // if (isStepTwoOpen) {
  //   setCurrentStep(RESALE_STEPS.TWO);
  // }
  //}, [isStepTwoOpen]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const body = document.querySelector("body");
    if (isStepTwoOpen) {
      body?.classList.add("overflow-hidden");
    } else {
      body?.classList.remove("overflow-hidden");
    }

    return () => body?.classList.remove("overflow-hidden");
  }, [isStepTwoOpen]);

  // Conditional rendering after hooks

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTnc(e.target.checked);
  // };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   if (isRDialogOpen) {
  //     document.body.style.overflow = "hidden"; // Disable scrolling
  //   } else {
  //     document.body.style.overflow = "auto"; // Enable scrolling back
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto"; // Cleanup when component unmounts
  //   };
  // }, [isRDialogOpen]);

  const handleClickProceed = () => {
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
      "exchange_at_purchased_store," +
        productDetails.exchange_same_store_price.toString()
    );
    setSaletype(SaleType.EXCHANGE);
    //if (!tnc) return;
    hideLoader();
    console.log("Proceeding to the next step...");
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true); // Open dialog
  };

  const handleLoginDialogClose = () => {
    setIsDialogOpen(false); // Close dialog
    setSwitchToSummary(true);
  };

  const handleDialogClose = () => {
    setRedirectionRoute(window.location.pathname);
    push("/login");
    setIsDialogOpen(false); // Close dialog
  };

  // DATE IS NULL
  // const handleMRDialogOpen = () => {
  //   setIsMRDialogOpen(true); // Open dialog
  // };

  // DATE IS NOTN NULL
  // const handleMRNDialogOpen = () => {
  //   setIsMRNDialogOpen(true); // Open dialog
  // };

  const handleRDialogOpen = () => {
    setIsRDialogOpen(true); // Open dialog
  };

  const handleRDialogClose = () => {
    setIsRDialogOpen(false); // Close dialog
    setSwitchToSummary(true);
  };

  const handleRDialogSubmit = () => {
    setIsRDialogOpen(false); // Close dialog

    if (!getToken()) {
      handleDialogOpen();
      hideLoader();
      return;
    }

    setIsStepTwoOpen(true);
    const newProductAmt =
      "exchange_at_purchased_store," +
      productDetails.exchange_same_store_price.toString();

    setProductAmount(newProductAmt); // Set the correct product amount
    setSalestype(SaleType.EXCHANGE_REQUEST);
  };

  // const handleMRDialogClose = () => {
  //   setIsMRDialogOpen(false); // Close dialog
  //   setSwitchToSummary(true);
  // };

  // const handleMRDialogSubmit = () => {
  //   setIsMRDialogOpen(false); // Close dialog
  //   setSwitchToSummary(true);
  // };

  // const handleMRNDialogClose = () => {
  //   setIsMRDialogOpen(false); // Close dialog
  //   setSwitchToSummary(true);
  // };

  // const handleMRNDialogSubmit = () => {
  //   setIsMRDialogOpen(false); // Close dialog
  //   setSwitchToSummary(true);
  // };

  return (
    <>
      <div
        className="px-3 bg-[#FAFAFA]"
        style={
          totalPcs > 3 &&
          productDetails?.uid_status === "SOLD" &&
          productDetails.product_type === "Diamond"
            ? // || isWithinOneYear || !productDetails?.purchase_date
              { filter: "blur(4px)" }
            : {}
        }
      >
        <div className="w-full flex flex-col gap-2 mt-[25px]">
          <label
            htmlFor="purchase-from"
            className="text-sm font-medium text-gray-700"
          >
            Store Name
          </label>
          <input
            id="purchase-from"
            type="text"
            value={productDetails?.purchase_from} // Fallback value
            placeholder="Name....."
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 cursor-not-allowed"
            readOnly={true}
          />
        </div>
        <div className="mt-5 pl-[2.75px]">
          <div className="font-Montserrat text-sm font-medium text-[#121212] mb-3">
            Product Details
          </div>
          {/* {isJewelleryProduct(productDetails) && ( */}
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
            {/* <VerifyTrackSummarySltAccordion productDetails={productDetails} /> */}
            {/* <VerifyTrackSummaryMountAccordion productDetails={productDetails} /> */}
          </>
          {/* )} */}

          {/* {isDiamondProduct(productDetails) && (
          <>
            <DetailsTable
              title="Divine Solitaires: "
              headings={["Shape", "Carat", "Colour", "Clarity"]}
              rows={productDetails?.slt_details?.map((item) => [
                item.shape,
                item.carat.toFixed(2),
                item.colour,
                item.clarity,
              ])}
              growth={
                isSoldProduct(productDetails)
                  ? ((productDetails.slt_details[0].current_price -
                      productDetails.slt_details[0].purchase_price) /
                      productDetails.slt_details[0].purchase_price) *
                    100
                  : undefined
              }
            />
          </>
        )} */}
          {/* {isSoldProduct(productDetails) && (
          <>
            <VerifyTrackSummaryDetailsAccordion
              discount={productDetails.purchase_discount}
              purchaseAmount={productDetails.purchase_price as number}
              premium={0}
              total={productDetails.purchase_price_final as number}
              currency_locale={productDetails.currency_locale}
              currency_code={productDetails.currency_code}
              className="mt-9"
            />            
          </>
        )} */}
          <div className="flex my-2.5 border-dotted  border-[0.5px] border-black"></div>
          <div className="w-full bg-[#F8F8F8] rounded-[5px] pl-[11px] pt-[15px] pb-4 pr-2">
            <div className="flex justify-between font-Montserrat text-xs font-medium">
              Exchange Amount:
              <div className="text-gold text-lg font-normal font-Montserrat text-sm font-semibold mr-[6px]">
                {`${formatByCurrency(
                  Math.round(productDetails.exchange_same_store_price),
                  productDetails.currency_locale,
                  productDetails.currency_code
                )}`}
              </div>
            </div>
          </div>
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
      </div>

      {isDialogOpen && (
        <div
          className="pointer-events-auto fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60"
          onClick={handleLoginDialogClose}
        >
          <div
            className="relative max-w-[311px]  lg:max-w-[40%] sm:max-w-[90%] rounded-md bg-white shadow-sm"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className=" flex shrink-0 font-[Montserrat] font-bold text-base justify-around align-middle py-4 text-[#000000]">
              <XMarkIcon
                className="h-5 w-5 absolute top-1.5 right-1.5"
                onClick={handleLoginDialogClose}
              />
            </div>
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

      {/* Dialog for sale Request 3 carat up */}
      {isRDialogOpen && (
        <RestrictionModal
          isOpen={isRDialogOpen}
          onClose={handleRDialogClose}
          onSubmit={handleRDialogSubmit}
          headmsg={"Feature Currently Unavailable"}
          bodymsg1={"Please click the button below to submit your request"}
          bodymsg2={"for Buyback. We will respond within 24 hours."}
          bodymsg3={""}
          isIcon={"no"}
        />
      )}

      {/* Dialog for sale Restriction when date is null */}
      {/* {isMRDialogOpen && (
        <RestrictionModal
          isOpen={isMRDialogOpen}
          onClose={handleMRDialogClose}
          onSubmit={handleMRDialogSubmit}
          headmsg="Exchange Policy Restrictions"
          bodymsg1="Exchange for this product is temporarily restricted."
          bodymsg2="For assistance, please reach out to our customer"
          bodymsg3="service team."
          isIcon={"yes"}
        />
      )} */}

      {/* Dialog for sale Restriction when date is not null */}
      {/* {isMRNDialogOpen && (
        <RestrictionModal
          isOpen={isMRNDialogOpen}
          onClose={handleMRNDialogClose}
          onSubmit={handleMRNDialogSubmit}
          headmsg="Exchange Policy Restrictions"
          bodymsg1="The exchange for this product is restricted until"
          bodymsg2={`${
            untilDate ? untilDate.toISOString().split("T")[0] : "N/A"
          } . For assistance, contact customer service.`}
          bodymsg3={""}
          isIcon={"yes"}
        />
      )} */}

      {isStepTwoOpen && (
        <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-white">
          <div className="relative w-full max-w-[500px] bg-white p-2 rounded-lg shadow-lg max-h-[calc(100vh-2rem)] overflow-y-auto">
            <RequisitionForm
              setCurrentStep={setCurrentStep}
              productAmt={productAmount}
              saletype={salestype}
              setIsStepTwoOpen={setIsStepTwoOpen}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ExchangeAtPurchasedStore;
