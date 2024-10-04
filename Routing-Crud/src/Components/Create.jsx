// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function Create({ data,setData }) {
  const navigate = useNavigate();
  const [name,setName]=useState('');
  const [age, setAge] = useState('');
  const handleSubmit = () => {
    // eslint-disable-next-line react/prop-types
    let obj = {id:data.length+1 , name:name , age:age};
    setData([...data,obj]);
    navigate("/");
  };
  return (
    <>
      <center>
        <h1>Create</h1>
        <br /><br />
        <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} /> <br /> <br />
        <input type="text" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)} /> <br /><br />
        <button onClick={handleSubmit} id="bt1">Submit</button>
        <br />
      </center>
    </>
  );
}