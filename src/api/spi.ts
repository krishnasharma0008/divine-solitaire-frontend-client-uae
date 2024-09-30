import { AxiosResponse } from "axios";

import { Shape } from "@/enum";
import { SolitairePriceIndex } from "@/interface";

import { getSolitairePriceIndexEndpoint } from "./endpoints";
import callWebService from "./web-service";

export interface SolitairePriceIndexResponse {
  data: SolitairePriceIndex;
  message: "Success" | "Failed";
}

const getSolitairePriceIndex = (
  month: string,
  year: number,
  countrycode:string
): Promise<AxiosResponse<SolitairePriceIndexResponse>> =>
  callWebService(getSolitairePriceIndexEndpoint.url, {
    method: getSolitairePriceIndexEndpoint.method,
    timeout: 60 * 1000,
    params: {
      shape: Shape.SPIROUND,
      month,
      year,
      countrycode :countrycode.slice(0, 2),
      islocal :countrycode.slice(3)
    },
  });

export default getSolitairePriceIndex;
