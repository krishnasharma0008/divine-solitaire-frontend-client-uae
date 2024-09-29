import { VerifyTrackByUid } from "@/interface";
import { isCoinProduct } from "@/util";

import VerifyTrackSummaryAccordion from "./verify-track-summary-accordion";

interface VerifyTrackSummaryMountAccordionProps {
  productDetails: VerifyTrackByUid;
}

interface DetailsTableProps {
  title: string;
  rows: Array<{ field: string; value: string }>;
  className?: string;
}

const DetailsTable: React.FC<DetailsTableProps> = ({
  title,
  rows,
  className,
}) => (
  <div
    className={`px-4 text-base font-body font-normal text-black ${className}`}
  >
    <div className="text-lg font-medium">{title}</div>
    <div>
      {rows.map(({ field, value }) => (
        <div className="flex justify-between mt-3" key={value}>
          <span>{field}</span>
          <span className="text-gold">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

const VerifyTrackSummaryMountAccordion: React.FC<
  VerifyTrackSummaryMountAccordionProps
> = ({ productDetails }) => {
  return (
    <VerifyTrackSummaryAccordion
      title={{
        main: "Divine Mount",
        details: `${productDetails.net_wt} gms | ${productDetails.mount_details_1}`,
        smount: productDetails.mount_details_2,
        currentPrice:
          productDetails.metal_total_current_price +
          productDetails?.sd_total_current_price,
        purchasePrice: productDetails?.metal_sd_purchase_price,
        isCoin: productDetails.is_coin,
        uid_status: productDetails.uid_status,
        sd_cts: productDetails.sd_cts,
        currency_locale: productDetails.currency_locale,
        currency_code : productDetails.currency_code,
      }}
      className="mt-3 !px-0"
    >
      <DetailsTable
        title="Gold Details"
        rows={[
          { field: "Metal", value: productDetails.mount_details_1 },
          {
            field: "Gross | Net Weight",
            value: `${productDetails.gross_wt} | ${productDetails.net_wt} gms`,
          },
        ]}
        className="mb-6"
      />
      {!isCoinProduct(productDetails) && productDetails.sd_pcs > 0 && (
        <DetailsTable
          title="Side Diamonds"
          rows={[
            {
              field: "Pcs | Carat",
              value: `${productDetails.sd_pcs} pcs | ${productDetails.sd_cts} Cts.`,
            },
            { field: "Quality", value: `${productDetails.sd_colour_clarity}` },
          ]}
        />
      )}
    </VerifyTrackSummaryAccordion>
  );
};

export default VerifyTrackSummaryMountAccordion;
export { type VerifyTrackSummaryMountAccordionProps as VerifyTrackSummaryAccordionProps };
