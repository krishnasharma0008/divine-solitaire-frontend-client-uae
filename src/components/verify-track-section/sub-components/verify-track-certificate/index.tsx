import Image from "next/image";
import { useContext } from "react";

import {
  CertificateTextIcon,
  DownloadIcon,
  LogoIcon,
} from "@/components/icons";
import { VerifyTrackByUid } from "@/interface";
import {
  isCoinProduct,
  isDiamondProduct,
  isJewelleryProduct,
  isSoldProduct,
} from "@/util";

import { VerifyTrackContext } from "../../../../context/verify-track-context";

interface ContentTableProps {
  items: Array<{ label: string; value: string | number }>;
  title: string;
  isSold: boolean;
}
const ContentTable: React.FC<ContentTableProps> = ({
  items,
  title,
  isSold,
}) => (
  <>
    <h4
      className={`font-semibold text:sm sm:text-xl text-left ${
        isSold ? "text-left" : "sm:text-center"
      } leading-6 pt-12 mb-6`}
    >
      {title}
    </h4>
    {items.map((item, key) => (
      <div
        key={key}
        className="flex justify-between text:xs sm:text-lg mb-2 font-normal leading-tight	"
      >
        <span className="w-1/2 text-left">{item.label}</span>
        <span className="w-1/2 text-right text-[#826344] font-semibold">
          {item.value}
        </span>
      </div>
    ))}
  </>
);

interface ContentTableHorizontalProps {
  productDetails: VerifyTrackByUid;
  title: string;
  isSold: boolean;
}
const ContentTableHorizontal: React.FC<ContentTableHorizontalProps> = ({
  productDetails,
  title,
  isSold,
}) => (
  <>
    <h4
      className={`font-semibold text:sm sm:text-xl text-left ${
        isSold ? "text-left" : "sm:text-center"
      } leading-6 pt-12 mb-6`}
    >
      {title}
    </h4>
    <table className="table-fixed w-full">
      <tr className="">
        <td>UID</td>
        {!isCoinProduct(productDetails) && (
          <>
            <td>Shape</td>
            <td>Carat</td>
            <td>Colour</td>
            <td>Clarity</td>
          </>
        )}
      </tr>
      {productDetails.slt_details.map((item) => (
        <tr className="text-[#826344]" key={item.uid}>
          <td>{item.uid}</td>
          {!isCoinProduct(productDetails) && (
            <>
              <td>{item.shape}</td>
              <td>{item.carat}</td>
              <td>{item.colour}</td>
              <td>{item.clarity}</td>
            </>
          )}
        </tr>
      ))}
    </table>
  </>
);

const VerifyTrackCertificate: React.FC = () => {
  const { productDetails } = useContext(VerifyTrackContext);

  if (!productDetails) return null;

  const isSold: boolean = isSoldProduct(productDetails);
  const tableItems = [
    { label: "UID:", value: productDetails.uid },
    { label: "Description:", value: productDetails.mount_details_1 },
  ];

  if (isJewelleryProduct(productDetails)) {
    const { sd_cts, sd_pcs } = productDetails;
    const hasQuantity = productDetails.sd_pcs > 0 && productDetails.sd_cts > 0;

    isCoinProduct(productDetails)
      ? tableItems.push({
          label: "Weight",
          value: `${productDetails.net_wt} gms`,
        })
      : tableItems.push(
          {
            label: "Gross | Net Weight",
            value: `${productDetails.gross_wt} | ${productDetails.net_wt} gms`,
          },
          {
            label: `${hasQuantity ? "Pcs | Carat" : ""}`,
            value: `${hasQuantity ? `${sd_pcs} pcs | ${sd_cts} Cts.` : ""}`,
          }
        );
  }

  if (isDiamondProduct(productDetails)) {
    tableItems.push({
      label: "Shape:",
      value: productDetails.slt_details[0]?.shape,
    });
  }

  return (
    <div className="px-4">
      <div
        className={`border-2 sm:border border-black w-full p-2 lg:px-14 sm:pt-12 lg:pb-36 text-center`}
      >
        <div dir="rtl">
          <DownloadIcon className="relative top-0 start-0" />
        </div>
        <LogoIcon className="m-auto" />
        <CertificateTextIcon className="m-auto mt sm:mt-8 w-60 sm:w-auto" />
        <ContentTable
          title={isSold ? "Divine Mount" : "Divine Solitaire Summary"}
          items={tableItems}
          isSold={isSold}
        />

        {isDiamondProduct(productDetails) && (
          <ContentTable
            title="The 4Cs"
            isSold={isSold}
            items={[
              {
                label: "Carat Weight:",
                value: productDetails.slt_details[0]?.carat.toFixed(2),
              },
              {
                label: "Colour Guide:",
                value: productDetails.slt_details[0].colour,
              },
              {
                label: "Clarity Grade:",
                value: productDetails.slt_details[0]?.clarity,
              },
              { label: "Cut Grade:", value: "(Ex.Ex.Ex.) Plus" },
            ]}
          />
        )}

        {isJewelleryProduct(productDetails) && (
          <ContentTableHorizontal
            title="Divine Solitaire"
            isSold={isSold}
            productDetails={productDetails}
          />
        )}
        <div className="m-auto mt-16 pt-2 text-left text-xs sm:text-lg">
          Divine Solitaires Stringently analyses as well as Guarantees every
          diamond to score ‘The Best’ on all the 123 parameters.
        </div>
        <Image
          src="/guarantee-certificate.png"
          alt="Divine Logo"
          height={120}
          width={160}
          className="h-32 w-40 lg:float-right ml-auto lg:-mr-12"
        />
      </div>
    </div>
  );
};

export default VerifyTrackCertificate;
