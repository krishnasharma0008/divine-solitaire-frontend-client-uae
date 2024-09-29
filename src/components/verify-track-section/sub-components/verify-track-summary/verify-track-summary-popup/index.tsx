import { Dialog, DialogBody, Drawer } from "@material-tailwind/react";
import { useContext, useState } from "react";

import { Button } from "@/components/common";
import { DiamondIcon } from "@/components/icons";
import BackIcon from "@/components/icons/back-icon";
import { TabNavContext } from "@/components/tab-nav-with-section";
import { VerifyTrackTabsEnum } from "@/enum";

interface VerifyTrackSummaryPopupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const VerifyTrackSummaryPopup: React.FC<VerifyTrackSummaryPopupProps> = ({
  open,
  setOpen,
}) => {
  const [isProductPurchased, setIsProductPurchased] = useState<boolean>(false);
  const handleProductNotPurchased = () => setOpen(false);
  const handleProductPurchased = () => setIsProductPurchased(true);
  const { setCurrentTab } = useContext(TabNavContext);
  const handleAppyInsurance = () =>
    setCurrentTab({ tabName: VerifyTrackTabsEnum.INSURANCE });

  const getQuestionContent = () => (
    <>
      <div className="text-4xl ">Thank You!!</div>
      <div className="text-md my-8 font-normal leading-5">
        Have you brought this product yet?
      </div>
      <div className="flex flex-row gap-5 md:gap-2">
        <Button
          // variant="outlined"
          themeType="light"
          color="red"
          classes="w-1/2 border-black h-14 md:h-10 uppercase text-md font-medium font-body"
          onClick={handleProductNotPurchased}
        >
          No
        </Button>
        <Button
          themeType="dark"
          classes="w-1/2 border-black h-14 md:h-10 uppercase text-md font-medium font-body"
          onClick={handleProductPurchased}
        >
          Yes
        </Button>
      </div>
    </>
  );

  const getAnswer = () => (
    <>
      <DiamondIcon className="m-auto" />
      <div className="my-8 font-normal leading-5">
        Please fill the insurance form while we are verifying your purchase.
      </div>
      <Button
        themeType="dark"
        classes="w-1/2 border-black h-14 md:h-11 w-full uppercase text-md font-medium font-body"
        onClick={handleAppyInsurance}
      >
        Apply insurance
      </Button>
    </>
  );

  if (!open) return <></>;

  return (
    <>
      <div className="md:hidden">
        <Drawer
          open={open}
          className="w-full !max-w-full m-auto flex flex-col justify-center text-center"
          overlay={false}
        >
          <div className="fixed h-20 bg-black top-0 w-full flex items-center">
            <BackIcon
              className="bg-black fill-white w-16 h-8 ml-2"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="px-4">
            {isProductPurchased ? getAnswer() : getQuestionContent()}
          </div>
        </Drawer>
      </div>

      <Dialog
        open={open}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        handler={() => {}}
        className="md:max-w-[350px] md:min-w-[350px] lg:max-w-[350px] lg:min-w-[350px] rounded-none"
      >
        <DialogBody className="p-8 font-body text-black text-center">
          {isProductPurchased ? getAnswer() : getQuestionContent()}
        </DialogBody>
      </Dialog>
    </>
  );
};

export default VerifyTrackSummaryPopup;
export { type VerifyTrackSummaryPopupProps };
