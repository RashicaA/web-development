import React, { useState, useMemo } from 'react'

// Costly functions...
const generateLargeArray = () => {
    const largeArr = [];
    console.log('generateLargeArray called')
    // HEAVY COMPUTATION...
    for (let i = 0; i < 10000000; i++) {
        largeArr.push(i)
    }

    return largeArr;
}

// Costly functions...
const sumArray = arr => {
    console.log("calculating sum...");
    return arr.reduce((acc, curr) => acc + curr, 0)
}

const LargeArraySum = () => {
    const [count, setCount] = useState(0);
    const largeArray = useMemo(() => generateLargeArray(), []);
    const sum = useMemo(() => sumArray(largeArray), [largeArray]);
    return (
        <div>
            <h3>Sum: {sum}</h3>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <p>{count}</p>
        </div>
    )
}

export default LargeArraySum
