import { useEffect, useState } from "react";
import type { Timer } from "../types/types";

export function useTimerStatus(userId?: string) {
  const [timer, setTimer] = useState<Timer | null>(null);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const getRunningTimer = async () => {
      const response = await fetch(
        `http://localhost:8080/api/time/${userId}/status`,
      );
      if (response.ok) {
        const data = await response.json();
        setTimer(data);
        console.log(data);
      } else {
        console.log(await response.text());
      }
    };
    getRunningTimer();
  }, [userId]);

  return timer;
}

export default useTimerStatus;
