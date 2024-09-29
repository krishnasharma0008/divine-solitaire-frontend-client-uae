import Currency from "@/enum/currency-enum";

const countryCurrencyMap: Record<string, Currency> = {
  US: Currency.USD,
  IN: Currency.INR,
  AE: Currency.AED,
  // Add more country-to-currency mappings as required
};

export {countryCurrencyMap}