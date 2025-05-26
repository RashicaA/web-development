import React, { useState, useEffect } from 'react'

const TodoClass = () => {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        console.log("[componentDidMount] called");

        setTimeout(() => {
            setTodos(["Code"])
        }, 1000);

        return () => { console.log("[componentWillUnmount]") }
    }, [])

    useEffect(() => {
        console.log("[componentDidUpdate]")
        console.log("UseEffect called when todos changes")
    }, [todos])

    const handleChange = (ev) => {
        setNewTodo(ev.target.value)
    }

    const handleAdd = () => {
        if (newTodo) {
            setTodos([...todos, newTodo])
            setNewTodo("")
        }
    }

    return (
        <>
            <h1>Todos Functional</h1>
            <input type='text' placeholder='Enter todo...'
                value={newTodo}
                onChange={handleChange}
            />
            <button onClick={handleAdd}>Add todo</button>
            <ul>
                {todos.map((todo, i) => <li key={i + todo}>{todo}</li>)}
            </ul>
        </>
    )
}

export default TodoClass;