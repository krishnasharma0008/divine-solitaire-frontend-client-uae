import { useContext, useEffect, useReducer, useState } from "react";

import { createVerifyTrackInsurance } from "@/api/verify-track-insurance";
import {
  InsuranceIcon,
  Button,
  InputFile,
  XMarkIcon,
  AlramIcon,
} from "@/components";
import InputText from "@/components/common/input-text";
import { VerifyTrackInsuranceForm } from "@/interface";

import { VerifyTrackContext } from "../../../../context/verify-track-context";
import { STEPS } from "../verify-track-loan/verify-track-loan-steps-enum";

interface VerifyTrackInsurancePiProps {
  setCurrentStep: (currentStep: number) => void;
}

interface VerifyTrackInsuranceFormAction {
  type: string;
  payload?: string | VerifyTrackInsuranceForm | File;
}

const initialState: VerifyTrackInsuranceForm = {
  userid: 0,
  phname: "",
  phemail: "",
  phcontactno: "",
  phaddress: "",
  phcity: "",
  phpincode: "",
  phdob: "",
  phanniv: "",
  phpan: "",
  uid: "",
  purstore: "",
  invno: "",
  invdate: "",
  invval: "",
  panfile: "",
  imgurl: "",
};

const VerifyTrackInsuranceFormReducer = (
  state: VerifyTrackInsuranceForm,
  action: VerifyTrackInsuranceFormAction
) => {
  if (action.type === "ALL") {
    return {
      ...state,
      ...(action.payload as unknown as VerifyTrackInsuranceForm),
    };
  }
  return { ...state, [action.type]: action.payload };
};

