import { useState } from "react";

import VerifyTrackLoanConfirmation from "./verify-track-loan-confirmation";
import VerifyTrackLoanForm from "./verify-track-loan-form";
import VerifyTrackLoanSc from "./verify-track-loan-sc";
import { STEPS } from "./verify-track-loan-steps-enum";

const StepWrapper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.ONE);
  switch (currentStep) {
    default:
    case STEPS.ONE:
      return <VerifyTrackLoanSc setCurrentStep={setCurrentStep} />;
    case STEPS.TWO:
      return <VerifyTrackLoanForm setCurrentStep={setCurrentStep} />;
    case STEPS.THREE:
      return <VerifyTrackLoanConfirmation setCurrentStep={setCurrentStep} />;
  }
};

const VerifyTrackLoan: React.FC = () => {
  return (
    <div>
      <StepWrapper />
    </div>
  );
};

export default VerifyTrackLoan;
