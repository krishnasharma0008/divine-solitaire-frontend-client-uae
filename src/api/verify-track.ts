import { AxiosResponse } from "axios";

import { VerifyTrackByUid } from "@/interface";
import { getToken } from "@/local-storage";

import {
  addProductToPortfolioEndpoint,
  addProductToWishlistEndpoint,
  verifyTrackEndpoint,
} from "./endpoints";
import { checkProductWishlistStatusEndpoint } from "./endpoints";
import { checkProductPortfolioStatusEndpoint } from "./endpoints";
import callWebService from "./web-service";

export interface VerifyTrackByUidResponse {
  data: VerifyTrackByUid;
  flag: boolean;
  message: "Success" | "Failed";
}

export interface ProductStatusExists {
  id: number;
  userid: number;
  uid: string;
  product_type: string;
  jewelcat: string;
  design_no: string;
  purchase_price: number;
  current_price: number;
  carat: number;
  imgurl: string;
}

export interface ProductStatusResponse {
  data: null | ProductStatusExists;
  flag: boolean;
}

export interface AddToWishlistRequest {
  uid: string;
  product_type: string; //'Jewellery' | 'Diamond'
  jewelcat: string | "RINGS";
  design_no: string;
  purchase_price: number;
  current_price: number;
  carat: number; //sdCts + sltTotalCts,
  imgurl: string; //productType == jewellery ? image : sltDetails[0]["shape"],
}

export type AddToPortfolioRequest = AddToWishlistRequest;

const getVerifyTrackByUid = (
  uid: string,countrycode:string
): Promise<AxiosResponse<VerifyTrackByUidResponse>> =>{
  console.log("Country Code : ",countrycode);
  return callWebService(`${verifyTrackEndpoint.url}/${uid}?countrycode=${countrycode}`, {
    method: verifyTrackEndpoint.method,
    timeout: 60 * 1000,
  });
}

export const getProductWishlistStatus = (
  uid: string
): Promise<AxiosResponse<ProductStatusResponse>> =>
  callWebService(checkProductWishlistStatusEndpoint.url, {
    method: verifyTrackEndpoint.method,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    params: {
      uid,
    },
  });

export const getProductPortfolioStatus = (
  uid: string
): Promise<AxiosResponse<ProductStatusResponse>> =>
  callWebService(checkProductPortfolioStatusEndpoint.url, {
    method: verifyTrackEndpoint.method,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    params: {
      uid,
    },
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addProductToWishlist = (
  payload: AddToWishlistRequest
): Promise<AxiosResponse<{ msg: string }>> =>
  callWebService(addProductToWishlistEndpoint.url, {
    method: addProductToWishlistEndpoint.method,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    data: payload,
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addProductToPortfolio = (
  payload: AddToPortfolioRequest
): Promise<AxiosResponse<{ msg: string }>> =>
  callWebService(addProductToPortfolioEndpoint.url, {
    method: addProductToPortfolioEndpoint.method,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    data: payload,
  });

export default getVerifyTrackByUid;
