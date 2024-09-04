// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count , setCount]=useState(0) 
  return (
<div>
{
  useEffect(()=>{
    console.log("Hello world")
  },[])
}
{
    useEffect(function () {
    console.log("useEffect is running Now ")
},[count])
}
<h1>{count}</h1>
<button onClick={() => setCount(count + 1)}>Increment</button>
{
  useEffect(() => {
    return console.log("Hello React")
  },[count])
}
</div>
  )
}