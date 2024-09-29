import Currency from "@/enum/currency-enum";
import { countryCurrencyMap } from "@/util/country-currency-map"; // Adjust path as needed

// Create a reverse mapping of Currency to country codes
const reverseCountryCurrencyMap: Record<Currency, string> = Object.fromEntries(
  Object.entries(countryCurrencyMap).map(([countryCode, currency]) => [currency, countryCode])
) as Record<Currency, string>; // Type assertion to ensure correct type

export { reverseCountryCurrencyMap };
