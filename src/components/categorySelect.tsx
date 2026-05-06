// https://react-bootstrap.netlify.app/docs/components/dropdowns/
// https://reactrouter.com/api/hooks/useFetcher

import Dropdown from "react-bootstrap/Dropdown";
import type { Category } from "../types/types";
const url = "http://localhost:8080/api/my-categories";

interface CategoryProps {
  categories: Category[];
  setNewCategory: (id: string) => void;
}

function CategorySelect({ categories, setNewCategory }: CategoryProps) {
  const selectCategory = (eventKey: string | null) => {
    if (eventKey) {
      setNewCategory(eventKey);
    }
  };

  return (
    <div>
      <Dropdown onSelect={selectCategory}>
        <Dropdown.Menu show>
          <Dropdown.Header>Your categories</Dropdown.Header>
          {categories.map((category: Category) => (
            <Dropdown.Item key={category.id} eventKey={category.id}>
              {category.categoryName}
              <br />
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default CategorySelect;
