import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Food from './components/Food'
import Find from './components/Find'
import Foodlist from './components/Foodlist'
import Foodnavnbar from './components/Foodnavnbar'
import Container from './components/Container'


function App() {
  const [fooddata,setfooddata]=useState([])
  return (
    <>
       <Foodnavnbar />
      <Find fooddata={fooddata} setfooddata={setfooddata}/>
        <Container>
          <Foodlist fooddata={fooddata}/>
        </Container>
   
      <Food/>
    </>
  )
}

export default App
