import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Navbar from './Navbar'
import Food from './components/Food'
import Find from './components/Find'
import Foodlist from './components/Foodlist'


function App() {
  const [fooddata,setfooddata]=useState([])
  return (
    <>
      <Find fooddata={fooddata} setfooddata={setfooddata}/>
      <Foodlist fooddata={fooddata}/>
      <Food/>
    </>
  )
}

export default App
