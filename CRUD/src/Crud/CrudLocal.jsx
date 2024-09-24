import React, { useEffect, useState } from 'react'
      
export default function CrudLocal() {
      const [name, SetName] = useState("");
      const [age, SetAge] = useState("");
      const [city, SetCity] = useState("");
      const [subject, SetSubject] = useState("");
      
      const[record, setRecord] = useState(null);

      useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("Student")) || [];
        setRecord(data)
      }), [record]


      const handleAdd = () => {
        let user = {id : Date.now(), name , age , city , subject}
        record.push(user);
        localStorage.setItem("Student",JSON.stringify(record));
      }
      
  return (
    <center>
    <div>
      <h1>CRUD LOCAL STORAGE</h1>
      <input type="text" placeholder='Enter Name' onChange={(e) => SetName(e.target.value)} /> <br /> <br />
      <input type="text" placeholder='Enter Age' onChange={(e) => SetAge(e.target.value)} /> <br /> <br />
      <input type="text" placeholder='Enter City' onChange={(e) => SetCity(e.target.value)} /> <br /> <br />
      <input type="text" placeholder='Enter Subject' onChange={(e) => SetSubject(e.target.value)} /> <br /> <br />

      <button onClick={handleAdd}>Add Data</button> <br /> <br />
      
      <table border='1' width='70%'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Subject</th>
            </tr>
        </thead>
     
      <tbody>
        { 
          record ?
          record.map((e,i)=>{
            return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.city}</td>
                <td>{e.subject}</td>
            </tr>
          }) :
          "error"
        }
      </tbody>
      </table>

    </div>
    </center>
  )
}
