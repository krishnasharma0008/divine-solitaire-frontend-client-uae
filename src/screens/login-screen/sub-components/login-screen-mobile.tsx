import Link from "next/link";
import { useRouter } from "next/router";
import { SetStateAction, useContext, useState } from "react";

import { loginGetOTP } from "@/api";
import { Button, InputText } from "@/components";
//import MobileNumberInput from "@/components/common/mobile-number-input";
import { NOTIFICATION_MESSAGES } from "@/config";
import LoaderContext from "@/context/loader-context";
import NotificationContext from "@/context/notification-context";
//import { CountryCode } from "@/interface/country-code";
import { setMobileNumber as setMobileNumberInStorage } from "@/local-storage";

const LoginScreenMobileInput: React.FC = ({}) => {
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const { notifyErr } = useContext(NotificationContext);

  const [loginType, setLoginType] = useState("");
  //const [email, setEmail] = useState("");
  //const [mobile, setMobileNumber] = useState<string>("");
  //const [countryCode, setCountryCode] = useState<CountryCode>(CountryCode.IND);
  const { push } = useRouter();

  const onClickHandler = async () => {
    showLoader();
    try {
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(loginType)) {
        //console.log("It's an email", loginType);
        // It's an email
        await loginGetOTP(loginType);
        setMobileNumberInStorage(loginType);
        push({ pathname: "/login/verify" });
      } else if (/^\d+$/.test(loginType) && loginType.length === 10) {
        //console.log("It's a Mobile No.", loginType);
        // It's a phone number
        await loginGetOTP(loginType);
        setMobileNumberInStorage(loginType);
        push({ pathname: "/login/verify" });
      } else {
        // Invalid input, display an error message
        notifyErr("Invalid E-mail or Mobile Number");
      }
      // Continue with the rest of your logic
    } catch (err) {
      console.log("LoginScreenMobile", err);
      notifyErr(NOTIFICATION_MESSAGES.SOMETHING_WRONG);
    }
    hideLoader();
  };

  // const onClickHandler = async () => {
  //   showLoader();
  //   try {
  //     await loginGetOTP(mobile);
  //     setMobileNumberInStorage(mobile);
  //     push({ pathname: "/login/verify" });
  //   } catch (err) {
  //     console.log("LoginScreenMobile", err);
  //     notifyErr(NOTIFICATION_MESSAGES.SOMETHING_WRONG);
  //   }
  //   hideLoader();
  // };

  // const mobileNumberChangeHandler = (
  //   mobileNum: string,
  //   countryCode: CountryCode
  // ) => {
  //   setMobileNumber(mobileNum);
  //   setCountryCode(countryCode);
  // };
  return (
    <div className="w-full flex flex-col items-center p-6">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-[23px] font-medium">
          Login with E-Mail / Mobile Number
        </h2>
        <p className="mt-3 text-base  ">
          To experience the best Solitaires in India
        </p>
      </div>
      {/* <MobileNumberInput
        value={mobile}
        countryCode={countryCode}
        onChange={mobileNumberChangeHandler}
        className="mt-12 flex w-full gap-3 [&>div:nth-child(2)]:w-full [&>div>input]:w-full"
      /> */}
      <div className="w-full">
        <InputText
          type="text"
          placeholder="E-Mail / Mobile Number"
          value={loginType}
          //onBlur={}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setLoginType(e.target.value)
          }
          className="w-full mt-12"
        />
      </div>
      <Button
        onClick={onClickHandler}
        themeType="dark"
        classes="!mt-12 py-3 text-lg font-normal leading-6"
      >
        GET VERIFICATION CODE
      </Button>
      <div className="text-base md:text-lg font-normal leading-5 tracking-normal text-center py-8">
        <p className="text-gray-500">
          By Continuing I agree,{" "}
          <strong
            style={{
              fontWeight: "bolder",
              color: "black",
              textDecoration: "underline",
            }}
          >
            <Link href="/terms-and-condition" className="pinter">
              Terms & Conditions
            </Link>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default LoginScreenMobileInput;
