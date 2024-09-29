import { useRouter } from "next/router";

import LoginScreenMobileInput from "./sub-components/login-screen-mobile";
import LoginScreenOtp from "./sub-components/login-screen-otp";

const LoginScreen: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <div className="max-w-[80rem] m-auto">
      <div className="bg-verify-track-bg w-full min-h-[45rem] flex items-center">
        <div className="w-full m-auto md:ml-0 md:w-1/2 py-10 px-4 md:px-20 text-black">
          <div className="w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            {asPath === "/login" && <LoginScreenMobileInput />}
            {asPath === "/login/verify" && <LoginScreenOtp />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
