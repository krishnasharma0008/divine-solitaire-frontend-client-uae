import { AxiosResponse } from "axios";

import { ComparePrice } from "@/interface";

import { getStonePriceEndpoint } from "./endpoints";
import callWebService from "./web-service";

export interface StonePriceResponse {
  flag: boolean;
  message: string;
  data: number;
}

const getStonePrice = (
  params: Omit<ComparePrice, "day" | "month" | "year">
): Promise<AxiosResponse<StonePriceResponse>> =>
  callWebService(getStonePriceEndpoint.url, {
    method: getStonePriceEndpoint.method,
    params,
  });

export default getStonePrice;
