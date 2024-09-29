import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

import { loginGetOTP, loginVerifyOTP } from "@/api";
import { setToken } from "@/local-storage";

const VerifyotpScreen: React.FC = () => {
  const [otp, setOTP] = useState<string>("    ");
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const { query, push } = useRouter();
  const mobileNum = query.name as string;

  const Resend = () => {
    loginGetOTP(mobileNum)
      .then(() => {
        console.log("OTP sended");
      })
      .catch((err) => console.log("ERRRR", err));
  };

  const onClickHandler = () => {
    loginVerifyOTP(mobileNum, otp)
      .then((res) => {
        setToken(res.data.token);
        push("/");
      })
      .catch((err) => console.log("ERRRR", err));
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
    <div className="bg-Lbgimg text-white p-4 shadow-md flex flex-wrap px-4 lg:m-16 md:px-2 lg:my-6">
      <div className="w-full md:w-1/2 py-40 px-4 md:px-20 text-black">
        <div className="w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <div className="w-full p-4 md:p-8 space-y-8 flex items-center justify-center">
              <div>
                <h2 className="text-center text-3xl md:text-4xl font-medium leading-10 tracking-normal text-left py-6 px-2 md:px-7 whitespace-nowrap">
                  OTP
                </h2>
                <p className="mb-5 text-base md:text-lg font-normal leading-5 tracking-normal text-center">
                  Please enter OTP sent to your <br /> mobile No. +91 98******89
                </p>
              </div>
            </div>
            <div className="gap-x-4">
              <div className="flex flex-row justify-center items-center gap-x-2">
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
              <div className="mt-6">
                <p className="mb-12 text-base md:text-lg font-normal leading-5 tracking-normal text-center">
                  Not received yet{" "}
                  <Link href="#" onClick={Resend}>
                    Resend
                  </Link>
                </p>
                <Button
                  onClick={onClickHandler}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold capitalize text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2"></div>
    </div>
  );
};

export default VerifyotpScreen;
