import React from 'react';
import './Image_gallery.css';

// Import all images
import imgg1 from '../assets/imgg1.jpg';
import imgg2 from '../assets/imgg2.jpg';
import imgg3 from '../assets/imgg3.jpg';
import imgg4 from '../assets/imgg4.jpg';
import imgg5 from '../assets/imgg5.jpg';
import imgg6 from '../assets/imgg6.jpg';
import imgg7 from '../assets/imgg7.jpg';
import imgg8 from '../assets/imgg8.jpg';
import imgg9 from '../assets/imgg9.jpg';
import imgg10 from '../assets/imgg10.jpg';
import imgg11 from '../assets/imgg11.jpg';
import imgg12 from '../assets/imgg12.jpg';
import imgg13 from '../assets/imgg13.jpg';
import imgg14 from '../assets/imgg14.jpg';
import imgg15 from '../assets/imgg15.jpg';
import imgg16 from '../assets/imgg16.jpg';
import imgg17 from '../assets/imgg17.jpg';
import imgg18 from '../assets/imgg18.jpg';
import img19 from '../assets/img19.jpg';
import img20 from '../assets/img20.jpg';
import imgg21 from '../assets/imgg21.jpg';
import imgg22 from '../assets/imgg22.jpg';
import imgg23 from '../assets/imgg23.jpg';
import imgg24 from '../assets/imgg24.jpg';

const images = [
  imgg1, imgg2, imgg3, imgg4, imgg5, imgg6, imgg7, imgg8, imgg9,
  imgg10, imgg11, imgg12, imgg13, imgg14, imgg15, imgg16, imgg17, imgg18,
  img19, img20, imgg21, imgg22, imgg23, imgg24
];

function Image_gallery() {
  return (
    <>
      <div id='image_gallery_heading'>
        <h3 className='center'>
          Image Gallery
        </h3>
      </div>
      <div className="container">
        {images.map((img, index) => (
          <img src={img} alt={`Gallery ${index + 1}`} key={index} className="gallery-image" />
        ))}
      </div>
    </>
  );
}

export default Image_gallery;
