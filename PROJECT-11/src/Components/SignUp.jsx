/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/SignUp.css'
import {auth, db} from "../../firebaseConfig"
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default function SignUp() {
    const [name , setName] = useState("")
   const [email,setEmail] = useState("")
   const [pass,setPass] = useState("")
   const [address,setAddress] = useState("")
   const [phone,setPhone] = useState("")
   const navigate = useNavigate()

   const handleCreate = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,pass)
    .then(data=>{
      setDoc(doc(db,"users",data.user.uid),{
        name , email , address , phone
      })
      console.log("add")
      navigate("/dashboard");
    })
  }
  return (
    <div className="signup-container">
    <h2>Signup</h2>
    <form onSubmit={handleCreate}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" onChange={(e) => setPass(e.target.value)} value={pass} />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input type="text" placeholder="Enter your address" onChange={(e) => setAddress(e.target.value)} value={address} />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="text" placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} value={phone} />
      </div>
      <button type="submit">Signup</button>
    </form>
  </div>

  )
}
