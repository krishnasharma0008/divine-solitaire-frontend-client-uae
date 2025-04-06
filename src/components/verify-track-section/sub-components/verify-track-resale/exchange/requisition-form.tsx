import get from "lodash/get";
import { useContext, useEffect, useReducer, useState } from "react";

import { createVerifyTrackResale } from "@/api/verify-track-resale";
import { Button } from "@/components/common";
import InputText from "@/components/common/input-text";
import MessageModal from "@/components/common/message-modal";
import { VerifyTrackContext } from "@/context/verify-track-context";
import { SaleType } from "@/enum/sale-type-enum";
import useContactNo from "@/hooks/use-contactno";
import { VerifyTrackResaleForm } from "@/interface";
import { getToken, getUser } from "@/local-storage";

import { RESALE_STEPS } from "../verify-track-resale-steps-enum";

interface RequisitionFormProps {
  children?: React.ReactNode;
  setCurrentStep: (currentStep: RESALE_STEPS) => void;
  productAmt: string;
  saletype: SaleType;
  setIsStepTwoOpen?: (isOpen: boolean) => void; // Add this prop
}

interface RequisitionFormAction {
  type: string;
  payload?: string | VerifyTrackResaleForm | File;
}

const errorKeys: Array<{
  key: string;
  errorText: string;
}> = [
  {
    key: "invval",
    errorText: "Invoice value is required",
  },
];

const initialState: VerifyTrackResaleForm = {
  etype: SaleType.EXCHANGE,

  //userid?:
  phname: "",
  phemail: "",
  phcontactno: "",
  phaddress: "",
  phcity: "",
  phpincode: "",
  phdob: "",
  uid: "",
  invno: "",
  invdate: "",
  invval: "",
  jewelname: "",
  issamestore: true,
  currentval: "",
  newval: 0,
  docfile: "",
  solitairval: 0,
  mountval: 0,
  charges: 0,
  product_category: "",
};

const VerifyTrackResaleReducer = (
  state: VerifyTrackResaleForm,
  action: RequisitionFormAction
) => {
  if (action.type === "ALL") {
    return {
      ...state,
      ...(action.payload as unknown as VerifyTrackResaleForm),
    };
  }
  return { ...state, [action.type]: action.payload };
};

