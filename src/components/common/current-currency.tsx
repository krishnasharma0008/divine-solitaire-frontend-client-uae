import { useEffect, useState } from "react";

const CurrencyDisplay = () => {
  const [currency, setCurrency] = useState<string | null>(null); // Specify the type as string | null

  useEffect(() => {
    fetchUserLocation();
  }, []);

  const fetchUserLocation = () => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        const ipAddress = data.ip;
        fetch(`https://ipapi.co/${ipAddress}/json/`)
          .then((response) => response.json())
          .then((data) => {
            const country = data.country;
            const currency = getCurrencyForCountry(country);
            setCurrency(currency);
          })
          .catch((error) => {
            console.error("Error fetching location:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  };

  const getCurrencyForCountry = (country: string): string => {
    // Specify the return type as string
    console.log("Country From : ", country);
    switch (country) {
      case "US":
        return country + " USD";
      case "GB":
        return country + " GBP";
      case "IN":
        return country + " INR";
      default:
        return country + " USD";
    }
  };

  return <div>{currency && <p>Displaying prices in: {currency}</p>}</div>;
};

export default CurrencyDisplay;
