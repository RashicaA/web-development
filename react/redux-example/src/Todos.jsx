import { useDispatch, useSelector } from 'react-redux'
import { addTask, addValue } from './redux/todoSlice';

const ToDoList = () => {

    const value = useSelector((state) => state.todos.value)
    const tasks = useSelector((state) => state.todos.todoList);

    const dispatch = useDispatch();

    function handleInputChange(ev) {
        dispatch(addValue(ev.target.value))
    }

    return (
        <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h2>To-Do List</h2>
            <input
                type="text"
                placeholder="Enter task..."
                style={{ marginRight: "10px", padding: "10px" }}
                value={value}
                onChange={handleInputChange}
            />
            <button onClick={() => dispatch(addTask())}>Add Task</button>

            <ul>
                Display tasks here:
                {tasks.map((task, index) => (
                    <li key={index + 'task'}>
                        {task}
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default ToDoList;