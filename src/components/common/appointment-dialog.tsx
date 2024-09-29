import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import React from "react";

import { Button } from "@/components";

interface AppointmentDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  children: React.ReactNode;
  title: string;
  submitText: string;
  cancelText: string;
}

const AppointmentDialog: React.FC<AppointmentDialogProps> = ({
  open,
  onClose,
  onSubmit,
  children,
  title,
  submitText,
  cancelText,
}) => {
  return (
    <Dialog open={open} handler={onClose}>
      <div className="flex items-center justify-between">
        <div className="w-full flex items-center justify-center">
          <DialogHeader>{title}</DialogHeader>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5"
          onClick={onClose}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <DialogBody className="max-h-[calc(100vh-200px)] overflow-y-auto" divider>
        {children}
      </DialogBody>
      <DialogFooter>
        <div className="flex item-right space-x-4">
          <Button themeType="dark" onClick={onSubmit}>
            {submitText}
          </Button>
          <Button themeType="dark" onClick={onClose}>
            {cancelText}
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};

export default AppointmentDialog;
