import React from 'react'

const Button = () => {
    function handleClick() {
        console.log("Button clicked!!")
    }
    return (

        <button onClick={handleClick}>Click me!</button>
    )
}

export default Button
