import React, { useState } from 'react'

export default function Hooks() {
    const[count , setCount]=useState(0)
    const increase = () =>{
        setCount(count + 1)
    }
    const decrease = () =>{
        setCount(count - 1)
    }
    const[name, setName]=useState("Jenil")
    const changeName = () =>{
        setName(prompt("Enter Name"))
    }
    const[arr , setArr]=useState([1,"joy",2,"jeky"]) 
    const[obj , setObj]=useState({name:"joy" , subject: "roky"}) 
    const[arrobj ,setArrObj]=useState([{name:"rohit" , age:21},{name:"jon" , age:54},{name:"jerry" , age:34},])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <h1>{name}</h1>
        <button onClick={changeName}>Change Name</button>
        <h1>Arrays:</h1>        
        {
            arr.map((el, i) => {
                return <h2 key={i}>{el}</h2>
            })
        }
        <h1>Objects:</h1>
        <h2>Name: {obj.name}</h2>
        <h2>Subject: {obj.subject}</h2>
        <h1>ArrayObj:</h1>
        {
            arrobj.map((el,i)=>{
                return <ul>
                    <li key={i}>{el.name}</li>
                    <li key={i}>{el.age}</li>
                </ul>          
            })
        }
    </div>

  )
}