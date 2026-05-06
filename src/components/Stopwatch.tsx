import React, { useEffect, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import type { Timer, User } from '../types/types';
import useTimerStatus from '../hooks/useTimerStatus';

//https://www.npmjs.com/package/react-timer-hook

interface StopwatchProps {
  setCurrentTime: number
  currentUser: string
}

function Stopwatch({setCurrentTime, currentUser} : StopwatchProps) {
  const [currentStopwatch, setCurrentStopwatch] = useState<number>(0)
  useEffect (() => {
    setCurrentTime = currentStopwatch
}, [currentStopwatch])

useEffect (() => {
  const checkTimer: Timer | null = useTimerStatus()
  if (checkTimer) {
    const offsetTime = checkTimer.duration
    console.log(offsetTime);
    
  }
}, [])

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
  } = useStopwatch({ autoStart: false, interval: 90});
  


  return (
    <div>
      <p>Stopwatch</p>
      <div style={{fontSize: '35px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>:<span>{milliseconds}</span>
      </div>
      <div>

      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default Stopwatch