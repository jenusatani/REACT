import React, { useState } from 'react'

export default function Searching() {
    const [name,setName]=useState('');
    const arr = [
        {name:"aaditya", age :35},
        {name:"aadrika", age :33},
        {name:"aadvay", age :3},
        {name:"baalaark", age :50},
        {name:"cameron", age :85},
        {name:"christopher" , age : 98},
        {name:"jace" , age : 29},
        {name:"jameson" , age : 76},
        {name:"saanvika" , age : 76},
        {name:"sawyer" , age : 45},
        {name:"rohit" , age : 65},
        {name:"ankit" , age : 55},
        {name:"yash" , age : 15},
    ]
    const data = arr.filter((item)=>item.name.includes(name)) 
  return (
    <>
      <center>
        <h1>Searching</h1> <br/>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
        {
            data && 
            data.map((e,i) => {
            return <ul key={i} style={{listStyle:"none"}}>
                    <li>{e.name}</li>
                    <li>{e.age}</li>
                    </ul>
            })
    }
      </center>
    </>
  )
}