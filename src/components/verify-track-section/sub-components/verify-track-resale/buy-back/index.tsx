import { useContext, useEffect, useState } from "react";

import { TabNavWithSection, TabNavWithSectionProps } from "@/components";
import { VerifyTrackContext } from "@/context/verify-track-context";
import { SaleType } from "@/enum/sale-type-enum";
//import useIsWithinOneYear from "@/hooks/use-withinayear";

import BuybackAtOtherStore from "./buyback-at-other-store";
import BuybackAtPurchasedStore from "./buyback-at-purchased-store";
import RequisitionForm from "./requisition-form";
import VerifyTrackResaleConfirmation from "../verify-track-resale-confirmation";
//import VerifyTrackResaleForm from "../verify-track-resale-form";
import { RESALE_STEPS } from "../verify-track-resale-steps-enum";

interface StepWrapperProps {
  type: "BUYBACK_AT_PURCHASED_STORE" | "BUYBACK_AT_OTHER_STORE";
}

const StepWrapper: React.FC<StepWrapperProps> = ({ type }) => {
  const [currentStep, setCurrentStep] = useState<RESALE_STEPS>(
    RESALE_STEPS.ONE
  );
  const [productAmt, setProductAmt] = useState<string>("");
  const [saletype, setSaletype] = useState<SaleType>(SaleType.BUYBACK);

  switch (currentStep) {
    default:
    case RESALE_STEPS.ONE:
      if (type === "BUYBACK_AT_PURCHASED_STORE") {
        return (
          <BuybackAtPurchasedStore
            setCurrentStep={setCurrentStep}
            setProductAmt={setProductAmt}
            setSaletype={setSaletype}
          />
        );
      }
      if (type === "BUYBACK_AT_OTHER_STORE") {
        return (
          <BuybackAtOtherStore
            setCurrentStep={setCurrentStep}
            setProductAmt={setProductAmt}
            setSaletype={setSaletype}
          />
        );
      }
      // Render ExchangeTabs for "EXCHANGE" flow
      return <BuybackTabs />;
    case RESALE_STEPS.TWO:
      return (
        <RequisitionForm
          setCurrentStep={setCurrentStep}
          productAmt={productAmt}
          saletype={saletype}
        />
      );
    case RESALE_STEPS.THREE:
      return <VerifyTrackResaleConfirmation />;
  }
};

const BuybackTabs: React.FC = () => {
  const { productDetails } = useContext(VerifyTrackContext);
  const [totcts, setTotcts] = useState(0);
  //const { checkDate } = useIsWithinOneYear();

  useEffect(() => {
    if (productDetails?.product_type === "Diamond") {
      const totalCarat = productDetails?.slt_details?.reduce(
        (total, item) => total + item.carat,
        0
      );
      setTotcts(totalCarat);
    } else {
      setTotcts(0);
    }
  }, [productDetails]);

  // const { isWithinOneYear, untilDate } = checkDate(
  //   productDetails?.purchase_date || ""
  // );

  //console.log("📌 Until Date:", untilDate?.toISOString() || "Invalid Date");

  const shouldHideTabs =
    Number(totcts) > 3 && productDetails?.uid_status === "SOLD";
  //|| isWithinOneYear || !productDetails?.purchase_date;

  const tabProps: TabNavWithSectionProps = {
    initialTab: 1,
    orientation: "Customhorizontal",
    //className: Number(totcts) > 3 && productDetails?.uid_status === "SOLD"? " hidden": " ",
    className: shouldHideTabs ? "hidden" : "",
    sections: [
      {
        label: "Buyback At Purchased Store",
        component: <StepWrapper type="BUYBACK_AT_PURCHASED_STORE" />,
      },
      {
        label: "Buyback At Other Store",
        component: <StepWrapper type="BUYBACK_AT_OTHER_STORE" />,
      },
    ],
  };

  return (
    <div className={`w-full mt-[18px]`}>
      <TabNavWithSection {...tabProps} />
    </div>
  );
};

export default BuybackTabs;
