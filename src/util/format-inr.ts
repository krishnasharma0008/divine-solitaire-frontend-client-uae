const formatByCurrencyINR = (val: number): string =>
    Math.round(val).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    });
  export { formatByCurrencyINR };