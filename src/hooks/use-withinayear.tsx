import { useCallback, useMemo } from "react";

const useIsWithinOneYear = () => {
  const months: Record<string, number> = useMemo(
    () => ({
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    }),
    []
  );

  const checkDate = useCallback(
    (purchaseDate: string) => {
      if (!purchaseDate) return { isWithinOneYear: false, untilDate: null };

      const dateParts = purchaseDate.split("/");
      if (dateParts.length !== 3)
        return { isWithinOneYear: false, untilDate: null };

      const day = parseInt(dateParts[0], 10);
      const monthStr = dateParts[1];
      const year = parseInt(dateParts[2], 10);

      const month = months[monthStr];
      if (isNaN(day) || month === undefined || isNaN(year))
        return { isWithinOneYear: false, untilDate: null };

      // Create a Date object with UTC time
      const purchaseDateObj = new Date(Date.UTC(year, month, day));

      // Calculate one year from the purchase date
      const untilDate = new Date(purchaseDateObj);
      untilDate.setUTCFullYear(purchaseDateObj.getUTCFullYear() + 1);

      // Get today's date for comparison
      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);

      const isWithinOneYear =
        purchaseDateObj.getTime() >=
        today.getTime() - 365 * 24 * 60 * 60 * 1000;

      return { isWithinOneYear, untilDate };
    },
    [months]
  );

  return { checkDate };
};

export default useIsWithinOneYear;
