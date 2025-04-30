import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloComponent from './HelloComponent'
import DisplayData from './DisplayData'
import Button from './Button'

import Counter from './Counter'
import Usercard from './User/UserCard';
import userObj from './User/user'

import ProductList from './ProductList/Product'
import products from './ProductList/products'

import ToDoList from './TodoList/Todos'
import SimpleForm from './SimpleForm'
import AdvanceForm from './AdvanceForm'


import TemperatureComponent from './Temperature/Index'

function App() {

  const fruits = ['apple', 'orange', 'melon'];
  const person = {
    name: 'bob',
    age: 40
  }

  console.log(userObj)
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
      <Usercard user={userObj} />

      <ProductList products={products} />

      <ToDoList />
      <SimpleForm />
      <AdvanceForm />

      <TemperatureComponent />
    </>
  )
}

export default App
