// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Delete({ data, setData }) {
  const navigate = useNavigate();
  const[id,setId]=useState('');
  const handleDelete = ()=>{
    // eslint-disable-next-line react/prop-types
    let deleteData = data.filter((item)=>item.id != id)
    setData(deleteData);
    navigate("/")
  }
  return (
    <>
      <center>
      <h1>Delete</h1><br /><br />
      <input type="text"  placeholder="Enter ID " onChange={(e)=>setId(e.target.value)} /> <br /><br />
      <button onClick={handleDelete} id="bt2">Delete</button>
      </center>
    </>
  );
}