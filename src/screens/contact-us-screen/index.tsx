//import { useRouter } from "next/router";
//import { useEffect, useReducer, useState } from "react";
import { useReducer, useState } from "react";

import { createContactUs } from "@/api/contact-us";
import {
  WriteToUsIcon,
  TalkToUsIcon,
  OurAddressIcon,
  WorkingHourIcon,
  InputText,
  Button,
} from "@/components";
import TextArea from "@/components/common/input-text-area";
import { ContactUsForm } from "@/interface";
//import { getToken } from "@/local-storage";

interface ContactUsFormAction {
  type: string;
  payload?: string | ContactUsForm | File;
}

const initialState: ContactUsForm = {
  fname: "",
  lname: "",
  email: "",
  contactno: "",
  subject: "",
  message: "",
};

const ContactUsFormReducer = (
  state: ContactUsForm,
  action: ContactUsFormAction
) => {
  if (action.type === "ALL") {
    return {
      ...state,
      ...(action.payload as unknown as ContactUsForm),
    };
  }

  return { ...state, [action.type]: action.payload };
};
const ContactUsScreen: React.FC = () => {
  const [state, dispatch] = useReducer(ContactUsFormReducer, initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  //const [tnc, setTnc] = useState<boolean>(false);
  //const { push } = useRouter();

  const onChangeHandlerCreator = (fieldname: string) => {
    // if (fieldname === "message") {
    //   return (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     dispatch({
    //       type: fieldname,
    //       payload: (e.target as HTMLTextAreaElement).value,
    //     });
    //   };
    // } else {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: fieldname,
        payload: (e.target as HTMLInputElement).value,
      });
    };
    //}
  };

  const onChangeHandlertextareaCreator = (fieldname: string) => {
    //if (fieldname === "message") {
    return (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch({
        type: fieldname,
        payload: (e.target as HTMLTextAreaElement).value,
      });
    };
    // } else {
    //   return (e: React.ChangeEvent<HTMLInputElement>) => {
    //     dispatch({
    //       type: fieldname,
    //       payload: (e.target as HTMLInputElement).value,
    //     });
    //   };
    // }
  };

  const onClickHandler = () => {
    const validationErrors: { [key: string]: string } = {};

    if (!state.fname) {
      validationErrors.fname = "Name is required";
    }

    if (!state.lname) {
      validationErrors.lname = "Last name is required";
    }

    if (!state.email) {
      validationErrors.email = "Email is required";
    } else if (!/.+@.+\..+/.test(state.email)) {
      validationErrors.email = "Invalid email";
    }

    if (!state.contactno) {
      validationErrors.contactno = "Mobile number is required";
    }

    if (!state.subject) {
      validationErrors.subject = "Subject is required";
    }

    if (!state.message) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    //setTnc(true);

    const payload: ContactUsForm = {
      ...state,
    };
    //console.log(payload);
    createContactUs(payload)
      .then(() => {
        console.log("It is successfully created");
      })
      .catch((err) => console.log("Error", err));
  };

  // useEffect(() => {
  //   if (!getToken()) {
  //     push("/login");
  //   }
  // }, [push]);

  return (
    <>
      <div className="flex flex-col items-center justify-center md:items-start md:max-w-screen-lg mx-auto p-4">
        <span className="font-Montserrat text-4xl font-semibold text-center md:text-left">
          Contact Us
        </span>
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-8 mt-8">
          <div className="flex flex-col items-center justify-center gap-8">
            <WriteToUsIcon />
            <span className="text-black font-Montserrat font-semibold text-base leading-6">
              Write to us
            </span>
            <span className="text-black font-Montserrat text-base font-normal leading-6">
              customerservice@divinesolitaires.com
              <br />
              <br />
              <br />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <TalkToUsIcon />
            <span className="text-black font-Montserrat font-semibold text-base leading-6">
              Talk to us
            </span>
            <span className="text-black font-Montserrat text-base font-normal leading-6">
              +91 9769888666
              <br />
              <br />
              <br />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <OurAddressIcon />
            <span className="text-black font-Montserrat font-semibold text-base leading-6">
              Our Address
            </span>
            <span className="text-black text-center font-Montserrat text-base font-normal leading-5">
              R S Diamonds Pvt Ltd. Naman Midtown, Office No: 1402, A Wing, SB
              Marg, Prabhadevi (W), Mumbai - 400013 India.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <WorkingHourIcon />
            <span className="text-black font-Montserrat font-semibold text-base leading-6">
              Working Hours
            </span>
            <span className="text-black text-center font-Montserrat text-base font-normal leading-relaxed">
              Monday to Friday 11:00 am to 6:00 pm
              <br />
              <br />
            </span>
          </div>
        </div>
        <div className="w-full h-px bg-[#E0E0E0] my-8 md:my-16"></div>
      </div>
      <div className="flex items-center justify-center gap-8">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap items-center justify-center">
            <span className="text-main text-4xl font-montserrat font-medium pb-7">
              Get In Touch
            </span>
          </div>
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-wrap w-full">
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <InputText
                  type="text"
                  value={state.fname}
                  onChange={onChangeHandlerCreator("fname")}
                  className={`w-full 
                  ${errors.fname ? "border-red-500" : ""}
                    `}
                  placeholder="First Name*"
                  errorText={errors.fname}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <InputText
                  type="text"
                  value={state.lname}
                  onChange={onChangeHandlerCreator("lname")}
                  className={`w-full ${errors.lname ? "border-red-500" : ""}`}
                  placeholder="Last name*"
                  errorText={errors.lname}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-full">
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <InputText
                  type="email"
                  value={state.email}
                  onChange={onChangeHandlerCreator("email")}
                  className={`w-full 
                  ${errors.email ? "border-red-500" : ""}
                    `}
                  placeholder="E-Mail*"
                  errorText={errors.email}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <InputText
                  type="number"
                  value={state.contactno}
                  onChange={onChangeHandlerCreator("contactno")}
                  className={`w-full ${
                    errors.contactno ? "border-red-500" : ""
                  }`}
                  placeholder="Mobile  No*"
                  errorText={errors.contactno}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-full px-3">
              <InputText
                type="text"
                value={state.subject}
                onChange={onChangeHandlerCreator("subject")}
                className={`w-full ${errors.subject ? "border-red-500" : ""}`}
                errorText={errors.subject}
                placeholder="Subject*"
                containerClass="w-full"
              />
            </div>
            <div className="flex flex-wrap w-full pt-4 px-3">
              <TextArea
                value={state.message}
                onChange={onChangeHandlertextareaCreator("message")}
                className={`w-full ${errors.message ? "border-red-500" : ""}`}
                errorText={errors.message}
                placeholder="Message*"
                containerClass="w-full"
              />
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-center mb-3 mt-6 px-3">
            <Button
              themeType="dark"
              classes="w-full md:w-1/2  text-base leading-5 font-medium"
              onClick={onClickHandler}
              //disabled={!tnc}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUsScreen;
