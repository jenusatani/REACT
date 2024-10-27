// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate()
    const handleAdd = async ()=>{
    const data = await signInWithEmailAndPassword(auth,email,password)
    console.log(data);
    navigate('/Dashboard')
    }

  return (
    <div>
        <center> <br /><br /><br /><br />
            <h1>Signin</h1>
            <br /><br />
            <input type="text" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/><br /><br />
            <input type="text" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} /> <br /><br />
            <button onClick={handleAdd}>SignIn</button>
        </center>
    </div>
  )
}