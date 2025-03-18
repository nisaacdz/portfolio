import { useState, useEffect } from "react";
import { PortfolioProfile } from "@/types";

//const googleDriveLink = "https://drive.google.com/file/d/1IuWPozc9K32LPPKYwbk9RJFh5Hu_b_SB/view?usp=sharing";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(googleDriveLink);
        await new Promise((resolve) => setTimeout(resolve, 1000));
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
    };

    fetchData();
  }, []);

  return ownerData;
}
