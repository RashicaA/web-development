import React from 'react'
import { increment, decrement } from './redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value)
    console.log("Counter component re-rendered..")
    return (
        <div>
            <button onClick={() => dispatch(decrement())}> - </button>
            <h3>{count}</h3>
            <button onClick={() => dispatch(increment())}> + </button>
        </div>
    )
}

export default Counter
