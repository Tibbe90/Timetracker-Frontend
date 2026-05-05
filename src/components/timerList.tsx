// https://react-bootstrap.netlify.app/docs/components/dropdowns/

import Dropdown from 'react-bootstrap/Dropdown';
import type { Category, User } from '../types/types';
import { useEffect, useState } from 'react';
const url = 'http://localhost:8080/api/my-categories';

function timerList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentUser, setCurrentUser] = useState<User|null>(null)
  console.log(currentUser);
  
  useEffect(() => {
    const stringedUser = localStorage.getItem('user')
    if (stringedUser) {
      const parseUser: User = JSON.parse(stringedUser)
      setCurrentUser(parseUser)
    }
  }, [])
  

  useEffect(() => {
      if(!currentUser)
        return
      const categoryFetch = async () => {
        const response = await fetch(`http://localhost:8080/api/${currentUser.id}/my-categories`);
        if (response.ok) {
          setCategories(await response.json());
          console.log(await response.json);
          
        } else {
          console.log(await response.text());
        }
      };
      
      categoryFetch();
    }, [currentUser?.id]);
    

  return (
  <div>
    <Dropdown.Menu show>
        <Dropdown.Header>Your categories</Dropdown.Header>
        {categories.map((category: Category) => 
            <Dropdown.Item eventKey={category.id}>{category.categoryName}</Dropdown.Item>
        )}
    </Dropdown.Menu>
  </div>
  )
}

export default timerList;
