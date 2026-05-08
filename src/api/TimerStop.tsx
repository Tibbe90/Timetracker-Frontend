import {url} from "../data.tsx"
async function timerStop(userId?: string) {

    const stopTime: number = new Date().getTime()
    if (!userId) {
      return true;
    }
      const response = await fetch(
        `${url}api/time/${userId}/stop`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(stopTime)
      },
      );
      if (response.ok) {
        return false
      } else {
        console.log(await response.text());
      }
  return true
}

export default timerStop;
