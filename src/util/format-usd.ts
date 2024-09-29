
const formatByCurrencyUSD = (val: number): string =>
    Math.round(val).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
  export { formatByCurrencyUSD };

  
  