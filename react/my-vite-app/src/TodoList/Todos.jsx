// Task Overview:
// Build a To-Do List where they can:
//     Add tasks using an input field and button.
//     Remove a task when clicking a delete button next to the task.



import { useState } from "react";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        // tasks.push(input); NOT WORK.

        // const arr = [...tasks, input];
        // setTasks(arr);
        // OR

        setTasks(tasks.concat(input))
        setInput("")
    };

    const removeTask = (idx) => {
        // delete item on index = idx from todos array.

        console.log(idx);

        const newTasks = tasks.filter((task, i) => i !== idx);

        setTasks(newTasks)

    };

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h2>To-Do List</h2>
            <input
                type="text"
                value={input}
                placeholder="Enter task..."
                style={{ marginRight: "10px", padding: "10px" }}
                onChange={handleInputChange}
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                Display tasks here:
                {tasks.map((task, index) => (
                    <li key={index + 'task'}>
                        {task}
                        <button onClick={() => removeTask(index)} style={{ color: 'red', marginLeft: "10px" }}> X</button>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default ToDoList;