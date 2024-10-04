// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function Update({data,setData}) {
  const navigate = useNavigate();
  const [id , setId] = useState("");
  const [name , setName] = useState("");
  const [age , setAge] = useState("");
  const [index , setIndex] = useState(null);
  const handleEdit = () =>{
const oldData = data.find((item)=>item.id == id)
    setIndex(id)
    setName(oldData.name)
    setAge(oldData.age)

  }
  const handleUpdate = () =>{
    const conNum = Number(index);
    const updatedData = data.map((item) =>
      item.id === conNum ? { ...item, name: name, age: age } : item
    );
    console.log(conNum);
  
    setData(updatedData);
    navigate('/');
  };

  return(
    <>
    <center>
    <h1>Update</h1> <br /><br />
    <input type="text" placeholder='Enter Id'  onChange={(e)=>setId(e.target.value)}/> <br /><br />
    <button onClick={handleEdit} id='bt1'>Get-Data</button> <br /><br />
    <input type="text" placeholder='Enter Name' value={name}  onChange={(e)=>setName(e.target.value)} /> <br /><br />
    <input type="text" placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)} /> <br /><br />
    <button id='bt3' onClick={handleUpdate} >Update</button>
    </center>
    </>
  )
}