import { useEffect, useState } from "react";
import type { CategoryHistory } from "../types/types";

export function useCategoryHistory(userId?: string) {
  const [categoryHistory, setCategoryHistory] = useState<CategoryHistory[]>([]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const getCategories = async () => {
      const response = await fetch(
        `http://localhost:8080/api/time/${userId}/history`,
      );
      if (response.ok) {
        const data = await response.json();
        setCategoryHistory(data);
      } else {
        console.log(await response.text());
      }
    };
    getCategories();
  }, [userId]);

  return categoryHistory;
}

export default useCategoryHistory;
