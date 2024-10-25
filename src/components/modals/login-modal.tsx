import { Dialog, DialogBody } from "@material-tailwind/react";
import Link from "next/link";

import { Button } from "../common";

interface LoginModalProps {
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ showLogin, setShowLogin }) => {
  const handleLogin = () => {
    // Your login logic here
    console.log("Login button clicked");
    // e.g., call your login API or update the state
  };

  if (!showLogin) return null; // Don't render if showLogin is false

  return (
    <Dialog
      open={showLogin}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      handler={() => {
        setShowLogin(false);
      }}
      className="md:max-w-[350px] md:min-w-[350px] lg:max-w-[350px] lg:min-w-[350px] rounded-none"
    >
      <DialogBody className="p-8 font-body text-black text-center">
        Please Login To Proceed
        <Link className="mt-4 block max-w-xs m-auto" href="/login">
          <Button themeType="dark" classes="" onClick={handleLogin}>
            Login
          </Button>
        </Link>
      </DialogBody>
    </Dialog>
  );
};

export default LoginModal;
