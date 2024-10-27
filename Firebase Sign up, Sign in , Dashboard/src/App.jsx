// eslint-disable-next-line no-unused-vars
import React from 'react'
 import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import Signup from './Firebase/Signup'
import Signin from './Firebase/Signin'
 import Dasboard from './Firebase/Dasboard'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Signup}></Route>
      <Route path='/signin' Component={Signin}></Route>
      <Route path='/dashboard' Component={Dasboard}></Route>
    </Routes>
    </BrowserRouter>
  )
}