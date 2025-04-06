import { Accordion, AccordionHeader } from "@material-tailwind/react";

//import { ResaleMinusIcon } from "@/components/icons";
import { formatByCurrency } from "@/util";

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
  className?: string;
}

const VerifyTrackSummaryAccordion: React.FC<
  VerifyTrackSummaryAccordionProps
> = ({ title, className }) => {
  return (
    <Accordion open className={className}>
      <AccordionHeader className="w-full font-body items-center py-0 pr-0 bg-[#F8F8F8] rounded-[5px] border-[1px] border-[#F2F2F2]">
        <div className="w-full flex flex-col justify-between text-black">
          <div className="ml-[11px] mt-[12px] mb-[25px] font-Montserrat text-sm font-semibold text-[#121212] flex justify-between">
            {title.main}
            {/* <ResaleMinusIcon /> */}
          </div>
          <div className="ml-[11px] flex flex-row justify-between font-Montserrat text-xs font-medium">
            <div className="flex flex-col justify-between">
              <div
                className={`font-Montserrat text-xs font-medium leading-[14.63px] ${
                  title.smount !== "" ? "mb-[17px]" : "mb-[21px]"
                }`}
              >
                {title.details}
              </div>
              {title.smount !== "" && (
                <div className="font-Montserrat text-xs font-medium text-left mb-[15px] ">
                  {title.smount}
                </div>
              )}
            </div>
            {!title.isCoin && title.uid_status !== "SOLD" && (
              <div className="flex flex-row justify-between font-Montserrat text-xs font-medium ml-[11px]">
                <div>
                  {formatByCurrency(
                    title.currentPrice,
                    title.currency_locale,
                    title.currency_code
                  )}
                </div>
              </div>
            )}
            {!title.isCoin && title.uid_status === "SOLD" && (
              <div className="flex flex-row justify-between font-Montserrat text-xs font-medium ml-[11px]">
                <div>
                  {formatByCurrency(
                    title.currentPrice,
                    title.currency_locale,
                    title.currency_code
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </AccordionHeader>
    </Accordion>
  );
};

export default VerifyTrackSummaryAccordion;
export { type VerifyTrackSummaryAccordionProps };