const RequisitionForm: React.FC<RequisitionFormProps> = ({
  setCurrentStep,
  productAmt,
  saletype,
  setIsStepTwoOpen,
}) => {
  const [state, dispatch] = useReducer(VerifyTrackResaleReducer, initialState);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { productDetails, setSwitchToSummary } = useContext(VerifyTrackContext);

  const [isOpen, setIsOpen] = useState(false);

  const parts = productAmt.split(",");

  console.log("SaleType 123: ", saletype);
  //console.log("productAmt : ", productAmt);
  console.log("Saletype : ", parts[0]);
  console.log("Amount : ", parts[1]);
  console.log("Store", parts[2], ",", parts[3]);

  const User = getUser();
  const token = getToken() ?? "";
  const contactNo = useContactNo(token);

  useEffect(() => {
    console.log(saletype);
    // Ensure invval is updated when productAmt changes
    if (parts[1] && parts[1] !== state.invval && contactNo && User) {
      const invval = parts[1]; // Get first part of productAmt (or use another part based on your logic)
      dispatch({ type: "invval", payload: invval });
      dispatch({ type: "phname", payload: User ?? "" });
      dispatch({ type: "phcontactno", payload: contactNo ?? "" });
    }
  }, [parts[1], contactNo, User]);

  const onChangeHandlerCreator = (fieldname: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: fieldname,
        payload: (e.target as HTMLInputElement).value,
      });
    };
  };

  if (!productDetails) return null;

  const handleSave = () => {
    console.log("Exchange 1");
    const validationErrors: { [key: string]: string } = {};
    errorKeys.forEach(({ key, errorText }) => {
      if (!get(state, key)) {
        validationErrors[key] = errorText;
      }
    });
    console.log("Exchange 2");
    console.log("validationErrors", validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Exchange 3");
    const payload: VerifyTrackResaleForm = {
      ...state,
      etype: saletype,
      product_category: productDetails.category,
      phname: state.phname,
      phemail: state.phemail,
      phcontactno: state.phcontactno,
      phaddress: state.phaddress,
      phcity: state.phcity,
      phpincode: state.phpincode,
      phdob: "", //new Date(state.phdob || Date.now()).toISOString(),
      uid: productDetails.uid, //state.uid, //
      invno: state.invno,
      invdate: "", //new Date(state.invdate || Date.now()).toISOString(),
      invval: state.invval,
      userid: state.userid,
      //issamestore: true,

      issamestore: parts[0] === "exchange_at_purchased_store" ? true : false,
      newval: parseFloat(parts[1]),
      jewelname:
        parts[0] !== "exchange_at_purchased_store"
          ? [parts[2], parts[3]].filter(Boolean).join(", ")
          : productDetails.purchase_from,
      currentval: productDetails.current_price.toString(),

      solitairval: productDetails.exchange_solitaire_price,
      mountval: productDetails.exchange_mount_price,
      charges:
        parts[0] === "exchange_at_purchased_store"
          ? 0
          : productDetails.exchange_processing_charges,

      //saletype === "upgrade"
      //  ? parseInt(parts.toString())
      // : parseInt(parts[1]),
    };
    console.log(payload);
    createVerifyTrackResale(payload)
      .then((res) => {
        console.log("It is successfully created", res);
        //setCurrentStep(RESALE_STEPS.THREE);
        setIsOpen(true); // Open modal on success
      })
      .catch((err) => console.log("Error", err));
  };

  const handleCancel = () => {
    if (saletype === SaleType.EXCHANGE_REQUEST) {
      setIsStepTwoOpen && setIsStepTwoOpen(false);
      setSwitchToSummary(true);
    } else {
      const nextStep = RESALE_STEPS.ONE; // Default to Step ONE
      setCurrentStep(nextStep);
    }
  };

  return (
    <div className="p-3 bg-white">
      <div className="w-full">
        <div>
          <div className="mt-2.5 font-montserrat not-italic font-medium text-xl leading-6 text-gold">
            Customer Information
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <InputText
              label="Customer Name"
              type="text"
              value={state.phname}
              placeholder="Name....."
              onChange={onChangeHandlerCreator("phname")}
              className="w-full"
              containerClass="!mb-0"
            />
            <InputText
              label="Mobile Number"
              type="number"
              placeholder="Mobile No......."
              value={state.phcontactno}
              onChange={onChangeHandlerCreator("phcontactno")}
              className="w-full"
              containerClass="!mb-0"
            />

            {saletype === SaleType.EXCHANGE_REQUEST && (
              <InputText
                label="Email"
                type="email"
                placeholder="Email"
                value={state.phemail}
                onChange={onChangeHandlerCreator("phemail")}
                className="w-full"
                containerClass="!mb-0"
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="mt-2.5 font-montserrat not-italic font-medium text-xl leading-6 text-gold">
          Product Exchange Summary
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <InputText
            label="Uid *"
            type="text"
            placeholder="Invoice Number ....."
            value={`${productDetails.uid}`}
            className="w-full"
            containerClass="!mb-0"
            readOnly
          />

          <InputText
            label="Product Category"
            type="text"
            //placeholder="Invoice Number ....."
            value={`${productDetails.category}`}
            className="w-full"
            containerClass="!mb-0"
            readOnly
          />
          {saletype !== SaleType.EXCHANGE_REQUEST && (
            <>
              <InputText
                label="Exchange Value"
                type="text"
                placeholder="Invoice Value ....."
                value={parts[1]}
                onChange={onChangeHandlerCreator("invval")}
                className={`w-full ${errors.invval ? "border-red-500" : ""}`}
                errorText={errors.invval}
                containerClass="!mb-0"
              />
              <InputText
                label="Exchange at Purchase Store"
                type="text"
                placeholder="Purchase Store"
                value={`${productDetails.purchase_from}`}
                className="w-full"
                containerClass="!mb-0"
                readOnly
              />
            </>
          )}
          {parts[0] !== "exchange_at_purchased_store" && (
            <InputText
              label="Exchange at Other Store"
              type="text"
              placeholder="Exchange Store"
              value={`${parts[2]}, ${parts[3]}`}
              className="w-full"
              containerClass="!mb-0"
              readOnly
            />
          )}
        </div>
        <div className="flex mt-2.5"></div>
      </div>
      <div
        className={`flex justify-between gap-1 ${
          saletype === SaleType.EXCHANGE_REQUEST ? "mt-2.5" : " mt-14"
        }`}
      >
        <Button
          themeType="light"
          classes="w-6/12 text-base leading-5 font-medium"
          onClick={handleCancel}
        >
          CANCEL
        </Button>
        <Button
          themeType="dark"
          classes="w-6/12 text-base leading-5 font-medium"
          onClick={handleSave}
        >
          SUBMIT
        </Button>
      </div>
      {/* Success Modal */}
      {isOpen && (
        <MessageModal
          isOpen={isOpen}
          onClose={handleCancel}
          headmsg="Successfully Submitted"
          // bodymsg1="Our CRM team will reach out to you during"
          // bodymsg2="working days. Thank you for your patience."
          bodymsg1={
            saletype === SaleType.EXCHANGE_REQUEST
              ? "Customer service team will revert to"
              : "Our CRM team will reach out to you during"
          }
          bodymsg2={
            saletype === SaleType.EXCHANGE_REQUEST
              ? "to you within 24 hours."
              : "working days. Thank you for your patience."
          }
        />
      )}
    </div>
  );
};

export default RequisitionForm;
export { type RequisitionFormProps };
