// Task Overview:
// Build a simple Counter component where:
//     Buttons are provided to increment, decrement, and reset the count.
//     The initial count is passed as a prop to the Counter component.
//     The count cannot be decremented below 0.

import React, { useState } from 'react';

const Counter = () => {
    let [counter, setCounter] = useState(100);
    let count = 0;
    function handleIncrement() {
        // count++;
        // console.log(count)

        setCounter(counter + 1)

    }
    function handleDecrement() {
        // count--;
        setCounter(counter - 1)
    }
    function handleReset() {
        // count = 0;
        setCounter(0)
    }
    return <>
        <h4>Count: {counter}</h4>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </>
}

export default Counter;