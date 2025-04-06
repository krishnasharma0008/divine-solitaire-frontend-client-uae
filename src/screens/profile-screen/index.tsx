import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useReducer, useState } from "react";

import { createProfile, getProfileDetail } from "@/api";
import { Button } from "@/components/common";
import Checkbox from "@/components/common/checkbox";
import InputText from "@/components/common/input-text";
import { NOTIFICATION_MESSAGES } from "@/config";
import NotificationContext from "@/context/notification-context";
import { ProfileForm } from "@/interface";
import { getToken } from "@/local-storage";

interface ProfileFormAction {
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
  gender: "",
  //tncdat: "",
  doanniv: "",
};

const ProfileFormReducer = (state: ProfileForm, action: ProfileFormAction) => {
  if (action.type === "ALL") {
    return {
      ...state,
      ...(action.payload as unknown as ProfileForm),
    };
  }

  return { ...state, [action.type]: action.payload };
};

const Profile: React.FC = () => {
  const [state, dispatch] = useReducer(ProfileFormReducer, initialState);
  const { notify } = useContext(NotificationContext);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [tnc, setTnc] = useState<boolean>(false);
  //const [userExists, setUserExists] = useState<boolean>(false);

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

  const onClickHandler = () => {
    const validationErrors: { [key: string]: string } = {};

    if (!state.fname) {
      validationErrors.fname = "Name is required";
    }

    if (!state.email) {
      validationErrors.email = "Email is required";
    } else if (!/.+@.+\..+/.test(state.email)) {
      validationErrors.email = "Invalid email";
    }

    if (!state.contactno) {
      validationErrors.contactno = "Mobile number is required";
    }

    if (!state.address) {
      validationErrors.address = "Address is required";
    }

    if (!state.pincode) {
      validationErrors.pincode = "Pin code is required";
    }

    if (!state.dob) {
      validationErrors.dob = "Date of Birth is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload: ProfileForm = {
      ...state,
      dob: new Date(state.dob || Date.now()).toISOString(),
      //tncdat: tnc ? new Date(Date.now()).toISOString() : null,
    };

    createProfile(payload)
      .then(() => {
        console.log("It is successfully created");
        notify(NOTIFICATION_MESSAGES.PROFILE_UPDATE_SUCESS);
        push("/");
      })
      .catch((err) => console.log("Error", err));
  };

  // useEffect(() => {
  //   setUserExists(!!getUser());
  // }, []);

  useEffect(() => {
    if (!getToken()) {
      push("/login");
    }
    getProfileDetail()
      .then((res) => {
        dispatch({
          type: "ALL",
          payload: { ...(res.data.data.userinfo as unknown as ProfileForm) },
        });
      })
      .catch((err) => {
        console.log("errr", err);
      });
  }, [dispatch, push]);

  return (
    <>
      <div className="flex items-center justify-center gap-8 mt-12">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap mb-6">
            {/* <span className="items-center text-main text-4xl font-montserrat font-medium text-center"> */}
            <span className="w-full text-main text-4xl font-montserrat font-medium text-center">
              {/* Personal Information */}
              My Profile
            </span>
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-full px-3">
              <InputText
                label="Name *"
                type="text"
                value={state.fname}
                onChange={onChangeHandlerCreator("fname")}
                className={`w-full ${errors.fname ? "border-red-500" : ""}`}
                errorText={errors.fname}
                placeholder="Name"
                containerClass="w-full"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-3">
            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
              <InputText
                label="Mobile  No*"
                type="number"
                value={state.contactno}
                onChange={onChangeHandlerCreator("contactno")}
                className={`w-full ${errors.contactno ? "border-red-500" : ""}`}
                placeholder="Your Mobile Number"
                errorText={errors.contactno}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <InputText
                label="E-Mail Id *"
                type="email"
                value={state.email}
                onChange={onChangeHandlerCreator("email")}
                className={`w-full ${errors.email ? "border-red-500" : ""}`}
                placeholder="Your Email Id"
                errorText={errors.email}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-full px-3">
              <InputText
                label="Address *"
                type="text"
                value={state.address}
                onChange={onChangeHandlerCreator("address")}
                className={`w-full ${errors.address ? "border-red-500" : ""}`}
                errorText={errors.address}
                placeholder="Your Address"
                containerClass="w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
              <InputText
                label="Date of Birth *"
                type="date"
                value={state.dob}
                onChange={onChangeHandlerCreator("dob")}
                className={`w-full ${errors.dob ? "border-red-500" : ""}`}
                errorText={errors.dob}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <InputText
                label="Pin Code *"
                type="text"
                value={state.pincode}
                onChange={onChangeHandlerCreator("pincode", "integer")}
                className={`w-full ${errors.pincode ? "border-red-500" : ""}`}
                placeholder="Pincode"
                errorText={errors.pincode}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-3">
            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
              <InputText
                label="City"
                type="text"
                value={state.city}
                onChange={onChangeHandlerCreator("city")}
                className={`w-full ${errors.phcity ? "border-red-500" : ""}`}
                placeholder="City"
                errorText={errors.city}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <InputText
                label="State"
                type="text"
                value={state.state}
                onChange={onChangeHandlerCreator("state")}
                className={`w-full ${errors.state ? "border-red-500" : ""}`}
                errorText={errors.state}
                placeholder="State"
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
                Accept
              </Checkbox>
              <Link href="/terms-and-condition" className="text-black ml-1">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-center mb-3 mt-6 px-3">
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
    </>
  );
};

export default Profile;
