import {url} from "../data.tsx"

async function timerStart(userId?: string, categoryId?: string) {

    const startTime: number = new Date().getTime()
    
    if (!userId || !categoryId) {
      alert("You must select a category first")
      return true;
    }
      const response = await fetch(
        `${url}api/time/${userId}/${categoryId}/start`, {
        method: "POST",
        credentials: 'include',
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(startTime)
      },
      );
      if (response.ok) {
        return false
      } else {
        console.log(await response.text());
      }

  return true
}

export default timerStart;
