// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
export default function Signup() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()
    const handleAdd = async()=>{
    let data = await createUserWithEmailAndPassword(auth,email,password)
    console.log(data);
    if(data){
        navigate('/dashboard')
    }
    }
  return (
    <>
    <center>
        <br /><br /><br /><br />
        <h1>SignUp</h1> <br /><br />
        <input type="text" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/> <br /><br />
        <input type="text" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/> <br /><br />
        <button onClick={handleAdd}>SignUp</button> <br /><br />
        <Link to={'/signin'}>SignIn</Link>
    </center>
    </>
)
}