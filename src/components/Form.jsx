import React, { useState } from 'react';
import './Form.css'
const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='ParentContainer'>
      <div className='sideImage'>
        <img src="3.jpg" alt="Interior Design" className='HeroImage' />
      </div>
      <div className='FormContainer'>
        <h2 className='FormTitle'>DESIGNS FOR EVERY NEED</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="NAME"
            className='inputfield'
          />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="CONTACT"
            className='inputfield'
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="YOUR MAIL ID"
            className='inputfield'
          />
          <button type="submit" className='SubmitButton'>
            GET A FREE QUOTE
          </button>
        </form>
      </div>
    </div>
  );
};
export default QuoteForm;