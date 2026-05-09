import {url} from "../data.tsx"
async function UpdateTimerCategory(timerId?: string, newCategoryId?: string) {
    
    if (!timerId) {
      alert("Couldn't find this timer Id")
      console.log("updateTimerCategory timerId: ", timerId);
      
      return;
    }
    if (!newCategoryId) {
      alert("Missing new category")
      return;
    }
      const response = await fetch(
        `${url}api/time/category/${timerId}`, {
        method: "PATCH",
        credentials: 'include',
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({ newCategoryId: newCategoryId })
      },
      );
      if (response.ok) {
        return
      } else {
        console.log(await response.text());
      }

  return
}

export default UpdateTimerCategory;
