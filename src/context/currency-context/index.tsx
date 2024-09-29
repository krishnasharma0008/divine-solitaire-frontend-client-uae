import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import Currency from "@/enum/currency-enum"; // Ensure you have a Currency enum defined
import useCountryCode from "@/hooks/use-country-code";
import { countryCurrencyMap } from "@/util/country-currency-map";

// Define the context type
interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

// Create context without providing a default function implementation for setCurrency
const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

// Create a provider component
export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currency, setCurrency] = useState<Currency>(Currency.USD); // Default to USD or any preferred currency

  // Function to update the currency state
  const updateCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency);
  };

  //fetch country code
  const countryCode = useCountryCode();

  useEffect(() => {
    if (countryCode) {
      const currency = countryCurrencyMap[countryCode] || Currency.USD; // Fallback to USD
      setCurrency(currency);
    }
  }, [countryCode]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: updateCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Custom hook to use the CurrencyContext
export const useCurrency = () => {
  const context = useContext(CurrencyContext);

  // Ensure the context is being used within the CurrencyProvider
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }

  return context;
};
