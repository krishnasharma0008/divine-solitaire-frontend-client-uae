import { AxiosResponse } from "axios";
import get from "lodash/get";

import { ContactUsForm } from "@/interface";
import { getToken } from "@/local-storage";

import { createContactUsEndpoint } from "./endpoints";
import callWebService from "./web-service";

const createContactUs = (
  payload: ContactUsForm
): Promise<AxiosResponse<void>> => {
  const formData = new FormData();
  Object.keys(payload).forEach((key: string) => {
    if (!get(payload, key)) return;
    formData.append(key, get(payload, key));
  });

  return callWebService(createContactUsEndpoint.url, {
    method: createContactUsEndpoint.method,
    headers: {
      Authorization: "Bearer " + getToken(),
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });
};

export { createContactUs };
