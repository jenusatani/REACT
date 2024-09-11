import React, { useState, useEffect, useRef } from 'react';

export default function From() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  
  const [errors, setErrors] = useState({});

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const subjectInputRef = useRef(null);
  const messageInputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
      nameInputRef.current.focus(); 
    } else if (!formData.email) {
      newErrors.email = 'Email is required';
      emailInputRef.current.focus(); 
    } else if (!formData.subject) {
      newErrors.subject = 'Subject is required';
      subjectInputRef.current.focus(); 
    } else if (!formData.message) {
      newErrors.message = 'Message is required';
      messageInputRef.current.focus(); 
    } else {
      alert('Form submitted successfully');
    }

    setErrors(newErrors);
  };

  return (
    <div className='main'>
      
      <div className="second-part">
        <br /><br />     
        <h3>FILL THIS FORM</h3>

        <br />
        <form onSubmit={handleSubmit}>
          <div className="in">
            <div className="name">
              <label htmlFor="name">FULL Name</label>
              <input type="text" placeholder='NAME' name="name" value={formData.name} onChange={handleInputChange} ref={nameInputRef}/>
              {errors.name && <p className='error-p'>{errors.name}</p>} 
            </div>
            <div className="email">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input type="text" placeholder='Email' name="email" value={formData.email} onChange={handleInputChange} ref={emailInputRef}/>
              {errors.email && <p className='error-p'>{errors.email}</p>} 
            </div>
          </div> 

          <div className="subject">
            <label htmlFor="subject">SUBJECT</label>
            <input type="text"  name="subject"  id="subject" placeholder='SUBJECT' value={formData.subject} onChange={handleInputChange} ref={subjectInputRef}/>
            {errors.subject && <p className='error-p'>{errors.subject}</p>} 
          </div>

          <div className="message">
            <label htmlFor="message">MESSAGE</label>
            <textarea name="message" id="message" placeholder='Message' value={formData.message} onChange={handleInputChange} ref={messageInputRef}/>
            {errors.message && <p className='error-p'>{errors.message}</p>} 
          </div>

          <button type='submit' className='submit-btn'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}