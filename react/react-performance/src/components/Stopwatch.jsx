import { useState, useRef } from "react"
import React from 'react'

// we can add react.memo & useCallback in this code o further optimise.
const Stopwatch = () => {
    const [time, setTime] = useState(3678);
    const [isTimerRunning, setIsTimerRunning] = useState(false)
    const timerRef = useRef(null);

    function handleStart() {

        if (!isTimerRunning) {
            setIsTimerRunning(true);
            timerRef.current = setInterval(() => {
                setTime((p) => p + 1);
            }, 1000);
        }
    }

    function handleStop() {
        if (isTimerRunning) {

            clearInterval(timerRef.current);
            setIsTimerRunning(false)
        }

    }
    function handleReset() {
        clearInterval(timerRef.current)
        setIsTimerRunning(false)
        setTime(0);
    }

    function formatTime(time) {
        // 103 > 00:01:43
        // 3601 > 01:00:01

        const getSeconds = `0${time % 60}`.slice(-2);
        const mins = Math.floor(time / 60);
        const getMins = `0${mins % 60}`.slice(-2);
        const hrs = Math.floor(time / 3600);
        const getHrs = `0${hrs}`.slice(-2);

        return `${getHrs}:${getMins}:${getSeconds}`;

    }

    return (
        <div>
            <h3>Stopwatch</h3>
            <h4>{formatTime(time)}</h4>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Stopwatch
