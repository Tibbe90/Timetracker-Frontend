import { useEffect, useState } from "react";
import type { Timer } from "../types/types";

export function useTimeTrackerList(userId?: string) {
  const [timeTrackers, setTimeTrackers] = useState<Timer[]>([]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const getTimeTrackers = async () => {
      const response = await fetch(
        `http://localhost:8080/api/time/${userId}`,
      );
      if (response.ok) {
        const data = await response.json();
        setTimeTrackers(data);
      } else {
        console.log(await response.text());
      }
    };
    getTimeTrackers();
  }, [userId]);

  return timeTrackers;
}

export default useTimeTrackerList;
