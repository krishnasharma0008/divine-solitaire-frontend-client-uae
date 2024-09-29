import { useContext, useEffect, useState } from "react";

import { VerifyTrackContext } from "@/context/verify-track-context";

import VerifyTrackInsuranceMessage from "./verify-track-insurance-message";
import VerifyTrackInsurancePi from "./verify-track-insurance-pi";
import VerifyTrackInsuranceSc from "./verify-track-insurance-sc";
import { STEPS } from "../verify-track-loan/verify-track-loan-steps-enum";

const StepWrapper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.ONE);

  const { switchToInsurance, setSwitchToInsurance } =
    useContext(VerifyTrackContext);

  useEffect(() => {
    if (switchToInsurance) {
      setCurrentStep(2);
      setSwitchToInsurance(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [switchToInsurance]);

  switch (currentStep) {
    default:
    case STEPS.ONE:
      return <VerifyTrackInsuranceSc setCurrentStep={setCurrentStep} />;
    case STEPS.TWO:
      return <VerifyTrackInsurancePi setCurrentStep={setCurrentStep} />;
    case STEPS.THREE:
      return <VerifyTrackInsuranceMessage />;
  }
};

const VerifyTrackInsurance: React.FC = () => {
  return (
    <div>
      <StepWrapper />
    </div>
  );
};

export default VerifyTrackInsurance;
