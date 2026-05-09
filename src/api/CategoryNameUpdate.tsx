import {url} from "../data.tsx"

async function CategoryNameUpdate(categoryId?: string, newCategoryName?: string) {
    
    if (!categoryId) {
      alert("You must select a category first")
      return;
    }
    if (!newCategoryName) {
      alert("Missing new category name")
      return;
    }
      const response = await fetch(
        `${url}api/category/${categoryId}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({ newName: newCategoryName })
      },
      );
      if (response.ok) {
        alert(`Category name will be updated next time you navigate`)
        return
      } else {
        console.log(await response.text());
      }

  return
}

export default CategoryNameUpdate;
