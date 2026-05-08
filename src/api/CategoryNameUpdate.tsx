import {url} from "../data.tsx"

async function CategoryNameUpdate(categoryId?: string, newCategoryName?: string) {

    console.log("categoryId from NameUpdate: ",categoryId, "newName: ", newCategoryName);
    
    if (!categoryId) {
      alert("You must select a category first")
      return;
    }
    if (!newCategoryName) {
      alert("Missing new category name")
      return;
    }
      const response = await fetch(
        `${url}/category/${categoryId}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({ newName: newCategoryName })
      },
      );
      if (response.ok) {
        return
      } else {
        console.log(await response.text());
      }

  return
}

export default CategoryNameUpdate;
