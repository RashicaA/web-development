import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloComponent from './HelloComponent'
import DisplayData from './DisplayData'
import Button from './Button'

import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  const fruits = ['apple', 'orange', 'melon'];
  const person = {
    name: 'bob',
    age: 40
  }


  return (
    <>
      <div>
        <HelloComponent name='John' age='20' />
        <HelloComponent name="Alice" />


      </div>
      <div>
        <DisplayData fruits={fruits} person={person} />
      </div>
      <Button />

      <Counter />

    </>
  )
}

export default App
