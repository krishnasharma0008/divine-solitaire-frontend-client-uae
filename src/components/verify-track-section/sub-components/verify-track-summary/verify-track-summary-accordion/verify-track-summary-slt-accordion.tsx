import { VerifyTrackByUid } from "@/interface";
import { formatByCurrency, isSoldProduct } from "@/util";

import VerifyTrackSummaryAccordion from "./verify-track-summary-accordion";

interface VerifyTrackSummarySltProps {
  productDetails: VerifyTrackByUid;
}
const VerifyTrackSummarySltAccordion: React.FC<VerifyTrackSummarySltProps> = ({
  productDetails,
}) => {
  return (
    <VerifyTrackSummaryAccordion
      title={{
        main: "Divine Solitaires",
        details: productDetails.solitaire_details_1,
        smount: "",
        currentPrice: productDetails.slt_total_current_price,
        purchasePrice: productDetails?.slt_total_purchase_price,
        isCoin: productDetails.is_coin,
        uid_status: productDetails.uid_status,
        sd_cts: productDetails.sd_cts,
        currency_locale: productDetails.currency_locale,
        currency_code: productDetails.currency_code,
      }}
      className="!px-0"
    >
      <table className="md:hidden table w-full table-fixed [&>tr>td]:text-center font-body [&>tr>td]:text-black font-normal">
        <tr className="w-full font-bold">
          <td>UID</td>

          <td>Solitaire</td>
          {isSoldProduct(productDetails) && <td>Purchase</td>}
          <td>Current</td>
          {isSoldProduct(productDetails) && <td>Growth</td>}
        </tr>
        {productDetails?.slt_details.map((item, idx) => (
          <tr className="w-full py-2" key={idx}>
            <td>{item.uid}</td>
            <td>
              {item.shape}-{item.carat}-{item.colour}-{item.clarity}
            </td>
            {isSoldProduct(productDetails) && (
              <td>
                {formatByCurrency(
                  item.purchase_price,
                  productDetails.currency_locale,
                  productDetails.currency_code
                )}
              </td>
            )}
            <td>
              {formatByCurrency(
                item.current_price,
                productDetails.currency_locale,
                productDetails.currency_code
              )}
            </td>
            {isSoldProduct(productDetails) && (
              <td className="!text-green">
                {(
                  ((item.current_price - item.purchase_price) /
                    item.purchase_price) *
                  100
                ).toFixed(2)}{" "}
                %
              </td>
            )}
          </tr>
        ))}
      </table>

      <table className="md:table hidden w-full table-fixed [&>tr>td]:text-center font-body text-base font-normal text-black">
        <tr className="w-full font-bold">
          <td>UID</td>
          {productDetails.is_coin === false && (
            <>
              <td>Shape</td>
              <td>Carat</td>
              <td>Colour</td>
              <td>Clarity</td>
              <td>Current Price</td>
            </>
          )}
        </tr>
        {productDetails?.slt_details.map((item, idx) => (
          <tr className="w-full" key={idx}>
            <td>{item.uid}</td>
            {productDetails.is_coin === false && (
              <>
                <td>{item.shape}</td>
                <td>{item.carat}</td>
                <td>{item.colour}</td>
                <td>{item.clarity}</td>
                <td>
                  {formatByCurrency(
                    item.current_price,
                    productDetails.currency_locale,
                    productDetails.currency_code
                  )}
                </td>
              </>
            )}
          </tr>
        ))}
      </table>
    </VerifyTrackSummaryAccordion>
  );
};

export default VerifyTrackSummarySltAccordion;
export { type VerifyTrackSummarySltProps as VerifyTrackSummaryAccordionProps };
