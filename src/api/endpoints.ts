enum HTTP_METHOD {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export interface Endpoint {
  method: HTTP_METHOD;
  url: string;
}

export const loginGetOTPEndpoint: Endpoint = {
  method: HTTP_METHOD.POST,
  url: "/api/getotp",
};

export const loginVerifyOTPEndpoint: Endpoint = {
  method: HTTP_METHOD.POST,
  url: "/api/verifyotp",
};

export const verifyTrackEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "/api/getproductinfo",
};

export const verifyTrackcreateInsuranceEndpoint: Endpoint = {
  method: HTTP_METHOD.POST,
  url: "/api/sec/policy/",
};

export const verifyTrackcreateResaleEndpoint: Endpoint = {
  method: HTTP_METHOD.POST,
  url: "/api/sec/resale/",
};

export const checkProductPortfolioStatusEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "/api/sec/portfolio/finduid",
};

export const checkProductWishlistStatusEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "/api/sec/wishlist/finduid",
};

export const addProductToWishlistEndpoint: Endpoint = {
  method: HTTP_METHOD.POST,
  url: "/api/sec/wishlist/",
};

export const addProductToPortfolioEndpoint: Endpoint = {
  method: HTTP_METHOD.POST,
  url: "/api/sec/portfolio/",
};

export const getProfileListEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "/api/sec/user/",
};

export const createProfileEndpoint: Endpoint = {
  method: HTTP_METHOD.PUT,
  url: "/api/sec/user/",
};

export const createContactUsEndpoint: Endpoint = {
  method: HTTP_METHOD.POST,
  url: "/api/sec/contactus/",
};

export const comparePastPricesEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "api/check_price_difference",
};

export const getStonePriceEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "api/getstoneprice",
};

export const saveSolitairePriceEndpoint: Endpoint = {
  method: HTTP_METHOD.POST,
  url: "api/sec/kydvalue/checkprice",
};

export const getSolitairePriceListEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "api/sec/kydvalue/list/checkprice",
};

export const deleteSolitairePriceEndpoint: Endpoint = {
  method: HTTP_METHOD.DELETE,
  url: "/api/sec/kydvalue",
};

export const getSolitairePriceIndexEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "api/spidata",
};

export const getSroreLocatorListEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "api/storelist",
};

export const getSroreDetailEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "api/store/",
};

export const getSroreSearchEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "api/storesearch",
};

export const getPortfolioListEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "api/sec/portfolio/list",
};

export const deletePortfolioEndpoint: Endpoint = {
  method: HTTP_METHOD.DELETE,
  url: "/api/sec/portfolio",
};

export const getWishListEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "api/sec/wishlist/list",
};

export const deleteWishListEndpoint: Endpoint = {
  method: HTTP_METHOD.DELETE,
  url: "/api/sec/wishlist",
};

export const createAppointmentEndpoint: Endpoint = {
  method: HTTP_METHOD.POST,
  url: "/api/book_appointment",
};

export const getInsureNowEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "api/sec/policy/",
};

export const getDiamondCoinEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "api/diamondcoin",
};

export const getUserStoreEndpoint: Endpoint = {
  method: HTTP_METHOD.GET,
  url: "api/storesearch",
};

// for nuew user registertaion
export const registerUserEndpoint: Endpoint = {
  method: HTTP_METHOD.POST,
  url: "api/user/register",
};

// for nuew user registertaion
export const termsConditionEndpoint: Endpoint = {
  method: HTTP_METHOD.POST,
  url: "https://query.rsdpl.com/api/user_registration_terms.html",
};