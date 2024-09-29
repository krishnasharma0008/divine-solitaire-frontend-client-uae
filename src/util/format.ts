
// import { formatByCurrencyINR } from "./format-inr";
// import { formatByCurrencyUSD } from "./format-usd";

// const formatByCurrency = (val: number, countryCode: string): string => {
//   console.log("CountryCode",countryCode)
//   // Determine which currency formatter to use based on the country code
//   if (countryCode === 'IN') {
//     // If the country code is IN (India), format the currency as INR
//     return formatByCurrencyINR(val);
//   } else {
//     // For all other country codes, format the currency as USD
//     return formatByCurrencyUSD(val);
//   }
// };

// export { formatByCurrency };

// const formatByCurrency = async (val: number): Promise<string> => {
//   // Make a request to an IP Geolocation API to get user's location details
//   const response = await fetch('https://ipapi.co/json/');
//   const data = await response.json();
  
//   // Extract the country code from the API response
//   const countryCode = data.country_code;

//   // Determine which currency formatter to use based on the country code
//   if (countryCode === 'IN') {
//     // If the country code is IN (India), format the currency as INR
//     return formatByCurrencyINR(val);
//   } else {
//     // For all other country codes, format the currency as USD
//     return formatByCurrencyUSD(val);
//   }
// };

// export { formatByCurrency };


// const formatByCurrency = async (val: number): Promise<string> => {
//   // Make a request to an IP Geolocation API to get user's location details
//   const response = await fetch('https://ipapi.co/json/');
//   const data = await response.json();
  
//   // Extract the country code and currency code from the API response
//   const countryCode = data.country_code;
//   const currencyCode = data.currency;

//   // Format the number using the obtained locale and currency code
//   return val.toLocaleString(countryCode, {
//     style: "currency",
//     currency: currencyCode,
//     minimumFractionDigits: 0,
//   });
// };

// export { formatByCurrency };

// const formatByCurrency = (val: number, locale: string, currency: string): string => {
//   console.log("locale", locale);
//   console.log("currency", currency);

//   return Math.round(val).toLocaleString(locale, {
//     style: "currency",
//     currency: currency,
//     minimumFractionDigits: 0,
//   });
// };

//  export { formatByCurrency };


const formatByCurrency = (val: number, currency_locale: string, currency_code: string): string =>{
  // console.log("currency_locale",currency_locale);
  // console.log("currency_code",currency_code);
 return  Math.round(val).toLocaleString(currency_locale, {
    style: "currency",
    currency: currency_code,
    minimumFractionDigits: 0,
  });
};
export { formatByCurrency };

// const formatByCurrency = (val: number, countryCode: string): string => {
//   //const locale = countryLocale || 'en-US'; // Use 'en-US' as default if countryLocale is null
//   console.log(countryCode);
//   return Math.round(val).toLocaleString(countryCode === "IN" ? "en-IN" : "en-US", {
//     style: "currency",
//     currency: countryCode === "IN" ? "INR" : "USD",
//     minimumFractionDigits: 0,
//   });
// };

// export { formatByCurrency };

