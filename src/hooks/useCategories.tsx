import { useEffect, useState } from "react";
import type { Category } from "../types/types";
import {url} from "../data.tsx"

export function useCategories(userId?: string) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const getCategories = async () => {
      const response = await fetch(
        `${url}api/${userId}/my-categories`,
      );
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.log(await response.text());
      }
    };
    getCategories();
  }, [userId]);

  return categories;
}

export default useCategories;
