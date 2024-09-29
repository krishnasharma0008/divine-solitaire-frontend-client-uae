import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";

import { API_CONFIG } from "@/config";
import { deleteToken } from "@/local-storage";

const callWebService: AxiosInstance = axios.create({
  baseURL: API_CONFIG.host,
  timeout: API_CONFIG.timeout,
});

const successInterceptor = (response: AxiosResponse) => response;
const failureInterceptor = (errorResponse: AxiosError) => {
  if (errorResponse.response?.status === 401) {
    deleteToken();
  }
  if ([500, 404].includes(errorResponse?.response?.status || 0))
    throw errorResponse;
};

callWebService.interceptors.response.use(
  successInterceptor,
  failureInterceptor
);

export default callWebService;
