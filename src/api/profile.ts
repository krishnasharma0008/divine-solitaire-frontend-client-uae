import { AxiosResponse } from "axios";
import get from "lodash/get";

import { ProfileForm } from "@/interface";
import { getToken } from "@/local-storage";

import { createProfileEndpoint, getProfileListEndpoint, registerUserEndpoint } from "./endpoints";
import callWebService from "./web-service";

export interface GetProfileDetailResponse {
  data: { userinfo: ProfileForm };
}

const getProfileDetail = (): Promise<AxiosResponse<GetProfileDetailResponse>> =>
  callWebService(getProfileListEndpoint.url, {
    method: getProfileListEndpoint.method,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });

const createProfile = (payload: ProfileForm): Promise<AxiosResponse<void>> => {
  const formData = new FormData();
  Object.keys(payload).forEach((key: string) => {
    if (!get(payload, key)) return;
    formData.append(key, get(payload, key));
  });

  return callWebService(createProfileEndpoint.url, {
    method: createProfileEndpoint.method,
    headers: {
      Authorization: "Bearer " + getToken(),
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });
};

const registerUser = (payload: ProfileForm): Promise<AxiosResponse<void>> => {
  const formData = new FormData();
  Object.keys(payload).forEach((key: string) => {
    if (!get(payload, key)) return;
    formData.append(key, get(payload, key));
  });

  return callWebService(registerUserEndpoint.url, {
    method: registerUserEndpoint.method,
    headers: {
      //Authorization: "Bearer " + getToken(),
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });
};

export { getProfileDetail, createProfile, registerUser };
