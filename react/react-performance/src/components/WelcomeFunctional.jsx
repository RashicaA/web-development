import React, { Component, useState } from "react";


function Welcome(props) {
    const [count, setCount] = useState(0);
    const [btnAttributes, setBtnAttributes] = useState({
        text: "click",
        color: "red"
    })
    return <>
        <h2>Hello, I am {props.name} Component!!</h2>
        <div>
            <p>Counter: {count}</p>
            <button
                onClick={() => setCount(p => p + 1)}
                style={{ color: btnAttributes.color }}
            >
                {btnAttributes.text}
            </button>
        </div>
    </>
}

export default Welcome

