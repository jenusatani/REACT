import React, { useState } from 'react'
import Home from './Components/Home'
import Create from './Components/Create'
import Delete from './Components/Delete'
import Update from './Components/Update'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  const [data,setData] = useState(
    [
      {id:1 , name:"Michael",age:58},
      {id:2 , name:"Franklin",age:40},
      {id:3 , name:"Trevor",age:50}
    ]
  )
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home data={data}/>}></Route>
      <Route path='/Create' element={<Create data={data} setData={setData} />}></Route>
      <Route path='/Delete' element={<Delete data={data} setData={setData}/>}></Route>
      <Route path='/Update' element={<Update data={data} setData={setData}/>}></Route>
    </Routes>
    </BrowserRouter>      
    </>
  )
}