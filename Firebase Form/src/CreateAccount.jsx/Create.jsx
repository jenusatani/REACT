/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {auth, db} from "../../firebaseConfig"
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default function Create() {

  const [name , setName] = useState("")
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const [city,setCity] = useState("")
  const [hobby,setHobby] = useState("")
    const navigate = useNavigate()

    const handleCreate= ()=>{
      createUserWithEmailAndPassword(auth,email,pass)
      .then(data=>{
        setDoc(doc(db,"users",data.user.uid),{
          name , email , city , hobby
        })
        console.log("add")
        navigate("/Dashborad")
      })
    }
  return (
    <div>
      <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" placeholder='Password' onChange={(e)=>setPass(e.target.value)}/>
      <input type="text" placeholder='city' onChange={(e)=>setCity(e.target.value)}/>
      <input type="text" placeholder='hobby' onChange={(e)=>setHobby(e.target.value)}/>
      <button onClick={handleCreate}>Create A Account</button>
      <Link to={"Login"}>Sign IN?</Link>
    </div>
  )
}
