import { AxiosResponse } from "axios";

import WishList from "@/interface/wishlist";
import { getToken } from "@/local-storage";

import { deleteWishListEndpoint, getWishListEndpoint } from "./endpoints";
import callWebService from "./web-service";

interface WishListListResponse {
  data: Array<WishList>;
}
const getWishList = (): Promise<AxiosResponse<WishListListResponse>> =>
  callWebService(getWishListEndpoint.url, {
    method: getWishListEndpoint.method,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

const deleteWishList = (
  id: number
): Promise<AxiosResponse<{ sucess: boolean }>> =>
  callWebService(`${deleteWishListEndpoint.url}/${id}`, {
    method: deleteWishListEndpoint.method,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

export { getWishList, deleteWishList };
