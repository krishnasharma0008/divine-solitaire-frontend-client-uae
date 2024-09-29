import { AxiosResponse } from "axios";

import InsureNow from "@/interface/insure-now";
import { getToken } from "@/local-storage";

import { getInsureNowEndpoint } from "./endpoints";
import callWebService from "./web-service";

interface InsureNowListResponse {
  data: Array<InsureNow>;
}

interface InsureNowDetailListResponse {
  data: InsureNow;
}

const getInsureNowList = (): Promise<AxiosResponse<InsureNowListResponse>> =>
  callWebService(getInsureNowEndpoint.url, {
    method: getInsureNowEndpoint.method,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

const getInsureNowDetail = (
  id: number
): Promise<AxiosResponse<InsureNowDetailListResponse>> =>
  callWebService(getInsureNowEndpoint.url + id, {
    method: getInsureNowEndpoint.method,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

// const DownloadExcel = async (status: string, id: number): Promise<AxiosResponse<Blob>> => {
//   const apiUrl = `excel?policy_status=${status}&id=${id}`
//   //console.log(apiUrl)
//   return callWebService(getInsuranceListEndpoint.url + apiUrl, {
//     method: getInsuranceListEndpoint.method,
//     headers: {
//       Authorization: 'Bearer ' + getToken(),
//     },
//     responseType: 'blob',
//   })
// }

const DownloadFile = async (id: number): Promise<AxiosResponse<Blob>> => {
  const apiUrl = `poldoc/${id}`;
  //console.log(apiUrl)
  return callWebService(getInsureNowEndpoint.url + apiUrl, {
    method: getInsureNowEndpoint.method,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    responseType: "blob",
  });
};

export { getInsureNowList, getInsureNowDetail, DownloadFile };
