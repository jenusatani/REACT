// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData, DeleteData, UpdateData } from '../Configure/TaskSlice';
export default function TaskRedux() {
    const[firstname,setfirstname]=useState('')
    const[MiddleName,setMiddleName]=useState('')
    const[age,setage]=useState('')
    const[gender,setgender]=useState('')
    const[task,setTask]=useState('')
    const[index,setIndex]=useState(null)
    const count1 = useSelector((state)=>{
        return state.taskKey
    });
    const dispatch = useDispatch();

    const handleAdd = () =>{
        if(index==null){
            dispatch(AddData({id:Date.now(),firstname,MiddleName,age,gender,task}))
        }else{
            dispatch(UpdateData({id:index,firstname,MiddleName,age,gender,task}))
            setIndex(null)
        }
        setfirstname('')
        setMiddleName('')
        setage('')
        setgender('')
        setTask('')
    }
    const HandleDelete = (id) => {
        dispatch(DeleteData(id));
    }
    const HandleEdit = (id) => {
    let singleData = count1.Taskmanager.find((item) => item.id == id)
    setIndex(id)
    setfirstname(singleData.firstname)
    setMiddleName(singleData.MiddleName)
    setage(singleData.age)
    setgender(singleData.gender)
    setTask(singleData.task)
    }
    return (
    <>
      <center>
        <p id='h1'>Taskmanager-Redux</p>
        <input type="text" placeholder='Enter First Name' onChange={(e)=>setfirstname(e.target.value)} value={firstname} /> <br /><br />
        <input type="text" placeholder='Enter Middle Name' onChange={(e)=>setMiddleName(e.target.value)} value={MiddleName} /> <br /><br />
        <input type="text" placeholder='Enter Age' onChange={(e)=>setage(e.target.value)} value={age} /> <br /><br />
        <input type="text" placeholder='Enter Gender' onChange={(e)=>setgender(e.target.value)} value={gender} /> <br /><br />
        <input type="text" placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)} value={task} /> <br /><br />
        <button id='bt1' onClick={handleAdd} >{ index ?"Update Task":"Add Task"}</button> <br /><br />
        <table border={2} width={"86%"}>
            <thead>
                <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Task</th>
                <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    count1?
                    count1.Taskmanager.map((e,i)=>{
                        return (<tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.firstname}</td>
                            <td>{e.MiddleName}</td>
                            <td>{e.age}</td>
                            <td>{e.gender}</td>
                            <td>{e.task}</td>
                            <td>
                            <button id='bt2' onClick={()=>HandleDelete(e.id)}>Delete</button>
                            <button id='bt3' onClick={()=>HandleEdit(e.id)}>Edit</button>
                            </td>
                        </tr>)
                    }) : " "
                }
            </tbody>
        </table>
      </center>
    </>
  )
}