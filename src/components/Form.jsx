import React, { useState } from 'react';

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
    <div style={containerStyle}>
     <div style={leftSectionStyle}>
     
     <img src="3.jpg" alt="Interior Design" style={imageStyle} />

   </div>
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>DESIGNS FOR<br />EVERY NEED</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="NAME"
            style={inputStyle}
          />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="CONTACT"
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="YOUR MAIL ID"
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            GET A FREE QUOTE
          </button>
        </form>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  maxWidth: '1200px',
  margin: '0 auto',
  backgroundColor: '#f0e6d9',
  borderRadius: '20px',
  overflow: 'hidden',
};

const leftSectionStyle = {
  flex: '2',
  padding: '40px',
  color: '#8b6b4a',
  backgroundColor: '#e8d9c6',
};

const headingStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '20px',
  lineHeight: '1.2',
};

const paragraphStyle = {
  fontSize: '16px',
  marginBottom: '20px',
  lineHeight: '1.5',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  marginBottom: '20px',
  borderRadius: '10px',
};

const footerStyle = {
  fontSize: '14px',
};

const formContainerStyle = {
  flex: '1',
  backgroundColor: '#fdf6ed',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const titleStyle = {
  color: '#8b6b4a',
  fontSize: '24px',
  marginBottom: '30px',
  fontWeight: 'bold',
  lineHeight: '1.2',
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '15px 10px',
  marginBottom: '20px',
  border: 'none',
  backgroundColor: '#fdf6ed',
  borderBottom: '1px solid #e0d5c5',
  fontSize: '14px',
  color: '#8b6b4a',
  borderRadius:'40px',
};

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '15px',
  border: 'none',
  borderRadius: '50px',
  backgroundColor: '#c69c6d',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '10px',
};

export default QuoteForm;