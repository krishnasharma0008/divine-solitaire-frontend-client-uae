//import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useReducer, useRef, useState } from "react";

import { registerUser, termsConditionEndpoint } from "@/api";
import { XIcon } from "@/components";
import { Button } from "@/components/common";
import Checkbox from "@/components/common/checkbox";
import InputText from "@/components/common/input-text";
import { NOTIFICATION_MESSAGES } from "@/config";
import LoaderContext from "@/context/loader-context";
import NotificationContext from "@/context/notification-context";
import { USER_GENDER } from "@/enum";
//import useContactNo from "@/hooks/use-contactno";
import { ProfileForm } from "@/interface";
import { getRedirectionRoute, getMobileNumber } from "@/local-storage";

interface RegistrationFormAction {
  type: string;
  payload?: string | ProfileForm | File;
}

const initialState: ProfileForm = {
  vsource: "Website",
  fname: "",
  email: "",
  contactno: "",
  address: "",
  pincode: "",
  dob: "",
  city: "",
  state: "",
  gender: USER_GENDER.MALE,
  //tncdat: "",
  doanniv: "",
};

const RegistrationFormReducer = (
  state: ProfileForm,
  action: RegistrationFormAction
) => {
  if (action.type === "ALL") {
    return {
      ...state,
      ...(action.payload as unknown as ProfileForm),
    };
  }

  return { ...state, [action.type]: action.payload };
};

