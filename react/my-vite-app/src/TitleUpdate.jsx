import React, { useEffect, useState } from 'react'



const TitleUpdate = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("")

    useEffect(() => {
        document.title = `Count clicked: ${count} times.`
        console.log("useffect runs...")
    }, [count])

    return (
        <div>
            <h3>useEffect title update.</h3>
            <p>Count clicked: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default TitleUpdate
