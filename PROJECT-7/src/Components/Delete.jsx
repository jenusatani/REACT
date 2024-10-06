import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Delete({ data, setData }) {
  const navigate = useNavigate();
  const[id,setId]=useState('');
  const handleDelete = ()=>{
    let deleteData = data.filter((item)=>item.id != id)
    setData(deleteData);
    navigate("/")
  }
  return (
    <div id="main1">
      <center>
      <h1>Delete</h1><br /><br />
      <input id="a1" type="text"  placeholder="Enter ID " onChange={(e)=>setId(e.target.value)} /> <br /><br />
      <button onClick={handleDelete} id="bt2">Delete</button>
      </center>
    </div>
  );
}