const VerifyTrackInsurancePi: React.FC<VerifyTrackInsurancePiProps> = ({
  setCurrentStep,
}) => {
  const [state, dispatch] = useReducer(
    VerifyTrackInsuranceFormReducer,
    initialState
  );

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog visibility
  const [isRDialogOpen, setIsRDialogOpen] = useState(false); //reminder Dialog

  const { productDetails, setInsuranceReceiptNumber } =
    useContext(VerifyTrackContext);

  useEffect(() => {
    handleDialogOpen();
  }, []);

  if (!productDetails) return null;

  const onChangeHandlerCreator = (fieldname: string) => {
    if (["invfile"].includes(fieldname)) {
      return (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch({
          type: fieldname,
          payload: (e.target as HTMLInputElement)?.files?.[0],
        });
    }

    // Handle pin code input
    if (["phpincode"].includes(fieldname)) {
      return (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Check for negative value
        if (parseFloat(value) < 0) {
          alert("Pin Code cannot be negative.");
          return; // Prevent setting negative value
        }

        // Dispatch the valid value
        dispatch({
          type: fieldname,
          payload: value,
        });
      };
    }

    return (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: fieldname,
        payload: (e.target as HTMLInputElement).value,
      });
    };
  };

  const handleClick = () => {
    handleRDialogOpen();
  };

  const submitFormData = async () => {
    const validationErrors: { [key: string]: string } = {};

    if (!state.phname) {
      validationErrors.phname = "Name is required";
    }

    if (!state.phemail) {
      validationErrors.phemail = "Email is ";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(state.phemail)
    ) {
      validationErrors.phemail = "Invalid email";
    }

    if (!state.phcontactno) {
      validationErrors.phcontactno = "Mobile number is required";
    }

    if (!state.phaddress) {
      validationErrors.phaddress = "Address is required";
    }

    if (!state.phpincode) {
      validationErrors.phpincode = "Pin code is required";
    }

    if (!state.phdob) {
      validationErrors.phdob = "Date of Birth is required";
    }

    if (!state.purstore) {
      validationErrors.purstore = "Jeweller name is required";
    }

    if (!state.phcity) {
      validationErrors.phcity = "City is required";
    }

    if (!state.invno) {
      validationErrors.invno = "Invoice number is required";
    }

    if (!state.invval) {
      validationErrors.invval = "Invoice value is required";
    }

    if (!state.invdate) {
      validationErrors.invdate = "Invoice date is required";
    }

    // if (!state.purstore) {
    //   validationErrors.purstore = "Jeweller Name is required";
    // }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload: VerifyTrackInsuranceForm = {
      ...state,
      phname: state.phname,
      phemail: state.phemail,
      phcontactno: state.phcontactno,
      phaddress: state.phaddress,
      phpincode: state.phpincode,
      phdob: new Date(state.phdob || Date.now()).toISOString(),
      //phanniv: new Date(state.phanniv || Date.now()).toISOString(),
      phpan: state.phpan,
      uid: productDetails.uid,
      purstore: state.purstore,
      invno: state.invno,
      invdate: new Date(state.invdate || Date.now()).toISOString(),
      invval: state.invval,
    };

    //console.log(payload);
    createVerifyTrackInsurance(payload)
      .then((res) => {
        console.log("It is successfully created", res);
        setInsuranceReceiptNumber(res.data.requestno);
        setCurrentStep(STEPS.THREE);
      })
      .catch((err) => console.log("Error", err));
  };

  const handleDialogCloseAndSubmit = () => {
    setIsRDialogOpen(false);
    submitFormData(); // Submit the form after dialog is closed
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true); // Open dialog
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false); // Close dialog
  };

  const handleRDialogOpen = () => {
    setIsRDialogOpen(true); // Open dialog
  };

  const handleRDialogClose = () => {
    setIsRDialogOpen(false); // Close dialog
  };

  return (
    <div>
      <div className="w-full">
        <div>
          <div className="text-white bg-Chinese-Black-sidebar p-2.5">{`UID : ${productDetails.uid}`}</div>
          <div className="bg-Chinese-Black-sidebar flex justify-center items-center text-center [&>svg]:w-30 [&>svg]:h-38">
            <InsuranceIcon className="" />
          </div>
          <div className="text-white bg-Chinese-Black-sidebar p-2.5"></div>
        </div>
        <div className="mt-10 px-3">
          <div className="mt-2.5 font-montserrat not-italic font-medium text-xl leading-6 text-gray-900">
            Personal Information
          </div>
          <div className="flex mt-2.5 gap-4 flex-col">
            <InputText
              label="Name *"
              type="text"
              value={state.phname}
              onChange={onChangeHandlerCreator("phname")}
              className={`w-full ${errors.phname ? "" : "border-red-500"}`}
              errorText={errors.phname}
              containerClass="!mb-0"
            />
            <InputText
              label="E-Mail Id *"
              type="email"
              value={state.phemail}
              onChange={onChangeHandlerCreator("phemail")}
              className={`w-full ${errors.phemail ? "border-red-500" : ""}`}
              containerClass="!mb-0"
              errorText={errors.phemail}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="somemail@gmail.com"
            />

            <InputText
              label="Mobile No. *"
              type="number"
              value={state.phcontactno}
              onChange={onChangeHandlerCreator("phcontactno")}
              className={`w-full ${errors.phcontactno ? "border-red-500" : ""}`}
              containerClass="!mb-0"
              errorText={errors.phcontactno}
            />
            <InputText
              label="Address *"
              type="text"
              value={state.phaddress}
              onChange={onChangeHandlerCreator("phaddress")}
              className={`w-full ${errors.phaddress ? "border-red-500" : ""}`}
              containerClass="!mb-0"
              errorText={errors.phaddress}
            />

            <InputText
              label="City *"
              type="text"
              value={state.phcity}
              onChange={onChangeHandlerCreator("phcity")}
              className={`w-full ${errors.phcity ? "border-red-500" : ""}`}
              containerClass="!mb-0"
              errorText={errors.phcity}
            />

            <InputText
              label="Pin Code *"
              type="number"
              value={state.phpincode}
              onChange={onChangeHandlerCreator("phpincode")}
              className={`w-full ${errors.phpincode ? "border-red-500" : ""}`}
              containerClass="!mb-0"
              errorText={errors.phpincode}
              onKeyDown={(e) => {
                // Prevent the default action for arrow keys to avoid scrolling
                if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                  e.preventDefault();
                }
              }}
              min={0}
            />

            <InputText
              label="Date of Birth *"
              type="date"
              value={state.phdob}
              onChange={onChangeHandlerCreator("phdob")}
              className={`w-full ${errors.phdob ? "border-red-500" : ""}`}
              containerClass="!mb-0"
              errorText={errors.phdob}
            />

            {/* <InputText
              label="Anniversary Date*"
              type="date"
              value={state.phanniv}
              onChange={onChangeHandlerCreator("phanniv")}
              className={`w-full ${errors.phanniv ? "border-red-500" : ""}`}
              containerClass="!mb-0"
              errorText={state.phanniv}
            />

            <InputText
              label="Pan Number *"
              type="text"
              value={state.phpan}
              onChange={onChangeHandlerCreator("phpan")}
              className={`w-full ${errors.phpan ? "border-red-500" : ""}`}
              containerClass="!mb-0"
              errorText={errors.phpan}
            /> */}
          </div>
        </div>
      </div>
      <div className="mt-10 px-3">
        <div className="mt-2.5 font-montserrat not-italic font-medium text-xl leading-6 text-gray-900">
          Product Information
        </div>
        <div className="flex flex-col gap-4 mt-2.5">
          <InputText
            label="UID *"
            type="text"
            value={productDetails.uid}
            onChange={onChangeHandlerCreator("uid")}
            className={`w-full ${errors.uid ? "border-red-500" : ""}`}
            containerClass="!mb-0"
            errorText={errors.uid}
          />
          <InputText
            label="Jeweller Name *"
            type="text"
            value={productDetails.purchase_from || state.purstore}
            onChange={onChangeHandlerCreator("purstore")}
            className={`w-full ${errors.purstore ? "border-red-500" : ""}`}
            containerClass="!mb-0"
            errorText={errors.purstore}
          />
          <InputText
            label="Invoice Number *"
            type="text"
            value={state.invno}
            onChange={onChangeHandlerCreator("invno")}
            className={`w-full ${errors.invno ? "border-red-500" : ""}`}
            containerClass="!mb-0"
            errorText={errors.invno}
          />

          <InputText
            label="Invoice Date *"
            type="date"
            value={state.invdate}
            onChange={onChangeHandlerCreator("invdate")}
            className={`w-full ${errors.invdate ? "border-red-500" : ""}`}
            errorText={errors.invdate}
            containerClass="!mb-0"
          />

          <InputText
            label="Invoice Value *"
            type="text"
            value={state.invval}
            onChange={onChangeHandlerCreator("invval")}
            className={`w-full ${errors.invval ? "border-red-500" : ""}`}
            errorText={errors.invval}
            containerClass="!mb-0"
          />

          <div className="mt-2.5 justify-between">
            <InputFile
              label=""
              onChange={onChangeHandlerCreator("invfile")}
              value={state.panfile}
              placeholder="Upload Document"
            />
          </div>
        </div>
        <div className="flex mt-2.5"></div>
      </div>
      <div className="flex justify-between gap-1 mt-14 px-3">
        <Button
          themeType="light"
          classes="w-6/12 text-base leading-5 font-medium"
        >
          CANCEL
        </Button>
        <Button
          themeType="dark"
          classes="w-6/12 text-base leading-5 font-medium"
          onClick={handleClick}
        >
          SUBMIT
        </Button>
      </div>

      {/* Dialog Structure */}
      {isDialogOpen && (
        <div className="pointer-events-auto fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60">
          <div className="relative max-w-[311px]  lg:max-w-[40%] sm:max-w-[90%] rounded-3xl bg-white shadow-sm">
            <div className="flex shrink-0 rounded-t-3xl bg-[#F4F4F4] font-[Montserrat] font-bold text-base justify-center align-middle items-center py-4 text-[#000000]">
              Heads Up!
              <XMarkIcon
                className="h-5 w-5 absolute top-4 right-4"
                onClick={handleDialogClose}
              />
            </div>

            <div className="w-full relative border-t border-slate-200 p-4 ">
              <div className="flex justify-center items-center font-[Montserrat] text-sm leading-6">
                <p className="font-medium">Apply Insurance within&nbsp;</p>
                <p className="font-semibold">7 days&nbsp;</p>
                <p className="font-medium">from the</p>
              </div>
              <p className="flex justify-center items-center font-[Montserrat] text-sm leading-6 font-medium">
                invoice date to stay covered
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center pb-4 justify-center">
              <div className="w-24 ">
                <Button
                  onClick={handleDialogClose} // Close dialog on Cancel button
                  className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100"
                  themeType="dark"
                >
                  OKAY
                </Button>
              </div>
              {/* <button
                onClick={handleDialogClose} // Close dialog on Confirm button
                className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg"
                type="button"
              >
                Confirm
              </button> */}
            </div>
          </div>
        </div>
      )}

      {/* Reminder Dialog Structure */}
      {isRDialogOpen && (
        <div className="pointer-events-auto fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60">
          <div className="relative max-w-[311px]  lg:max-w-[40%] sm:max-w-[90%] rounded-3xl bg-white shadow-sm">
            <div className="flex shrink-0 rounded-t-3xl bg-[#F4F4F4] font-[Montserrat] font-bold text-base justify-center align-middle items-center py-4 text-[#000000]">
              <AlramIcon className="h-5 w-5" />
              Reminder:
            </div>

            <div className="w-full relative border-t border-slate-200 p-4 ">
              <div className="flex justify-center items-center font-[Montserrat] text-sm leading-6">
                <p className="font-medium">Verify your&nbsp;</p>
                <p className="font-semibold">Invoice Number, Date,&nbsp;</p>
                <p className="font-medium">and</p>
              </div>
              <div className="flex justify-center items-center font-[Montserrat] text-sm leading-6">
                <p className="font-semibold">Amount. &nbsp;</p>
                <p className="font-medium">Please verify all information</p>
              </div>
              <p className="flex justify-center items-center font-[Montserrat] text-sm leading-6 font-medium">
                before proceeding.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center pb-4 justify-center">
              <div className="flex flex-row w-52 gap-2 ">
                <Button
                  onClick={handleRDialogClose} // Close dialog on Confirm button
                  className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg"
                  themeType="light"
                >
                  Edit
                </Button>
                <Button
                  onClick={handleDialogCloseAndSubmit} // Close dialog on Cancel button
                  className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100"
                  themeType="dark"
                >
                  OKAY
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyTrackInsurancePi;
