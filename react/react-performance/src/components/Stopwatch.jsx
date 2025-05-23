import { useState, useRef } from "react"
import React from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
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

    return (
        <div>
            <h3>Stopwatch</h3>
            <h4>{time}</h4>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Stopwatch
