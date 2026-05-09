import { useEffect, useState } from "react";
import type { Timer } from "../types/types";
import {url} from "../data.tsx"

export function useTimeTrackerList(userId?: string) {
  const [timeTrackers, setTimeTrackers] = useState<Timer[]>([]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const getTimeTrackers = async () => {
      const response = await fetch(
        `${url}api/time/${userId}`,{
        credentials:"include"
        }
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
