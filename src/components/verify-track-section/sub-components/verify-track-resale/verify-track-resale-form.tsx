import get from "lodash/get";
import { useContext, useReducer, useState } from "react";

import { createVerifyTrackResale } from "@/api/verify-track-resale";
import { Button, InputFile } from "@/components/common";
import InputText from "@/components/common/input-text";
import { VerifyTrackContext } from "@/context/verify-track-context";
import { SaleType } from "@/enum/sale-type-enum";
import { VerifyTrackResaleForm } from "@/interface";

import { RESALE_STEPS } from "./verify-track-resale-steps-enum";

interface VerifyTrackResaleFormProps {
  children?: React.ReactNode;
  setCurrentStep: (currentStep: RESALE_STEPS) => void;
  productAmt: string;
  saletype: SaleType;
}

interface VerifyTrackResaleFormAction {
  type: string;
  payload?: string | VerifyTrackResaleForm | File;
}

const errorKeys: Array<{
  key: string;
  errorText: string;
}> = [
  { key: "phdob", errorText: "Date of Birth is required" },
  { key: "invno", errorText: "Invoice number is required" },
  {
    key: "invval",
    errorText: "Invoice value is required",
  },
  {
    key: "invdate",
    errorText: "Invoice date is required",
  },
];

const initialState: VerifyTrackResaleForm = {
  etype: SaleType.UPGRADE, //"upgrade" | "buyback",
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
  issamestore: true, //true|false,
  currentval: "", //0
  newval: 0, //0
  docfile: "", //null
};

const VerifyTrackResaleReducer = (
  state: VerifyTrackResaleForm,
  action: VerifyTrackResaleFormAction
) => {
  if (action.type === "ALL") {
    return {
      ...state,
      ...(action.payload as unknown as VerifyTrackResaleForm),
    };
  }
  return { ...state, [action.type]: action.payload };
};

const VerifyTrackResaleForm: React.FC<VerifyTrackResaleFormProps> = ({
  setCurrentStep,
  productAmt,
  saletype,
}) => {
  const [state, dispatch] = useReducer(VerifyTrackResaleReducer, initialState);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { productDetails } = useContext(VerifyTrackContext);

  if (!productDetails) return null;

  const onChangeHandlerCreator = (fieldname: string) => {
    if (["docfile"].includes(fieldname)) {
      return (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({
          type: fieldname,
          payload: (e.target as HTMLInputElement)?.files?.[0],
        });
    }

    return (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: fieldname,
        payload: (e.target as HTMLInputElement).value,
      });
    };
  };

  const handleSave = () => {
    const parts = saletype === "upgrade" ? productAmt : productAmt.split(",");

    const validationErrors: { [key: string]: string } = {};
    errorKeys.forEach(({ key, errorText }) => {
      if (!get(state, key)) {
        validationErrors[key] = errorText;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const payload: VerifyTrackResaleForm = {
      ...state,
      etype: saletype,
      phname: state.phname,
      phemail: state.phemail,
      phcontactno: state.phcontactno,
      phaddress: state.phaddress,
      phcity: state.phcity,
      phpincode: state.phpincode,
      phdob: new Date(state.phdob || Date.now()).toISOString(),
      uid: productDetails.uid, //state.uid, //
      invno: state.invno,
      invdate: new Date(state.invdate || Date.now()).toISOString(),
      invval: state.invval,
      userid: state.userid,
      //issamestore: true,

      issamestore: saletype === "upgrade" && parts[0] === "buyback_same_store",
      newval:
        saletype === "upgrade"
          ? parseInt(parts.toString())
          : parseInt(parts[1]),
    };
    console.log(payload);
    createVerifyTrackResale(payload)
      .then((res) => {
        console.log("It is successfully created", res);
        setCurrentStep(RESALE_STEPS.THREE);
      })
      .catch((err) => console.log("Error", err));
  };

  return (
    <div className="p-3">
      <div className="w-full">
        <div>
          <div className="mt-2.5 font-montserrat not-italic font-medium text-xl leading-6 text-gray-900">
            Personal Information
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <InputText
              label="Name"
              type="text"
              value={state.phname}
              placeholder="Name....."
              onChange={onChangeHandlerCreator("phname")}
              className="w-full"
              containerClass="!mb-0"
            />
            <InputText
              label="E-Mail Id"
              type="email"
              placeholder="E-Mail Id....."
              value={state.phemail}
              onChange={onChangeHandlerCreator("phemail")}
              className="w-full"
              containerClass="!mb-0"
            />

            <InputText
              label="Mobile No."
              type="number"
              placeholder="Mobile No......."
              value={state.phcontactno}
              onChange={onChangeHandlerCreator("phcontactno")}
              className="w-full"
              containerClass="!mb-0"
            />
            <InputText
              label="Address"
              type="text"
              placeholder="Address ....."
              value={state.phaddress}
              onChange={onChangeHandlerCreator("phaddress")}
              className="w-full"
              containerClass="!mb-0"
            />
            <InputText
              label="City"
              type="text"
              placeholder="City ....."
              value={state.phcity}
              onChange={onChangeHandlerCreator("phcity")}
              className="w-full"
              containerClass="!mb-0"
            />
            <InputText
              label="Pin Code"
              type="number"
              placeholder="Pin Code ....."
              value={state.phpincode}
              onChange={onChangeHandlerCreator("phpincode")}
              className="w-full"
              containerClass="!mb-0"
            />

            <InputText
              label="Date of Birth *"
              type="date"
              placeholder="Date of Birth ....."
              value={state.phdob}
              onChange={onChangeHandlerCreator("phdob")}
              className={`w-full ${errors.phdob ? "border-red-500" : ""}`}
              errorText={errors.phdob}
              containerClass="!mb-0"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="mt-2.5 font-montserrat not-italic font-medium text-xl leading-6 text-gray-900">
          Product Information
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
            label="Invoice Number *"
            type="text"
            placeholder="Invoice Number ....."
            value={state.invno}
            onChange={onChangeHandlerCreator("invno")}
            className={`w-full ${errors.invno ? "border-red-500" : ""}`}
            errorText={errors.invno}
            containerClass="!mb-0"
          />

          <InputText
            label="Invoice Date *"
            type="date"
            placeholder="Invoice Date ....."
            value={state.invdate}
            onChange={onChangeHandlerCreator("invdate")}
            className={`w-full ${errors.invdate ? "border-red-500" : ""}`}
            errorText={errors.invdate}
            containerClass="!mb-0"
          />

          <InputText
            label="Invoice Amount *"
            type="text"
            placeholder="Invoice Value ....."
            value={state.invval}
            onChange={onChangeHandlerCreator("invval")}
            className={`w-full ${errors.invval ? "border-red-500" : ""}`}
            errorText={errors.invval}
            containerClass="!mb-0"
          />

          <div className="mt-2.5 justify-between">
            <InputFile
              label=""
              onChange={onChangeHandlerCreator("docfile")}
              value={state.docfile}
              placeholder="Upload Documents"
            />
          </div>
        </div>
        <div className="flex mt-2.5"></div>
      </div>
      <div className="flex justify-between gap-1 mt-14">
        <Button
          themeType="light"
          classes="w-6/12 text-base leading-5 font-medium"
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
    </div>
  );
};

export default VerifyTrackResaleForm;
export { type VerifyTrackResaleFormProps };