const RegistrationFormScreen: React.FC = () => {
  const [state, dispatch] = useReducer(RegistrationFormReducer, initialState);
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const { notify } = useContext(NotificationContext);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [tnc, setTnc] = useState<boolean>(false);
  const [mobileNumber, setMobileNumber] = useState<string>("");
  // for terms and condition popup
  const [termsContent, setTermsContent] = useState("");
  const termsDialogRef = useRef<HTMLDialogElement>(null);

  const { push } = useRouter();

  const onChangeHandlerCreator = (
    fieldname: string,
    type?: "integer" | "text"
  ) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      if (type === "integer" && isNaN(parseInt(e.target.value))) {
        dispatch({
          type: "ALL",
          payload: state,
        });
        return;
      }
      dispatch({
        type: fieldname,
        payload: (e.target as HTMLInputElement).value,
      });
    };
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = (e.target as HTMLInputElement).checked;
    setTnc(isChecked);
  };

  const onClickHandler = async () => {
    showLoader();

    const validationErrors: { [key: string]: string } = {};

    if (!state.fname) {
      validationErrors.fname = "Name is required";
    }

    // Ensure at least one of email or contact number is provided
    if (!state.contactno && !state.email) {
      validationErrors.contactno = "Mobile number or Email is required";
      validationErrors.email = "Mobile number or Email is required";
    } else {
      if (state.contactno && !/^\d{10}$/.test(state.contactno)) {
        validationErrors.contactno = "Invalid mobile number";
      }
      if (state.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
        validationErrors.email = "Invalid email";
      }
    }

    // if (!state.address) {
    //   validationErrors.address = "Address is required";
    // }

    // if (!state.dob) {
    //   validationErrors.dob = "Date of Birth is required";
    // }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      hideLoader();
      return;
    }

    const payload: ProfileForm = {
      ...state,
      contactno: mobileNumber,
      //pincode:
      dob: new Date(state.dob || Date.now()).toISOString(),
      //tncdat: tnc ? new Date(Date.now()).toISOString() : null,
      doanniv: new Date(state.doanniv || Date.now()).toISOString(),
    };

    registerUser(payload)
      .then(() => {
        hideLoader();
        console.log("It is successfully created");
        notify(NOTIFICATION_MESSAGES.REGISTERATION_COMPLETE);
        //push(getRedirectionRoute() || "/");
        push({ pathname: "/login/verify" });
      })
      .catch((err) => console.log("Error", err));
  };

  useEffect(() => {
    const storedValue = getMobileNumber(); // Get stored value from local storage

    if (!storedValue) return;

    setMobileNumber(storedValue);

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(storedValue)) {
      dispatch({
        type: "email",
        payload: storedValue, // ✅ Corrected: Assign email properly
      });
    } else if (/^\d{10}$/.test(storedValue)) {
      dispatch({
        type: "contactno",
        payload: storedValue, // ✅ Corrected: Assign mobile properly
      });
    }
  }, []);

  const changeGender = (gender: string) => {
    dispatch({
      type: "gender",
      payload: gender,
    });
  };

  const onCancelHandler = () => {
    push(getRedirectionRoute() || "/");
  };

  const fetchTerms = async () => {
    try {
      const response = await axios.get(termsConditionEndpoint.url);
      setTermsContent(response.data);
      termsDialogRef.current?.showModal(); // Open modal
    } catch (error) {
      console.error("Error fetching Terms & Conditions", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-8 mt-12">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap mb-6">
            <span className="w-full text-main text-4xl font-montserrat font-medium text-center">
              Registration Form
            </span>
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-full px-3">
              <InputText
                label="Full Name *"
                type="text"
                value={state.fname}
                onChange={onChangeHandlerCreator("fname")}
                className={`w-full ${errors.fname ? "border-red-500" : ""}`}
                errorText={errors.fname}
                placeholder="Enter your full name"
                containerClass="w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-full px-3">
              <InputText
                label="Mobile No*"
                type="number"
                value={state.contactno}
                onChange={onChangeHandlerCreator("contactno")}
                className={`w-full ${errors.contactno ? "border-red-500" : ""}`}
                placeholder="Enter your mobile number"
                errorText={errors.contactno}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-full justify-between px-3">
              <InputText
                label="E-Mail Address"
                type="email"
                value={state.email}
                onChange={onChangeHandlerCreator("email")}
                className={`w-full ${errors.email ? "border-red-500" : ""}`}
                placeholder="Enter your email"
                errorText={errors.email}
              />
            </div>
          </div>
          <div className="flex fles-wrap mb-3 mr-2">
            <div className=" px-3">
              <label>Gender</label>
            </div>
          </div>
          <div className="flex fles-wrap mb-3">
            <div className="flex gap-2 justify-around px-3">
              {Object.values(USER_GENDER).map((gender) => (
                <button
                  key={gender}
                  type="button"
                  onClick={() => changeGender(gender)}
                  className={`py-2 px-4 rounded-md ${
                    state.gender === gender
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  } ${errors.gender ? "border border-red-500" : ""}`}
                >
                  {gender}
                </button>
              ))}
            </div>
            {errors.gender && (
              <span className="text-red-500 text-xs mt-1">{errors.gender}</span>
            )}
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-full px-3">
              <InputText
                label="Date of Birth"
                type="date"
                value={state.dob}
                onChange={onChangeHandlerCreator("dob")}
                className={`w-full ${errors.dob ? "border-red-500" : ""}`}
                errorText={errors.dob}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-full px-3">
              <InputText
                label="Date of Anniversary "
                type="date"
                value={state.doanniv}
                onChange={onChangeHandlerCreator("doanniv")}
                className={`w-full ${errors.doanniv ? "border-red-500" : ""}`}
                errorText={errors.doanniv}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-full px-3">
              <InputText
                label="Pin code"
                type="text"
                value={state.pincode}
                onChange={onChangeHandlerCreator("pincode")}
                className={`w-full ${errors.pincode ? "border-red-500" : ""}`}
                placeholder="Enter your Pin code"
                errorText={errors.pincode}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-full px-3">
              <InputText
                label="Address"
                type="text"
                value={state.address}
                onChange={onChangeHandlerCreator("address")}
                className={`w-full ${errors.address ? "border-red-500" : ""}`}
                errorText={errors.address}
                placeholder="Enter your address details"
                containerClass="w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-full px-3">
              <InputText
                label="City"
                type="text"
                value={state.city}
                onChange={onChangeHandlerCreator("city")}
                className={`w-full ${errors.phcity ? "border-red-500" : ""}`}
                placeholder="Enter your city"
                errorText={errors.city}
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-3">
            <div className="flex items-center px-3 whitespace-nowrap">
              <Checkbox
                id="remember_me"
                onChange={handleCheckboxChange}
                className="text-base leading-5 [&>input]:w-4"
                checked={tnc}
              >
                Accept&nbsp;
              </Checkbox>
              <button
                type="button"
                onClick={fetchTerms}
                className="text-black underline"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-center mb-3 mt-6 px-3">
            <Button
              themeType="light"
              classes="w-6/12 text-base leading-5 font-medium"
              onClick={onCancelHandler}
            >
              CANCEL
            </Button>
            <Button
              themeType="dark"
              classes="w-full md:w-1/2  text-base leading-5 font-medium"
              onClick={onClickHandler}
              disabled={!tnc}
            >
              SAVE
            </Button>
          </div>
        </form>
        {/*  */}
      </div>
      <div className="w-full h-[396px] flex-shrink-0 bg-profilebgimg mt-6"></div>
      {/* Native Modal */}
      <dialog
        ref={termsDialogRef}
        className="p-2 rounded-lg max-w-[59rem] w-full backdrop:bg-black/50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg"
      >
        {/* Close Button (X) at Top-Right */}
        <button
          onClick={() => termsDialogRef.current?.close()}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <XIcon />
        </button>

        {/* Terms Title */}
        <h2 className="text-xl font-semibold mb-4 text-center">
          Terms & Conditions
        </h2>

        {/* Content Scrollable */}
        <div className="max-h-[90vh] md:max-h-96 overflow-auto px-2">
          <p dangerouslySetInnerHTML={{ __html: termsContent }}></p>
        </div>

        {/* Close Button */}
        {/* <div className="flex justify-center mt-4">
          <button
            onClick={() => termsDialogRef.current?.close()}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div> */}
      </dialog>
    </>
  );
};

export default RegistrationFormScreen;
