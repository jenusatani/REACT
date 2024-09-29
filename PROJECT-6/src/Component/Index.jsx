import React, { useEffect, useState } from 'react'


export default function Crud() {

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [record, setRecord] = useState([]);
    const [editindex, setEditIndex] = useState(null);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("task")) || [];
        setRecord(data);
    }, []); 
    const handleAdd = () => {
        let user = { id: record.length + 1, name, subject, status: "Pending" };
        let oldRecord = JSON.parse(localStorage.getItem("task")) || [];

        if (editindex !== null) {
            let updatedRecord = oldRecord.map((item) => {
                if (item.id === editindex) {
                    let updatedItem = {
                        id: item.id,
                        name: name,
                        subject: subject,
                        status: item.status 
                    };
                    return updatedItem;
                }
                return item;
            });
            localStorage.setItem("task", JSON.stringify(updatedRecord));
            setRecord(updatedRecord);
            setEditIndex(null);
        } else {
            oldRecord.push(user);
            setRecord(oldRecord);
            localStorage.setItem("task", JSON.stringify(oldRecord));
        }
        setName("");
        setSubject("");
    };

    const handleDelete = (id) => {
        let deleteData = record.filter((item) => item.id !== id);
        setRecord(deleteData);
        localStorage.setItem("task", JSON.stringify(deleteData));
    };

    const handleEdit = (id) => {
        let singleData = record.find((item) => item.id === id);
        setName(singleData.name);
        setSubject(singleData.subject);
        setEditIndex(id);
    };

    const handleComplete = (id) => {
        let updatedRecord = record.map((item) => {
            if (item.id === id) {
                let updatedItem = {id: item.id, name: item.name, subject: item.subject, status: 'Complete' };
                return updatedItem;
            }
            return item;
        });
        setRecord(updatedRecord);
        localStorage.setItem("task", JSON.stringify(updatedRecord));
    };

    return (
      <div className="container">
  <h1>Task Manager</h1>

  <input type="text" value={name} placeholder="Enter Task Name" onChange={(e) => setName(e.target.value)}/>
  <input type="text" value={subject} placeholder="Enter Task Subject" onChange={(e) => setSubject(e.target.value)}/>
  

  <button onClick={handleAdd}>
    {editindex !== null ? "Update" : "Add"}
  </button>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Task Name</th>
        <th>Task Subject</th>
        <th>Task Status</th>
        <th colSpan={3}>Action</th>
      </tr>
    </thead>
    <tbody>
      {record.length > 0 ? (
        record.map((e, i) => (
          <tr key={i}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.subject}</td>
            <td>{e.status}</td>
            <td>
              <button className="edit" onClick={() => handleEdit(e.id)}>Edit</button>
            </td>
            <td>
              <button className="delete" onClick={() => handleDelete(e.id)}>Delete</button>
            </td>
            <td>
              <button  className="complete" onClick={() => handleComplete(e.id)}>Complete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="8" className="no-records">No records found</td>
        </tr>
      )}
    </tbody>
  </table>
</div>
    );
}