import React, { useRef } from 'react'

const UseRefExample = () => {

    const inputRef = useRef(null);

    function handleClickFocus() {
        console.log("useRef", inputRef);
        console.log(inputRef.current)
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'blue';
    }
    return (
        <div>
            <h3>Use Ref example</h3>
            <input type='text' ref={inputRef} />
            <button onClick={handleClickFocus}>Click to focus</button>
        </div>
    )
}

export default UseRefExample
