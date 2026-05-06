import React, { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import type { Timer, User } from "../types/types";
import useTimerStatus from "../hooks/useTimerStatus";

//https://www.npmjs.com/package/react-timer-hook

interface StopwatchProps {
  setCurrentTime: (time: number) => void;
  currentUserId: string | null;
}

function Stopwatch({ setCurrentTime, currentUserId }: StopwatchProps) {
  const [currentStopwatch, setCurrentStopwatch] = useState<number>(0);
  const [autoStart, setAutoStart] = useState<boolean>(false);
  const [offsetTime, setOffsetTime] = useState<Date>();
  const checkTimer: Timer | null = useTimerStatus(currentUserId ?? undefined);
  useEffect(() => {
    setCurrentTime(currentStopwatch);
  }, [currentStopwatch]);

  //Checks if there's a timer that was never stopped
  useEffect(() => {
    if (checkTimer) {
      const status = checkTimer.status;
      if (status == "STARTED") {
        const timerTime:number = new Date().getTime() - checkTimer.timeStart.getTime();
        const newOffset:Date = new Date()
        newOffset.setMilliseconds(newOffset.getMilliseconds() + timerTime)
        setOffsetTime(newOffset)
        setAutoStart(true);
      } else {
        setAutoStart(false);
        const offsetTime = checkTimer.duration;
      }
      console.log(offsetTime);
    }
  }, []);

  const {
    totalSeconds,
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart, interval: 90, offsetTimestamp:  });

  return (
    <div>
      <p>Stopwatch</p>
      <div style={{ fontSize: "35px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>:<span>{milliseconds}</span>
      </div>
      <div></div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default Stopwatch;
