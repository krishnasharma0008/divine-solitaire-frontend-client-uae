import { Tooltip } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import {
  AddToWishlistRequest,
  addProductToPortfolio,
  addProductToWishlist,
} from "@/api/verify-track";
import { BorderBar, Button } from "@/components";
//import Carousel from "@/components/common/carousel";
//import Checkbox from "@/components/common/checkbox";
import DetailsTable from "@/components/common/details-table";
import ImageGallery from "@/components/common/image-gallery";
//import generateImage from "@/components/common/imagewriter";
//import LoginModal from "@/components/modals/login-modal";
import { NOTIFICATION_MESSAGES } from "@/config";
import LoaderContext from "@/context/loader-context";
import NotificationContext from "@/context/notification-context";
import { getToken, setRedirectionRoute } from "@/local-storage";
import {
  isJewelleryProduct,
  formatByCurrency,
  isDiamondProduct,
  isSoldProduct,
  isCoinProduct,
} from "@/util";

import RequisitionForm from "./requisition-form";
import { VerifyTrackSummaryDetailsAccordion } from "./verify-track-summary-accordion";
import VerifyTrackSummaryMountAccordion from "./verify-track-summary-accordion/verify-track-summary-mount-accordion";
import VerifyTrackSummarySltAccordion from "./verify-track-summary-accordion/verify-track-summary-slt-accordion";
import VerifyTrackSummaryPopup from "./verify-track-summary-popup";
import { VerifyTrackContext } from "../../../../context/verify-track-context";

