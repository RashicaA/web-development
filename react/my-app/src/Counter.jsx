// Task Overview:
// Build a simple Counter component where:
//     Buttons are provided to increment, decrement, and reset the count.
//     The initial count is passed as a prop to the Counter component.
//     The count cannot be decremented below 0.

import React, { useState } from 'react';

const Counter = ({ initialCount = 0 }) => {
    const [counter, setCounter] = useState(initialCount);

    function handleIncrement() {
        setCounter(counter + 1);
    }

    function handleDecrement() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    function handleReset() {
        setCounter(initialCount);
    }

    return (
        <>
            <h4>Count: {counter}</h4>
            <button data-testid="increment" onClick={handleIncrement}>Increment</button>
            <button data-testid="decrement" onClick={handleDecrement}>Decrement</button>
            <button data-testid="reset" onClick={handleReset}>Reset</button>
        </>
    );
};


export default Counter;