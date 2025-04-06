import { useState, useEffect } from "react";

function useContactNo(token: string): string | null {
  const [contactNo, setContactNo] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;

    try {
      const payloadBase64 = token.split(".")[1];
      if (!payloadBase64) throw new Error("Invalid token format");

      const payloadJson = atob(payloadBase64);
      const payload = JSON.parse(payloadJson);

      setContactNo(payload.contactno ?? null);
    } catch (error) {
      console.error("Failed to extract contact number from token:", error);
      setContactNo(null);
    }
  }, [token]);

  return contactNo;
}

export default useContactNo;
