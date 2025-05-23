import React, { useEffect, useRef, useState } from 'react'

const UseRefExampleTimer = () => {

    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null); // to store interval ID

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1)
        }, 1000);

        // this runs when unmounting happens...
        return () => clearInterval(intervalRef.current);
    }, [])

    function handleStopTimer() {
        clearInterval(intervalRef.current);
    }

    return (
        <div>
            <h3>Use Ref example Timer</h3>
            <p>Seconds: {seconds}</p>
            <button onClick={handleStopTimer}>Stop Timer</button>
        </div>
    )
}

export default UseRefExampleTimer
