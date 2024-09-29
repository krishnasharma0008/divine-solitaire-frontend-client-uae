import { AxiosResponse } from "axios";
import get from "lodash/get";

import { VerifyTrackResaleForm } from "@/interface";
import { getToken } from "@/local-storage";

import { verifyTrackcreateResaleEndpoint } from "./endpoints";
import callWebService from "./web-service";

export interface GetResaleDetailResponse {
  data: VerifyTrackResaleForm;
}

export interface CreateResaleDetailResponse {
  msg: string;
  requestno: number;
}

const createVerifyTrackResale = (
  payload: VerifyTrackResaleForm
): Promise<AxiosResponse<CreateResaleDetailResponse>> => {
  const formData = new FormData();
  Object.keys(payload).forEach((key: string) => {
    if (!get(payload, key)) return;
    if (["docfile"].includes(key)) {
      formData.append(key, get(payload, key), get(payload, key));
      return;
    }
    formData.append(key, get(payload, key));
  });

  return callWebService(verifyTrackcreateResaleEndpoint.url, {
    method: verifyTrackcreateResaleEndpoint.method,
    headers: {
      Authorization: "Bearer " + getToken(),
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });
};

export { createVerifyTrackResale };
