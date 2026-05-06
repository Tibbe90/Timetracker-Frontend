import { useEffect, useState } from "react";
import type { Timer } from "../types/types";

export function useTimerPause(userId?: string, categoryId?: string) {

  useEffect(() => {
    const startTime: number = new Date().getTime()
    if (!userId || !categoryId) {
      return;
    }
    const pauseTimer = async () => {
      const response = await fetch(
        `http://localhost:8080/api/time/${userId}/${categoryId}/start`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(startTime)
      },
      );
      if (response.ok) {
        return
      } else {
        console.log(await response.text());
      }
    };
    pauseTimer();
  }, []);

  return
}

export default useTimerPause;
