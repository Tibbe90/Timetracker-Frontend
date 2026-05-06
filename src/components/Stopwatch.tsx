import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import type { Timer } from "../types/types";
import useTimerStatus from "../hooks/useTimerStatus";
import timerStart from "../api/TimerStart";
import timerStop from "../api/TimerStop";

interface StopwatchProps {
  currentUserId: string | null;
  currentCategoryId: string | null;
}

function Stopwatch({ currentUserId, currentCategoryId }: StopwatchProps) {
  //ActiveStopwatch has no purpose in V1, it exists to implement pause logic. Right now functions the same as isRunning
  const [activeStopwatch, setActiveStopwatch] = useState<boolean>(false);
  const [offsetTime, setOffsetTime] = useState<Date | undefined>(undefined);

  const checkTimer: Timer | null = useTimerStatus(currentUserId!);

  const {
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    reset,
  } = useStopwatch({
    autoStart: false,
    interval: 100,
    offsetTimestamp: offsetTime,
  });

  useEffect(() => {
    if (!checkTimer) {
      setOffsetTime(undefined);
      setActiveStopwatch(false);
      return;
    }
    const currentDate = Date.now();
    const timeStart = new Date(checkTimer.timeStart);
    const duration = currentDate - timeStart.getTime();
    const newOffset = new Date(currentDate + duration);
    setActiveStopwatch(true);
    setOffsetTime(newOffset);
  }, [checkTimer]);

  useEffect(() => {
    if (offsetTime) {
      reset(offsetTime, true);
      setActiveStopwatch(true);
    }
  }, [offsetTime, checkTimer]);

  const handleStart = async () => {
    if (isRunning) {
      return;
    }
    const startFail = await timerStart(currentUserId!, currentCategoryId!);
    if (startFail) {
      return;
    }
    start();
    setActiveStopwatch(true);
  };

  const handleStop = async () => {
    await timerStop(currentUserId!);
    reset(undefined, false);
    setOffsetTime(undefined);
    setActiveStopwatch(false);
  };

  return (
    <div>
      <p>Stopwatch</p>
      <div style={{ fontSize: "35px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>:<span>{milliseconds}</span>
      </div>
      <div></div>
      <button disabled={isRunning} onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning && !activeStopwatch}>
        Stop
      </button>
    </div>
  );
}

export default Stopwatch;
