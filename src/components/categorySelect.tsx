// https://react-bootstrap.netlify.app/docs/components/dropdowns/
// https://reactrouter.com/api/hooks/useFetcher

import Dropdown from 'react-bootstrap/Dropdown';
import { useFetcher } from "react-router-dom";
import type { Category } from '../types/types';
import { useEffect } from 'react';
const url = "http://localhost:8080/api/my-categories"

function categorySelect() {
  const categories = useFetcher()
  useEffect(() => {
    categories.load(url) },
    [categories])

  console.log(categories);
  const myCategories = categories.data
  return (
  <div>
    <Dropdown.Menu show>
        <Dropdown.Header>Your categories</Dropdown.Header>
        {myCategories.map((category: Category) => 
            <Dropdown.Item eventKey={category.id}>{category.categoryName}</Dropdown.Item>
        )}
    </Dropdown.Menu>
  </div>
  )
}

export default categorySelect;
