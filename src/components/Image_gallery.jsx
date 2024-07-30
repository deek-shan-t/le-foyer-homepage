import React from 'react';
import './Image_gallery.css';
import imggallery from '../assets/handover.png';

function Image_gallery() {
  return (
    <>
      <div id='image_gallery_heading'>
        <h3 className='center'>
          Image Gallery
        </h3>
      </div>
      <div className="container">
        {[...Array(9)].map((_, index) => (
          <img src={imggallery} alt={`Gallery ${index + 1}`} key={index} className="gallery-image" />
        ))}
      </div>
    </>
  );
}

export default Image_gallery;
