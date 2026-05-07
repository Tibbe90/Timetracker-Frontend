async function CategoryNameUpdate(categoryId?: string, newCategoryName?: string) {

    console.log("categoryId from NameUpdate: ",categoryId, "newName: ", newCategoryName);
    
    if (!categoryId) {
      alert("You must select a category first")
      return true;
    }
    if (!newCategoryName) {
      alert("Missing new category name")
      return true;
    }
      const response = await fetch(
        `http://localhost:8080/api/category/${categoryId}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({ newName: newCategoryName })
      },
      );
      if (response.ok) {
        return false
      } else {
        console.log(await response.text());
      }

  return true
}

export default CategoryNameUpdate;
