import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";

import { CaratDownIcon, CaratUpIcon } from "@/components/icons";
import { formatByCurrency } from "@/util";

interface VerifyTrackSummaryDetailsAccordionProps {
  className?: string;
  purchaseAmount: number;
  premium: number;
  discount: number;
  total: number;
  currency_locale: string;
  currency_code: string;
}
const VerifyTrackSummaryDetailsAccordion: React.FC<
  VerifyTrackSummaryDetailsAccordionProps
> = ({
  purchaseAmount,
  premium,
  discount,
  total,
  currency_locale,
  currency_code,
  className,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const iconClickHandler = (shouldOpen: boolean) => () => setOpen(shouldOpen);

  return (
    <Accordion
      open={open}
      className={`p-4 bg-gray_normal md:rounded-md ${className}`}
    >
      <div className={`${open ? "border px-3 py-4" : ""}`}>
        <AccordionHeader
          onClick={() => setOpen(!open)}
          className="font-body items-center border-0 py-0 md:px-4 w-full text-black"
        >
          <div className="flex justify-between w-full bg-gray_normal text-base font-medium">
            <div>Purchase Information -</div>
            <span>
              {open ? (
                <CaratUpIcon onClick={iconClickHandler(false)} />
              ) : (
                <CaratDownIcon onClick={iconClickHandler(true)} />
              )}
            </span>
          </div>
        </AccordionHeader>
        <AccordionBody className="p-0 mt-5">
          <div className="flex flex-col font-body text-xs sm:text-base font-normal text-black">
            <div>
              <span>
                Purchase Amount: <br />
                <span className="text-sm">Excl. GST</span>
              </span>
              <span className="float-right">
                {formatByCurrency(
                  purchaseAmount,
                  currency_locale,
                  currency_code
                )}{" "}
              </span>
            </div>
            <div className="mt-4">
              <span>Premium </span>
              <span className="float-right">
                {formatByCurrency(premium, currency_locale, currency_code)}
              </span>
            </div>
            <div className="mt-4">
              <span>Discount: </span>
              <span className="float-right">
                {formatByCurrency(discount, currency_locale, currency_code)}
              </span>
            </div>
            <div className="border-t mt-4 pt-4">
              <span>Total Purchase Amount: </span>
              <span className="float-right">
                {/* {formatByCurrency(total, currency_locale, currency_code)} */}
                {total == null || Number.isNaN(total)
                  ? formatByCurrency(0, currency_locale, currency_code)
                  : formatByCurrency(total, currency_locale, currency_code)}
              </span>
            </div>
          </div>
        </AccordionBody>
      </div>
    </Accordion>
  );
};

export default VerifyTrackSummaryDetailsAccordion;
export { type VerifyTrackSummaryDetailsAccordionProps };
