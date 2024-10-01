import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Componenet/Home'
import About from './Componenet/About'
import Contact from './Componenet/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/About' element={<About/>}></Route>
             <Route path='/Contact' element={<Contact/>}></Route>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
