import React from "react";

import Button from "./button";
import { SucessIcon, XMarkIcon } from "../icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  headmsg: string;
  bodymsg1: string;
  bodymsg2: string;
}

const MessageModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  headmsg,
  bodymsg1,
  bodymsg2,
}) => {
  if (!isOpen) return null;

  return (
    <div className="pointer-events-auto fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60">
      <div className="relative max-w-[311px]  lg:max-w-[40%] sm:max-w-[90%] rounded-3xl bg-white shadow-sm">
        <div className=" flex shrink-0 rounded-t-3xl bg-[#F4F4F4] font-[Montserrat] font-bold text-base justify-around align-middle py-4 text-[#000000]">
          <div className="flex gap-4 justify-around font-bold text-base">
            <SucessIcon className="h-5 w-5" />
            {headmsg}
          </div>
          <XMarkIcon
            className="h-4 w-4 absolute right-4 top-2 hover:cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="w-full relative border-t border-slate-200 p-4 ">
          <div className="flex justify-center items-center font-[Montserrat] text-sm leading-6">
            <p className="font-medium">{bodymsg1}</p>
          </div>
          <p className="flex justify-center items-center font-[Montserrat] text-sm leading-6 font-medium">
            {bodymsg2}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center pb-4 justify-center">
          <div className="w-24 ">
            <Button
              onClick={onClose} // Close dialog on Cancel button
              className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100"
              themeType="dark"
            >
              OKAY
            </Button>
          </div>
          {/* <button
                onClick={handleDialogClose} // Close dialog on Confirm button
                className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg"
                type="button"
              >
                Confirm
              </button> */}
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
