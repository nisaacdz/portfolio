import { useState, useEffect, useCallback } from "react";
import { PortfolioProfile } from "@/types";

type OwnerData = {
  person: PortfolioProfile | null;
  loading: boolean;
  error: Error | null;
};

export function usePortfolioOwner() {
  const [ownerData, setOwnerData] = useState<OwnerData>({
    person: null,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    try {
      // const FILE_ID = import.meta.env.VITE_GOOGLE_DRIVE_FILE_ID as string;
      // const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY as string;
      
      // const targetUrl = `https://www.googleapis.com/drive/v3/files/${FILE_ID}?alt=media&key=${API_KEY}`;

      // const response = await fetch(targetUrl, {
      //   headers: {
      //     "X-Requested-With": "XMLHttpRequest",
      //   },
      // });
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const response = await fetch("/person.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: PortfolioProfile = await response.json();
      setOwnerData({ person: data, loading: false, error: null });
    } catch (err) {
      console.error(err);
      setOwnerData({ person: null, loading: false, error: err as Error });
    }
  }, [setOwnerData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...ownerData, refetch: fetchData };
}
