import { AxiosResponse } from "axios";
import get from "lodash/get";

import { VerifyTrackInsuranceForm } from "@/interface";
import { getToken } from "@/local-storage";

import { verifyTrackcreateInsuranceEndpoint } from "./endpoints";
import callWebService from "./web-service";

export interface CreateInsuranceDetailResponse {
  msg: string;
  requestno: number;
}

const createVerifyTrackInsurance = (
  payload: VerifyTrackInsuranceForm
): Promise<AxiosResponse<CreateInsuranceDetailResponse>> => {
  const formData = new FormData();
  Object.keys(payload).forEach((key: string) => {
    if (!get(payload, key)) return;
    if (["panfile"].includes(key)) {
      formData.append(key, get(payload, key), get(payload, key));
      return;
    }
    formData.append(key, get(payload, key));
  });

  return callWebService(verifyTrackcreateInsuranceEndpoint.url, {
    method: verifyTrackcreateInsuranceEndpoint.method,
    headers: {
      Authorization: "Bearer " + getToken(),
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });
};

export { createVerifyTrackInsurance };
