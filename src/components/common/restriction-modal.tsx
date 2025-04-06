import React from "react";

import { XMarkIcon, HeadsetIcon } from "../icons";

interface RestrictionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  headmsg: string;
  bodymsg1: string;
  bodymsg2: string;
  bodymsg3: string;
  isIcon: string;
}

const RestrictionModal: React.FC<RestrictionModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  headmsg,
  bodymsg1,
  bodymsg2,
  bodymsg3,
  isIcon,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="pointer-events-auto fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="relative max-w-[311px] md:max-w-[344px]  lg:max-w-[40%] sm:max-w-[90%] rounded-3xl bg-white shadow-sm"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className=" flex shrink-0 rounded-t-3xl bg-[#F4F4F4] font-[Montserrat] font-bold text-base justify-around align-middle py-4 text-[#000000]">
          <span className="pr-6 font-[Montserrat] font-bold text-sm md:text-base">
            {headmsg}
          </span>
          <XMarkIcon
            className="h-5 w-5 absolute top-4 right-4"
            onClick={onClose}
          />
        </div>

        {headmsg === "Feature Currently Unavailable" && (
          <div className="w-full px-[4px] ">
            <p className="font-[Montserrat] font-light text-[10px] md:text-[12px] leading-[100%] tracking-[0%] text-center  pt-[10px]">
              (This feature is not accessible for your account at the moment.)
            </p>
          </div>
        )}

        <div className="w-full relative pt-5 px-[8px] md:px-[18px] ">
          <div className="flex justify-center">
            <p className="font-[Montserrat] font-medium text-[10px] md:text-[14px] leading-[15px] tracking-[0.02em] text-center">
              {bodymsg1} &nbsp;
            </p>
          </div>
          <p className="flex justify-center items-center font-[Montserrat] font-medium text-[10px] md:text-[14px] leading-[15px] tracking-[0.02em] text-center">
            {bodymsg2}&nbsp;
          </p>
          {bodymsg3 !== "" && (
            <p className="flex justify-center items-center font-[Montserrat] font-medium text-[10px] md:text-[14px] leading-[15px] tracking-[0.02em] text-center">
              {bodymsg3}&nbsp;
            </p>
          )}
        </div>
        <div className="flex shrink-0 flex-wrap items-center pt-[30px] pb-4 justify-center">
          <div className="w-40 ">
            <button
              onClick={onSubmit}
              className="flex items-center gap-2 rounded-md border border-transparent py-2 px-4 text-center font-medium text-[12px] md:text-[14px] leading-[100%] tracking-[0%] transition-all text-white bg-[#1D9619] whitespace-nowrap"
            >
              {isIcon === "yes" && <HeadsetIcon className="w-4 h-4" />}
              SUBMIT REQUEST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrictionModal;
