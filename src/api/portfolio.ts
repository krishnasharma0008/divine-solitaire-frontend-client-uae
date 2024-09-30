import { AxiosResponse } from "axios";

import Portfolio from "@/interface/portfolio";
import { getToken } from "@/local-storage";

import { deletePortfolioEndpoint, getPortfolioListEndpoint } from "./endpoints";
import callWebService from "./web-service";

interface PortfolioListResponse {
  data: Array<Portfolio>;
  currency_locale:string;
  currency_code:string;
}
const getPortfolioList = (countrycode:string): Promise<AxiosResponse<PortfolioListResponse>> =>
  callWebService(`${getPortfolioListEndpoint.url}?countrycode=${countrycode.slice(0, 2)}&islocal=${countrycode.slice(3)}`, {
    method: getPortfolioListEndpoint.method,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

const deletePortfolio = (
  id: number
): Promise<AxiosResponse<{ sucess: boolean }>> =>
  callWebService(`${deletePortfolioEndpoint.url}/${id}`, {
    method: deletePortfolioEndpoint.method,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

export { getPortfolioList, deletePortfolio };
