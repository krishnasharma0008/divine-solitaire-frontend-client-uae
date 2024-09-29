import {
  Button as ButtonMui,
  ButtonProps as ButtonMuiProps,
} from "@material-tailwind/react";
import { Ref } from "react";

type ButtonTypes = "dark" | "light" | "grey";
type CornerTypes = "rounded" | "sharp" | "noborder";

const colorThemesByType: { [key in ButtonTypes]: string } = {
  dark: "bg-black text-white",
  light: "bg-white text-black hover:bg-gray-50 border-solid ring-black",
  grey: "bg-gray-300 text-black ring-gray-300",
};

const cornersByType: { [key in CornerTypes]: string } = {
  rounded: "rounded-md border-x border-y ring-1 ring-inset",
  sharp: "border ring-1 ring-inset",
  noborder: "",
};

interface ButtonProps extends ButtonMuiProps {
  themeType: ButtonTypes;
  children: React.ReactNode;
  classes?: string;
  onClick?: () => void;
  cornerType?: CornerTypes;
  disabled?: boolean;
  refP?: Ref<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  themeType: type,
  children,
  classes = "",
  onClick,
  cornerType = "rounded",
  disabled,
  refP,
}) => {
  const typeClasses = colorThemesByType[type];
  const cornerClasses = cornersByType[cornerType];
  return (
    <ButtonMui
      ref={refP}
      className={`w-full px-3 py-2 text-gray-900 shadow-sm  md:mt-0 hover:shadow-grey ${typeClasses} ${cornerClasses} ${classes}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonMui>
  );
};

export default Button;
export { type ButtonProps };
