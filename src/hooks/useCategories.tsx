import { useEffect, useState } from "react";
import type { Category } from "../types/types";

export function useCategories(userId?: string) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const getCategories = async () => {
      const response = await fetch(
        `http://localhost:8080/api/${userId}/my-categories`,
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
