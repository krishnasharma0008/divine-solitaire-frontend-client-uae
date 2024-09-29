import Image from "next/image";
import React from "react";

import { Button } from "@/components";
import { calculateGrowth, formatByCurrency } from "@/util";

export interface ProfiledivProps {
  //id: number;
  //userid: number;
  uid: string;
  product_type: string;
  jewelcat: string;
  design_no: string;
  purchase_price: string;
  current_price: string;
  carat: string;
  imgurl: string;
  currency_code: string;
  currency_locale: string;
  onRemoveClick?: () => void;
  onUpgradeClick?: () => void;
}

const PortfolioDiv: React.FC<ProfiledivProps> = ({
  //id,
  //userid,
  uid,
  //product_type,
  jewelcat,
  design_no,
  purchase_price,
  current_price,
  //carat,
  imgurl,
  currency_code,
  currency_locale,
  onRemoveClick,
  onUpgradeClick,
}) => {
  return (
    <div className="w-full grid md:grid-cols-2 shadow-md">
      {/* </div><div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"> */}
      <div className="p-4">
        <Image
          src={imgurl === "RND" ? "/RND.jpg" : imgurl}
          alt={`${uid} Store`}
          height={0}
          width={0}
          sizes="100vw"
          className="w-auto h-auto"
        />
      </div>
      <div className="p-4">
        <div className="grid gap-3">
          <div className="flex justify-between">
            <p className="text-left text-gray-900 font-montserrat font-medium text-base leading-6">
              {jewelcat === "" ? "Solitaire" : jewelcat} - {uid}
            </p>
            <p className="text-right text-gray-700 font-montserrat font-normal text-sm">
              {design_no}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-left text-gray-700 font-montserrat font-normal text-sm">
              Purchase Price
            </p>
            <p className="text-right text-gray-700 font-montserrat font-normal text-sm">
              {`${formatByCurrency(
                Math.round(parseFloat(purchase_price)),
                currency_locale,
                currency_code
              )}`}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-left text-gray-700 font-montserrat font-normal text-sm">
              Current Price
            </p>
            <p className="text-right text-gray-700 font-montserrat font-normal text-sm">{`${formatByCurrency(
              Math.round(parseFloat(current_price)),
              currency_locale,
              currency_code
            )}`}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-left text-gray-700 font-montserrat font-normal text-sm">
              Growth
            </p>
            <p
              className={`text-right text-gray-700 font-montserrat font-normal text-sm
              ${
                parseFloat(
                  calculateGrowth(
                    parseFloat(purchase_price),
                    parseFloat(current_price)
                  )
                ) > 0
                  ? "text-green"
                  : "text-red-600"
              }`}
            >
              {calculateGrowth(
                parseFloat(purchase_price),
                parseFloat(current_price)
              )}
            </p>
          </div>
          <div className="flex justify-between space-x-6">
            <Button
              onClick={onRemoveClick}
              themeType="light"
              className="inline-flex items-center justify-center px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold capitalize text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition"
            >
              Remove
            </Button>
            <Button
              onClick={onUpgradeClick}
              themeType="dark"
              className="inline-flex items-center justify-center px-4 py-2 bg-Chinese-Black-sidebar border border-transparent rounded-md font-semibold capitalize text-white hover:bg-Chinese-Black-sidebar active:bg-Chinese-Black-sidebar focus:outline-none focus:bg-Chinese-Black-sidebar focus:ring focus:ring-red-200 disabled:opacity-25 transition"
            >
              Upgrade
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDiv;
