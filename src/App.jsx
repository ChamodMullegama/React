import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Todo />
    </>
  )
}

export default App
