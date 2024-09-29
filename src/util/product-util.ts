import { ProductSaleStatusEnum, ProductType } from "@/enum";
import { VerifyTrackByUid } from "@/interface";

export const isJewelleryProduct = (productDetails?: VerifyTrackByUid | null) =>
  productDetails?.product_type === ProductType.JEWELLERY;

export const isDiamondProduct = (productDetails?: VerifyTrackByUid | null) =>
  productDetails?.product_type === ProductType.DIAMOND;

export const isCoinProduct = (productDetails?: VerifyTrackByUid | null) =>
  !!productDetails?.is_coin;

export const isSoldProduct = (productDetails?: VerifyTrackByUid | null) =>
  productDetails?.uid_status === ProductSaleStatusEnum.SOLD;

export const calculateGrowth = (purchasePrice: number, currentPrice: number) =>
  `${(((currentPrice - purchasePrice) / purchasePrice) * 100).toFixed(2)} %`;
