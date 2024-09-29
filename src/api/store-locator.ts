import { AxiosResponse } from "axios";
import { get } from "lodash";

import { AppointmentForm, StoreLocator } from "@/interface";
import { getToken } from "@/local-storage";

import {
  getSroreLocatorListEndpoint,
  getSroreDetailEndpoint,
  createAppointmentEndpoint,
  getSroreSearchEndpoint,
} from "./endpoints";
import callWebService from "./web-service";

export interface GetStoreLocatorResponse {
  data: Array<StoreLocator>;
}

export interface GetStoreDetailResponse {
  data: StoreLocator;
}

const getStoreLocatorList = (
  latitude?: number,
  longitude?: number
): Promise<AxiosResponse<GetStoreLocatorResponse>> => {
  let apiUrl = ``;
  if (latitude !== null && latitude !== undefined) {
    apiUrl += `?latitude=${latitude}`;
  }
  if (longitude !== null && longitude !== undefined) {
    apiUrl += `&longitude=${longitude}`;
  }
  return callWebService(getSroreLocatorListEndpoint.url + apiUrl, {
    method: getSroreLocatorListEndpoint.method,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

const getStoreDetail = (
  codeno: string
): Promise<AxiosResponse<GetStoreDetailResponse>> => {
  return callWebService(getSroreDetailEndpoint.url + codeno, {
    method: getSroreDetailEndpoint.method,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

const createAppointment = (
  payload: AppointmentForm
): Promise<AxiosResponse<void>> => {
  const formData = new FormData();
  Object.keys(payload).forEach((key: string) => {
    if (!get(payload, key)) return;
    formData.append(key, get(payload, key));
  });

  return callWebService(createAppointmentEndpoint.url, {
    method: createAppointmentEndpoint.method,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });
};

const getStoreSearchList = (
  value?: string
): Promise<AxiosResponse<GetStoreLocatorResponse>> => {
  let apiUrl = ``;
  if (value !== null && value !== undefined) {
    apiUrl += `?value=${value}`;
  }
  return callWebService(getSroreSearchEndpoint.url + apiUrl, {
    method: getSroreSearchEndpoint.method,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export {
  getStoreLocatorList,
  getStoreDetail,
  createAppointment,
  getStoreSearchList,
};
