import React from "react";

import { Button } from "@/components";
import { formatByCurrency } from "@/util";

export interface WishListdivProps {
  uid: string;
  product_type: string;
  jewelcat: string;
  design_no: string;
  purchase_price: string;
  current_price: string;
  carat: string;
  imgurl: string;
  onRemoveClick?: () => void;
  onUpgradeClick?: () => void;
}

const WishListDiv: React.FC<WishListdivProps> = ({
  uid,
  jewelcat,
  current_price,
  imgurl,
  onRemoveClick,
  onUpgradeClick,
}) => {
  return (
    <div className="w-full border rounded-md items-center justify-center">
      <div className="p-4 flex justify-center items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgurl}
          alt={`${uid} Wishlist`}
          width={200}
          height={60}
          onError={(event) => {
            const imgElement = event.target as HTMLImageElement;
            if (imgElement) {
              imgElement.src = "/Empty.jpg";
            }
          }}
          className="center md:w-auto w-60 max-h-52 md:max-h-auto md:h-full m-auto"
        />
      </div>
      <div className="p-4">
        <div className="grid gap-3">
          <div className="flex justify-between">
            <p className="text-left text-gray-700 font-Montserrat text-xl font-semibold leading-6">
              {jewelcat === "" ? "Solitaire" : jewelcat} - {uid}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-right text-gray-700 font-montserrat font-normal text-sm">{`${formatByCurrency(
              Math.round(parseFloat(current_price)), "en-IN", "INR"
            )}`}</p>
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
              Find Store
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListDiv;
