import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";

import { MinusIcon, PlusIcon } from "@/components/icons";
import { calculateGrowth, formatByCurrency } from "@/util";

interface VerifyTrackSummaryAccordionProps {
  title: {
    main: string;
    details: string;
    smount: string;
    currentPrice: number;
    purchasePrice?: number;
    isCoin: boolean;
    uid_status: string;
    sd_cts: number;
    currency_locale: string;
    currency_code: string;
  };
  children: React.ReactNode;
  className?: string;
}
const VerifyTrackSummaryAccordion: React.FC<
  VerifyTrackSummaryAccordionProps
> = ({ title, children, className }) => {
  const [open, setOpen] = useState<boolean>(false);

  const iconClickHandler = (shouldOpen: boolean) => () => setOpen(shouldOpen);

  return (
    <Accordion open={open} className={className}>
      <AccordionHeader
        onClick={() => setOpen(!open)}
        className="p-4 font-body items-center w-full bg-gray_normal"
      >
        <div className="flex flex-col gap-4 justify-between w-full text-black">
          <div className="text-lg font-medium flex justify-between">
            {title.main}
            <span>
              {open ? (
                <MinusIcon onClick={iconClickHandler(false)} />
              ) : (
                <PlusIcon onClick={iconClickHandler(true)} />
              )}
            </span>
          </div>
          {!open && !!title.purchasePrice && (
            <>
              <div className="text-lg font-normal mt-1">{title.details}</div>
              {title.smount !== "" && (
                <div className="text-lg font-normal mt-1">{title.smount}</div>
              )}
              {!title.isCoin && title.uid_status === "SOLD" && (
                <div className="flex flex-row justify-between text-base font-normal">
                  <div>
                    <div>Purchase Price:</div>
                    <div>
                      {formatByCurrency(
                        title.purchasePrice,
                        title.currency_locale,
                        title.currency_code
                      )}
                    </div>
                  </div>
                  <div>
                    <div>Current Price:</div>
                    <div>
                      {formatByCurrency(
                        title.currentPrice,
                        title.currency_locale,
                        title.currency_code
                      )}
                    </div>
                  </div>
                  {/* <div className="text-green"> */}
                  <div
                  // className={
                  //   parseFloat(
                  //     calculateGrowth(title.purchasePrice, title.currentPrice)
                  //   ) < 0
                  //     ? "text-red-500 bg-red-500"
                  //     : "text-green-500"
                  // }
                  >
                    <div>Growth :</div>

                    <div
                      style={{
                        color:
                          parseFloat(
                            calculateGrowth(
                              title.purchasePrice,
                              title.currentPrice
                            )
                          ) < 0
                            ? "red"
                            : "green",
                      }}
                    >
                      {calculateGrowth(title.purchasePrice, title.currentPrice)}
                    </div>
                  </div>
                </div>
              )}
              {!title.isCoin && title.uid_status === "UNSOLD" && (
                <div className="flex flex-row justify-between text-base font-normal">
                  <div>
                    <div>
                      Current Price:{" "}
                      {formatByCurrency(
                        title.currentPrice,
                        title.currency_locale,
                        title.currency_code
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {!open && !title.purchasePrice && (
            <>
              <div className="text-base font-normal mt-1">{title.details}</div>
              {title.sd_cts > 0 && (
                <div className="text-lg font-normal mt-1">{title.smount}</div>
              )}
              {!title.isCoin && (
                <div className="text-base font-normal">
                  Current Price:{" "}
                  {formatByCurrency(
                    title.currentPrice,
                    title.currency_locale,
                    title.currency_code
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </AccordionHeader>
      <AccordionBody className="p-0 mt-5">{children}</AccordionBody>
    </Accordion>
  );
};

export default VerifyTrackSummaryAccordion;
export { type VerifyTrackSummaryAccordionProps };
