// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './App/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All from './Componets/All'
import Men from './Componets/Men'
import Women from './Componets/Women'
import Electronic from './Componets/Electronic'
import Jawelery from './Componets/Jawelery'

export default function App() {
  return (
    <>
      <BrowserRouter>
  <Provider store={store}>
  <Routes>
  <Route path='/' element={<All/>}></Route>
  <Route path='/Electronic' element={<Electronic/>}></Route>
  <Route path='/Men' element={<Men/>}></Route>
  <Route path='/Women' element={<Women/>}></Route>
  <Route path='/Jewelery' element={<Jawelery/>}></Route>
  </Routes>
  </Provider>
  </BrowserRouter>
    </>
  )
}