const VerifyTrackSummary: React.FC = () => {
  //const [showLogin, setShowLogin] = useState(false);

  const [openInsureNow, setOpenInsureNow] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false); //Login dialog visibility

  const [isStepTwoOpen, setIsStepTwoOpen] = useState(false); // Step Two modal
  const [totalTcs, setTotalTcs] = useState<number>(0); //for 3carat up

  const { push } = useRouter();

  useEffect(() => {
    const totcts =
      productDetails?.product_type === "Diamond"
        ? productDetails?.slt_details?.reduce(
            (total, item) => total + item.carat,
            0
          )
        : 0;
    setTotalTcs(totcts);
  }, []);

  const handleClickProceed = () => {
    if (!getToken()) {
      handleDialogOpen();
      hideLoader();
      return;
    }

    setIsStepTwoOpen(true); //setCurrentStep(STEPS.TWO);
  };

  const {
    productDetails,
    isAdded,
    isWishlist,
    updateProductDetails,
    setSwitchToInsurance,
  } = useContext(VerifyTrackContext);
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const { notify, notifyErr } = useContext(NotificationContext);

  //const handleOpenInsurance = () => setOpenInsureNow(true);
  const handleOpenInsurance = () => {
    showLoader();
    // Show the login modal when button is clicked
    if (!getToken()) {
      //setShowLogin(true);
      handleDialogOpen();
      hideLoader();
      return;
    }
    // If logged in, show the insurance modal
    setOpenInsureNow(true);
    hideLoader();
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isStepTwoOpen) {
      body?.classList.add("overflow-hidden");
    } else {
      body?.classList.remove("overflow-hidden");
    }

    return () => body?.classList.remove("overflow-hidden");
  }, [isStepTwoOpen]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (openInsureNow) {
        body.className = document.querySelector("body")?.className + " hide";
        setSwitchToInsurance(true);
      } else {
        body.className =
          document.querySelector("body")?.className.replace("hide", "") || "";
      }
    }

    const postLoginAction = sessionStorage.getItem("postLoginAction");

    if (getToken()) {
      if (postLoginAction === "openInsurance") {
        setOpenInsureNow(true); // Execute the stored action
        sessionStorage.removeItem("postLoginAction"); // Clear the action after execution
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openInsureNow]);

  const handleClick = async () => {
    showLoader();
    try {
      if (isAdded) {
        push(isWishlist ? "?/wishlist" : "/portfolio");
        return;
      } else if (!getToken()) {
        //setShowLogin(true);
        handleDialogOpen();
        hideLoader();
        return;
      }
      await handleAdd();
      await updateProductDetails(true);
      notify(
        isWishlist
          ? NOTIFICATION_MESSAGES.ADDED_TO_WISHLIST
          : NOTIFICATION_MESSAGES.ADDED_TO_PORTFOLIO
      );
    } catch (err) {
      console.log(err);
      notifyErr(NOTIFICATION_MESSAGES.ERROR);
    }
    hideLoader();
  };

  const handleAdd = async () => {
    const payload: AddToWishlistRequest = {
      carat:
        (productDetails?.sd_cts || 0) + (productDetails?.slt_total_cts || 0),
      current_price: productDetails?.current_price || 0,
      design_no: productDetails?.design_no || "",
      imgurl:
        productDetails?.product_type === "Jewellery"
          ? productDetails.image
          : productDetails?.slt_details[0]?.shape || "",
      jewelcat: productDetails?.category || "",
      product_type: productDetails?.product_type || "",
      purchase_price: productDetails?.purchase_price || 0,
      uid: productDetails?.uid || "",
    };

    if (isWishlist) {
      await addProductToWishlist(payload);
    } else {
      await addProductToPortfolio(payload);
    }
  };

  if (!productDetails) return null;

  const isValidURL = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  if (productDetails !== null && productDetails.product_type === "Diamond") {
    const shape = productDetails.slt_details[0].shape;
    console.log("Shape :", shape);
    //if (shape === "RND") {
    productDetails.images = [
      shape === "RND"
        ? "/vtdia/carousel_1.png"
        : shape === "PRN"
        ? "/image8.png"
        : shape === "OVL"
        ? "/image9.png"
        : shape === "PER"
        ? "/image_9.png"
        : shape === "RADQ"
        ? "/radiant.png"
        : shape === "CUSQ"
        ? "/cushion.png"
        : shape === "HRT"
        ? "/heart.png"
        : shape === "MAQ"
        ? "/marquise.jpg"
        : "",
      shape === "RND" ? "/vtdia/carousel_2.png" : "",
      "/vtdia/carousel_3.png",
      shape === "RND" ? "/vtdia/carousel_4.png" : "",
    ];
    //console.log(productDetails.images);
  }

  const imageGalleryImages = productDetails.images.map((url, index) => ({
    url: url,
    thumbnailUrl: url, // Use the same URL for thumbnails (you can customize this)
    title: `Image ${index + 1}`, // Set a title (you can customize this)
    uid: productDetails.uid,
    //type: "image",
  }));

  //console.log("Image Gallery :", imageGalleryImages);

  const validVideoURLs = productDetails.videos?.filter(isValidURL) || [];
  // if (validVideoURLs.length > 0) {
  //   imageGalleryImages.unshift({
  //     url: validVideoURLs[0],
  //     thumbnailUrl: validVideoURLs[0],
  //     title: "Video 1",
  //     uid: productDetails.uid,
  //     //type: "video",
  //   });
  // }

  validVideoURLs.forEach((videoURL, index) => {
    imageGalleryImages.splice(index, 0, {
      url: videoURL,
      thumbnailUrl: videoURL,
      title: `Video ${index + 1}`,
      uid: productDetails.uid,
    });
  });

  //console.log("Image Gallery :", imageGalleryImages);
  const handleDialogOpen = () => {
    setIsDialogOpen(true); // Open dialog
  };
  const handleDialogClose = () => {
    setRedirectionRoute(window.location.pathname);
    push("/login");
    setIsDialogOpen(false); // Close dialog
  };

  return (
    <>
      <div className="[&>div]:px-4 [&>div]:pb-4 [&>div]:md:px-0 [&>.swiper]:border-none ">
        {/* <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} /> */}
        <VerifyTrackSummaryPopup
          open={openInsureNow}
          setOpen={setOpenInsureNow}
        />
        {/* <Carousel
        type="slide"
        cardType="ImageCard"
        className="border"
        slidesPerView={1}
        navigation={false}
        items={carouselImages}
      /> */}
        <ImageGallery images={imageGalleryImages} />
        <div className="w-full">
          <div className="mt-10 mb-7 flex justify-between">
            <div className="">{`UID : ${productDetails.uid}`}</div>
            <div className="">{`Design No. : ${productDetails.design_no}`}</div>
          </div>
          <div className="text-gold text-3xl leading-8 font-newsreader font-semibold">
            {`${formatByCurrency(
              Math.round(productDetails.current_price),
              productDetails.currency_locale,
              productDetails.currency_code
            )}`}
            <span className="font-montserrat text-sm leading-4 ml-2 font-body font-normal leading-none">
              Excl. GST
            </span>
            {!isCoinProduct(productDetails) &&
            isJewelleryProduct(productDetails) === false ? (
              // <Tooltip
              //   content={
              //     <div className="w-auto">
              //       <Typography
              //         variant="small"
              //         color="white"
              //         className="font-normal opacity-80"
              //       >
              //         Premium charges may be applicable
              //       </Typography>
              //     </div>
              //   }
              // >
              <Tooltip content="Premium charges may be applicable">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-black float-right"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </Tooltip>
            ) : (
              ""
            )}
          </div>
          {totalTcs > 3 && productDetails.uid_status === "SOLD" && (
            <div className="bg-[#F8F8F8] pl-2 pr-[18px]">
              <p className="pt-[10px] pb-[9px] font-montserrat font-light text-[8px] leading-[15px] tracking-[2%]">
                (The price displayed is over a month old and may not reflect the
                current value.&quot;)
              </p>
              <p className="font-montserrat font-medium text-[10px] text-[#646464] leading-[15px] tracking-[2%] pb-4">
                please{" "}
                <u
                  className="underline decoration-solid decoration-[0%] decoration-0 cursor-pointer"
                  onClick={handleClickProceed}
                >
                  click here
                </u>{" "}
                to submit your request, and we will get back to you within 24
                hours.
              </p>
            </div>
          )}
          {productDetails.category && (
            <div className="uppercase mt-2">
              {productDetails.category} - {productDetails.collection}
            </div>
          )}
        </div>
        <BorderBar className="my-3" />

        {isJewelleryProduct(productDetails) && (
          <>
            <VerifyTrackSummarySltAccordion productDetails={productDetails} />
            <VerifyTrackSummaryMountAccordion productDetails={productDetails} />
          </>
        )}

        {isDiamondProduct(productDetails) && (
          <>
            <DetailsTable
              title="Divine Solitaires: "
              headings={["Shape", "Carat", "Colour", "Clarity"]}
              rows={productDetails.slt_details?.map((item) => [
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
        )}
        {isSoldProduct(productDetails) && (
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
            <div className="mt-4 text-base sm:text-lg px-4 font-medium">
              {"Jeweller's Name:"}
            </div>
            <div className="mt-2 text-sm sm:text-base px-4">
              {productDetails.purchase_from}
            </div>

            <div className="mt-4 text-base sm:text-lg px-4 font-medium">
              {"Date Of Purchase:"}
            </div>
            <div className="mt-2 text-sm sm:text-base px-4">
              {productDetails.purchase_date}
            </div>
          </>
        )}

        <BorderBar className="my-8" />

        {/* <Checkbox
        id="remember_me"
        onChange={handleCheckboxChange}
        className="text-base leading-5"
      >
        Please sign me up
      </Checkbox> */}
        <div
          className={`flex ${
            productDetails.uid_status === "SOLD"
              ? "justify-between"
              : "justify-center"
          } gap-1 mt-14`}
        >
          <Button
            themeType="light"
            classes="w-6/12 text-xs sm:text-base leading-5 font-medium"
            onClick={handleOpenInsurance}
          >
            INSURE NOW
          </Button>
          {/* <Button
          themeType="dark"
          classes="w-6/12 text-xs sm:text-base leading-5 font-medium"
          onClick={handleClick}
        >
          {`${isAdded ? "View" : "Add To"} ${
            isWishlist ? "Wishlist" : "Portfolio"
          }`}
        </Button> */}
          <Button
            themeType="dark"
            classes={`w-6/12 text-xs sm:text-base leading-5 font-medium ${
              productDetails.uid_status !== "SOLD" && "hidden"
            }`}
            onClick={handleClick}
          >
            {`${isAdded ? "View" : "Add To"} ${
              //isWishlist === true && "Portfolio"
              productDetails.uid_status === "SOLD" && "Portfolio"
            }`}
          </Button>
        </div>
      </div>
      {/* Dialog Structure */}
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

      {isStepTwoOpen && (
        <div className="fixed inset-0 z-[999] grid w-screen place-items-center bg-white">
          <div className="relative w-full max-w-[500px] bg-white p-2 rounded-lg shadow-lg max-h-[calc(100vh-2rem)] overflow-y-auto">
            <RequisitionForm
              //setCurrentStep={setCurrentStep}
              setIsStepTwoOpen={setIsStepTwoOpen}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyTrackSummary;
