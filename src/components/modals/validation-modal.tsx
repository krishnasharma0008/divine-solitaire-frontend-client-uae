import { Dialog, DialogBody } from "@material-tailwind/react";

import { Button } from "../common";

interface ValidationModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  message: string;
}

const ValidationModal: React.FC<ValidationModalProps> = ({
  show,
  setShow,
  message,
}) => (
  <Dialog
    open={show}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handler={() => {
      setShow(false);
    }}
    className="md:max-w-[350px] md:min-w-[350px] lg:max-w-[350px] lg:min-w-[350px] rounded-none"
  >
    <DialogBody className="p-8 font-body text-black text-center">
      {message}
      <div className="mt-4 block max-w-xs m-auto">
        <Button themeType="dark" classes="" onClick={() => setShow(false)}>
          Ok
        </Button>
      </div>
    </DialogBody>
  </Dialog>
);

export default ValidationModal;
