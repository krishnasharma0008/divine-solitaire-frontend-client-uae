import { AxiosResponse } from "axios";

import { loginVerifyOTPEndpoint } from "./endpoints";
import callWebService from "./web-service";

export interface LoginResponse {
  id: number;
  message: "SUCCESS" | "FAILURE";
  token: string;
}

const loginVerifyOTPApi = (
  contactno: string,
  password: string
): Promise<AxiosResponse<LoginResponse>> =>
  callWebService(loginVerifyOTPEndpoint.url, {
    method: loginVerifyOTPEndpoint.method,
    data: {
      contactno,
      password,
    },
  });

export default loginVerifyOTPApi;
