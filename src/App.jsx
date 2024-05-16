import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Navbar from './Navbar'
import Food from './components/Food'
import Find from './components/Find'


function App() {
  return (
    <>
    <Find/>
      <Food/>
    </>
  )
}

export default App
