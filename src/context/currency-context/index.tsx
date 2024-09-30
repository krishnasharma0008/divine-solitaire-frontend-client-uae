import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface CurrencyContextType {
  currency: string;
  setCurrency: (currency: string) => void;
}

// Create context without providing a default function implementation for setCurrency
const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

// Create a provider component
export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currency, setCurrency] = useState("AE-0"); // Default currency

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
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
