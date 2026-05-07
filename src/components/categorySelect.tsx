// https://react-bootstrap.netlify.app/docs/components/dropdowns/
// https://reactrouter.com/api/hooks/useFetcher

import Dropdown from "react-bootstrap/Dropdown";
import type { Category } from "../types/types";
import { useEffect, useState } from "react";

interface CategoryProps {
  categories: Category[];
  setNewCategory: (category: Category) => void;
}

function CategorySelect({ categories, setNewCategory }: CategoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>()

  const selectCategory = (eventKey: string | null) => {
    if (eventKey) {
      const activeCategory = categories.find((category: Category) => category.id === eventKey);
      if (activeCategory) {
        setNewCategory(activeCategory)
        setSelectedCategory(activeCategory)
      }
    }}

  return (
      <Dropdown onSelect={selectCategory}>
        <Dropdown.Toggle >{selectedCategory?.categoryName ?? "Select category"}</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>Your categories</Dropdown.Header>
          {categories.map((category: Category) => (
            <Dropdown.Item key={category.id} eventKey={category.id} active={selectedCategory?.id === category.id} >
              {category.categoryName}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
  );
}

export default CategorySelect;
