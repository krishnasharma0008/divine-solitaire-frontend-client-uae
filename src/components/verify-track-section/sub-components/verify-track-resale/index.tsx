import { useState } from "react";

import { TabNavWithSection, TabNavWithSectionProps } from "@/components";
import { SaleType } from "@/enum/sale-type-enum";

import VerifyTrackResaleBuyback from "./verify-track-resale-buyback";
import VerifyTrackResaleConfirmation from "./verify-track-resale-confirmation";
import VerifyTrackResaleForm from "./verify-track-resale-form";
import { RESALE_STEPS } from "./verify-track-resale-steps-enum";
import VerifyTrackResaleUpgrade from "./verify-track-resale-upgrade";

interface StepWrapperProps {
  type: "UPGRADE" | "BUYBACK";
}
const StepWrapper: React.FC<StepWrapperProps> = ({ type }) => {
  const [currentStep, setCurrentStep] = useState<RESALE_STEPS>(
    RESALE_STEPS.ONE
  );
  const [productAmt, setProductAmt] = useState<string>("");
  const [saletype, setSaletype] = useState<SaleType>(SaleType.UPGRADE);

  switch (currentStep) {
    default:
    case RESALE_STEPS.ONE:
      return type === "UPGRADE" ? (
        <VerifyTrackResaleUpgrade
          setCurrentStep={setCurrentStep}
          productAmt={productAmt}
          setProductAmt={setProductAmt}
          setSaletype={setSaletype}
        />
      ) : (
        <VerifyTrackResaleBuyback
          setCurrentStep={setCurrentStep}
          // productAmt={productAmt}
          setProductAmt={setProductAmt}
          setSaletype={setSaletype}
        />
      );
    case RESALE_STEPS.TWO:
      return (
        <VerifyTrackResaleForm
          setCurrentStep={setCurrentStep}
          productAmt={productAmt}
          saletype={saletype}
        />
      );
    case RESALE_STEPS.THREE:
      return <VerifyTrackResaleConfirmation />;
  }
};

const VerifyTrackResale: React.FC = () => {
  const tabProps: TabNavWithSectionProps = {
    initialTab: 1,
    orientation: "horizontal",
    sections: [
      {
        label: "UPGRADE",
        component: <StepWrapper type="UPGRADE" />,
      },
      {
        label: "BUYBACK",
        component: <StepWrapper type="BUYBACK" />,
      },
    ],
  };

  return (
    <div>
      <TabNavWithSection {...tabProps} />
    </div>
  );
};

export default VerifyTrackResale;
