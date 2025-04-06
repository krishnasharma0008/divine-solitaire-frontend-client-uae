//import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react"; //useRef,

import { loginGetOTP, loginVerifyOTP } from "@/api";
import { Button } from "@/components";
import { NOTIFICATION_MESSAGES } from "@/config";
import { useAuth } from "@/context/auth-context";
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
  const { login } = useAuth();
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [otp, setOTP] = useState<string>(""); // Single input for OTP

  useEffect(() => {
    setMobileNumber(getMobileNumber() as string);
  }, []);
  const { notifyErr, notify } = useContext(NotificationContext);
  //const [otp, setOTP] = useState<string>("    "); old
  //const refs = useRef<Array<HTMLInputElement | null>>([]);

  const { push } = useRouter();

  const Resend = async () => {
    try {
      showLoader();
      await loginGetOTP(mobileNumber);
      hideLoader();
      //window.location.reload();
    } catch (err) {
      console.log("LoginScreenOtp", err);
      notifyErr(NOTIFICATION_MESSAGES.SOMETHING_WRONG);
      hideLoader();
    }
  };

  const onClickHandler = async () => {
    const formattedOTP = otp.replace(/\s/g, ""); // Remove spaces before sending
    if (formattedOTP.length !== 4) {
      notifyErr("Please enter a valid 4-digit OTP.");
      return;
    }

    showLoader();
    try {
      const res = await loginVerifyOTP(mobileNumber, formattedOTP);
      setToken(res.data.token);
      deleteMobileNumber();
      notify(NOTIFICATION_MESSAGES.LOGIN_SUCCESS);
      // Redirect to /profile if fname is null, otherwise go to the stored redirection route or home
      const redirectPath = res.data.fname
        ? getRedirectionRoute() || "/"
        : "/profile";
      push(redirectPath);
      //push(getRedirectionRoute() || "/");
      login(res.data.token, res.data.fname, res.data.mno);
      deleteRedirectionRoute();
    } catch (err) {
      console.log("LoginScreenOtp", err);
      notifyErr(NOTIFICATION_MESSAGES.LOGIN_FAIL);
    }
    hideLoader();
  };

  const otpInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    value = value.slice(0, 4); // Limit input to 4 digits

    // Add space between numbers (e.g., "1 2 3 4")
    const formattedValue = value.split("").join(" ");
    setOTP(formattedValue);
  };

  // const otpInputChangeHandler =
  //   (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const chars = otp.split("");

  //     let value = e.target.value.replace(/\ /g, "");
  //     if (value.length > 1) {
  //       index = otp.replace(/\ /g, "").length;
  //       value = value[value.length - 1];
  //       refs.current[index]?.focus();
  //     }
  //     if (index <= 3) {
  //       chars[index] = value;
  //     }

  //     setOTP(chars.join(""));
  //   };

  return (
    <div className="w-full flex flex-col items-center p-6 py-12">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="mb-5 text-base md:text-lg font-normal leading-5 tracking-normal text-center">
          OTP
          {/* Please enter OTP sent to your <br /> E-Mail / Mobile */}
          {/* {mobileNumber.slice(0, 2)}
          {mobileNumber.slice(2, 8).replace(/[0-9]/g, "*")}
          {mobileNumber.slice(8)} */}
        </p>
      </div>
      <div className="md:my-6 w-full flex flex-row justify-center items-center gap-x-2">
        {/* {otp.split("").map((digit, index) => (
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
        ))} */}
        <input
          type="text"
          value={otp}
          onChange={otpInputChangeHandler}
          maxLength={7} // 4 digits + 3 spaces
          className="border border-black rounded-md py-2 px-4 text-base md:text-lg text-center focus:outline-none focus:ring focus:ring-red-200 text-gray-800 tracking-widest"
          style={{ width: "12rem", letterSpacing: "0.5rem" }} // Ensures spacing between digits
        />
      </div>
      <p className="text-base md:text-lg font-normal leading-5 tracking-normal text-center mt-4">
        Not received yet{" "}
        <button
          type="button"
          onClick={Resend}
          className="font-semibold underline"
        >
          Resend
        </button>
      </p>
      <Button
        onClick={onClickHandler}
        themeType="dark"
        classes="!mt-12 py-3 text-lg font-normal leading-6"
      >
        Proceed
      </Button>
    </div>
  );
};

export default LoginScreenOtp;
