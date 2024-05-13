import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Test from './components/Test.jsx'
import ConditionalComponents from './components/ConditionalComponents.jsx'
import EventHandle from './components/EventHandle.jsx'
import Counter from './components/Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Counter/>
  </React.StrictMode>,
)
