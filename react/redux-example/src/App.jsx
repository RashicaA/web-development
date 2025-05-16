import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import ToDoList from './Todos'
import User from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <ToDoList />
      <User />
    </>
  )
}

export default App
