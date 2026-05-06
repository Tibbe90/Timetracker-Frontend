import { useEffect, useState } from "react";
import type { Category } from "../types/types";

export function useCategory(categoryId?: string) {
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    if (!categoryId) {
      return;
    }
    const getCategories = async () => {
      const response = await fetch(
        `http://localhost:8080/api/time/category/${categoryId}`,
      );
      if (response.ok) {
        const data = await response.json();
        setCategory(data);
      } else {
        console.log(await response.text());
      }
    };
    getCategories();
  }, [categoryId]);

  return category;
}

export default useCategory;
