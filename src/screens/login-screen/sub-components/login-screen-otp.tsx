import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";

import { loginGetOTP, loginVerifyOTP } from "@/api";
import { Button } from "@/components";
import { NOTIFICATION_MESSAGES } from "@/config";
import LoaderContext from "@/context/loader-context";
import NotificationContext from "@/context/notification-context";
import {
  deleteMobileNumber,
  deleteRedirectionRoute,
  getMobileNumber,
  getRedirectionRoute,
  setToken,
} from "@/local-storage";

const LoginScreenOtp: React.FC = () => {
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const [mobileNumber, setMobileNumber] = useState<string>("");

  useEffect(() => {
    setMobileNumber(getMobileNumber() as string);
  }, []);
  const { notifyErr, notify } = useContext(NotificationContext);
  const [otp, setOTP] = useState<string>("    ");
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const { push } = useRouter();

  const Resend = async () => {
    try {
      showLoader();
      await loginGetOTP(mobileNumber);
      //window.location.reload();
    } catch (err) {
      console.log("LoginScreenOtp", err);
      notifyErr(NOTIFICATION_MESSAGES.SOMETHING_WRONG);
      hideLoader();
    }
  };

  const onClickHandler = async () => {
    showLoader();
    try {
      const res = await loginVerifyOTP(mobileNumber, otp);
      setToken(res.data.token);
      deleteMobileNumber();
      notify(NOTIFICATION_MESSAGES.LOGIN_SUCCESS);
      push(getRedirectionRoute() || "/");
      deleteRedirectionRoute();
    } catch (err) {
      console.log("LoginScreenOtp", err);
      notifyErr(NOTIFICATION_MESSAGES.LOGIN_FAIL);
    }
    hideLoader();
  };

  const otpInputChangeHandler =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const chars = otp.split("");

      let value = e.target.value.replace(/\ /g, "");
      if (value.length > 1) {
        index = otp.replace(/\ /g, "").length;
        value = value[value.length - 1];
        refs.current[index]?.focus();
      }
      if (index <= 3) {
        chars[index] = value;
      }

      setOTP(chars.join(""));
    };

  return (
    <div className="w-full flex flex-col items-center p-6 py-12">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="mb-5 text-base md:text-lg font-normal leading-5 tracking-normal text-center">
          Please enter OTP sent to your <br /> E-Mail / Mobile
          {/* {mobileNumber.slice(0, 2)}
          {mobileNumber.slice(2, 8).replace(/[0-9]/g, "*")}
          {mobileNumber.slice(8)} */}
        </p>
      </div>
      <div className="md:my-6 w-full flex flex-row justify-center items-center gap-x-2">
        {otp.split("").map((digit, index) => (
          <input
            key={index}
            ref={(ref) => (refs.current[index] = ref)}
            type="text"
            value={digit}
            onChange={otpInputChangeHandler(index)}
            maxLength={2}
            className="border border-black rounded-md py-2 px-4 text-base md:text-lg focus:outline-none focus:ring focus:ring-red-200 text-gray-800 !px-0"
            style={{ width: "2rem", textAlign: "center" }}
          />
        ))}
      </div>
      <p className="text-base md:text-lg font-normal leading-5 tracking-normal text-center">
        Not received yet{" "}
        <Link href="#" onClick={Resend} className="font-semibold">
          Resend
        </Link>
      </p>
      <Button
        onClick={onClickHandler}
        themeType="dark"
        classes="!mt-12 py-3 text-lg font-normal leading-6"
      >
        Submit
      </Button>
    </div>
  );
};

export default LoginScreenOtp;
