import { useEffect, useState } from "react";
import type { Timer } from "../types/types";
import {url} from "../data.tsx"

export function useTimerStatus(userId?: string) {
  const [timer, setTimer] = useState<Timer | null>(null);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const getRunningTimer = async () => {
      const response = await fetch(
        `${url}api/time/${userId}/status`,{
        credentials:"include"
        }
      );
      if (response.ok) {
        const data = await response.json();
        setTimer(data);
      } else {
        console.log("no active timer found");
      }
    };
    getRunningTimer();
  }, [userId]);

  return timer;
}

export default useTimerStatus;
