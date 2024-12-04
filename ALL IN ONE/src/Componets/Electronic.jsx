// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { AddData, addDataToServer, DeleteData, deleteDataFromServer, fetchData, updateDataOnServer } from '../Configure/Apislice'
import { Link } from 'react-router-dom'


export default function Men() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [img, setImg] = useState('');
  const [editingId, setEditingId] = useState(null);  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const record = useSelector((state) => state.dataKey);
  const { Data, loading } = record;

  const handleAdd = () => {
    if (title && price && category) {
      const newProduct = {
        title,
        price,
        category,
        image: img,
        id: Date.now(), // Unique id for the new product
      };
      
      dispatch(addDataToServer(newProduct));

      // Clear input fields
      setTitle('');
      setPrice('');
      setCategory('');
      setImg('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteDataFromServer(id));  // Call the delete action to remove data from server
  };

  const handleEdit = (product) => {
    setTitle(product.title);
    setPrice(product.price);
    setCategory(product.category);
    setImg(product.image);
    setEditingId(product.id);  // Set the id of the product being edited
  };

  const handleUpdate = () => {
    if (editingId && title && price && category) {
      const updatedProduct = {
        id: editingId,
        title,
        price,
        category,
        image: img,
      };

      dispatch(updateDataOnServer(updatedProduct));  // Dispatch update action

      // Clear input fields and reset editing
      setTitle('');
      setPrice('');
      setCategory('');
      setImg('');
      setEditingId(null);  // Reset the editing state
    }
  };


  return (
    <>
<nav className="navbar">
        <Link to={'/'} style={{ color: "#f4a261" }}>All</Link>
       <Link to={'/Electronic'}>Electronic</Link>
        <Link to={'/Men'}>Men</Link>
        <Link to={'/Women'}>Women</Link>
        <Link to={'/Jewelery'}>Jewelery</Link>
      </nav>
      <center>
        <br /><br />
        <input type="text" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} /> <br /><br />
        <input type="number" placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)} /> <br /><br />
        <input type="text" placeholder='Enter Category' value={category} onChange={(e) => setCategory(e.target.value)} /> <br /><br />
        <input type="file" onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} /> <br />
        <button className='btn1' onClick={editingId ? handleUpdate : handleAdd}>{editingId ? 'Update' : 'Add Data'}</button> <br /><br />
      </center>

      <div className="record-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          Data.length > 0 ? (
            Data.map((e) => (
            e.category ==="electronics" ? 
              
              <ul key={e.id} className="record-item">
                <img src={e.image} alt={e.title} className="record-image" />
                <li className="record-title">{e.title}</li>
                <li className="record-category">{e.category}</li>
                <li className="record-price">₹ {e.price}</li> <br />
                <button className='btn1' onClick={() => handleEdit(e)}>Edit</button>
                <button className='btn2' onClick={() => handleDelete(e.id)}>Delete</button>
              </ul>
              : ""
            ))
          ) : (
            <p>No data available</p>
          )
        )}
      </div>
    </>
  )
}



