import { useEffect, useState } from "react";
import type { CategoryHistory } from "../types/types";
import {url} from "../data.tsx"

export function useCategoryHistory(userId?: string) {
  const [categoryHistory, setCategoryHistory] = useState<CategoryHistory[]>([]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const getCategories = async () => {
      const response = await fetch(
        `${url}api/time/${userId}/history`,{
        credentials:"include"
        }
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
