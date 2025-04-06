/* eslint-disable react-hooks/rules-of-hooks */
"use client";
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

//import { STEPS } from "../verify-track-loan/verify-track-loan-steps-enum";

interface RequisitionFormProps {
  children?: React.ReactNode;
  //setCurrentStep: (step: STEPS) => void;
  setIsStepTwoOpen: (isOpen: boolean) => void; // Add this prop
}

interface RequisitionFormAction {
  type: string;
  payload?: string | VerifyTrackResaleForm | File;
}

const errorKeys: Array<{
  key: string;
  errorText: string;
}> = [
  // { key: "phdob", errorText: "Date of Birth is required" },
  // { key: "invno", errorText: "Invoice number is required" },
  // {
  //   key: "invval",
  //   errorText: "Upgrade value is required",
  // },
  // {
  //   key: "invdate",
  //   errorText: "Invoice date is required",
  // },
];

const initialState: VerifyTrackResaleForm = {
  etype: SaleType.UPGRADE,
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
  //setCurrentStep,
  setIsStepTwoOpen,
}) => {
  const [state, dispatch] = useReducer(VerifyTrackResaleReducer, initialState);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { productDetails } = useContext(VerifyTrackContext);
  const [isOpen, setIsOpen] = useState(false);
  const User = getUser();
  const token = getToken() ?? "";
  const contactNo = useContactNo(token);

  useEffect(() => {
    // Ensure invval is updated when productAmt changes
    console.log("Inside useEffect - contactno:", contactNo);
    if (contactNo && User) {
      dispatch({ type: "email", payload: "" });
      dispatch({ type: "phname", payload: User ?? "" });
      dispatch({ type: "phcontactno", payload: contactNo ?? "" });
    }
  }, [contactNo, User]);

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
    console.log("1");
    const validationErrors: { [key: string]: string } = {};
    errorKeys.forEach(({ key, errorText }) => {
      if (!get(state, key)) {
        validationErrors[key] = errorText;
      }
    });
    console.log("2");
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("3");
    const payload: VerifyTrackResaleForm = {
      ...state,
      etype: SaleType.TRACK_REQUEST,
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

      currentval: productDetails.current_price.toString(),
      //saletype === "upgrade"
      //  ? parseInt(parts.toString())
      // : parseInt(parts[1]),
    };
    console.log("submit Data", payload);
    createVerifyTrackResale(payload)
      .then((res) => {
        console.log("It is successfully created", res);
        //setCurrentStep(RESALE_STEPS.THREE);
        setIsOpen(true); // Open modal on success
      })
      .catch((err) => console.log("Error", err));
  };

  const handleCancel = () => {
    setIsStepTwoOpen(false);
    //setCurrentStep(STEPS.ONE);
  };

  return (
    <div className="p-3 bg-white">
      <div className="w-full">
        <div>
          <div className="mt-2.5 font-montserrat not-italic font-medium text-xl leading-6 text-[#000000]">
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
              errorText={errors.phname}
            />
            <InputText
              label="Mobile Number"
              type="number"
              placeholder="Mobile No......."
              value={state.phcontactno}
              onChange={onChangeHandlerCreator("phcontactno")}
              className="w-full"
              containerClass="!mb-0"
              errorText={errors.phcontactno}
            />

            <InputText
              label="Email"
              type="email"
              placeholder="Email......."
              value={state.phemail}
              onChange={onChangeHandlerCreator("phemail")}
              className="w-full"
              containerClass="!mb-0"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="mt-2.5 font-montserrat not-italic font-medium text-xl leading-6 text-[#000000]">
          Product Details
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
        </div>
        <div className="flex mt-2.5"></div>
      </div>
      <div className="flex justify-between gap-1 mt-14">
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
          bodymsg1="Customer service team will revert to "
          bodymsg2="you within 24hours."
        />
      )}
    </div>
  );
};

export default RequisitionForm;
export { type RequisitionFormProps };
