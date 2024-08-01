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
      <div style={imageContainerStyle}>
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

// Styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  maxWidth: 'full',
  margin: '0 auto',
  backgroundColor: '#f0e6d9',
  borderRadius: '20px',
  overflow: 'hidden',
};

const imageContainerStyle = {
  flex: '1',
  order: '1',
  padding: '40px',
  textAlign: 'center',
  backgroundColor: '#e8d9c6',
};

const formContainerStyle = {
  flex: '1',
  order: '2',
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
  borderRadius: '40px',
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

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '10px',
};

/* Media Query for Responsive Design */
const mediaQueryStyle = `
@media (max-width: 991.98px) {
  .container {
    flex-direction: column;
  }
  .image-container {
    order: 1;
    padding: 20px;
  }
  .form-container {
    order: 2;
    padding: 20px;
  }
}
`;

// Add the media query to the document's style
const styleElement = document.createElement('style');
styleElement.textContent = mediaQueryStyle;
document.head.append(styleElement);

export default QuoteForm;