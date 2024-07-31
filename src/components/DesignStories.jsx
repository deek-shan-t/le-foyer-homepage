import React from 'react';
import './Design_Stories.css';
import happyfam from '../happyfam.png';
import img2 from '../pngwing.com (21).png';

function Design_Stories() {
  return (
    <div className="center">
      <h2 className='heading' id='design_heading'>DESIGN STORIES!</h2>
      <p className='heading' id='design_sub_heading'>Client Reviews</p>
      
      <div className="container">
        <div className="row_left justify">
          <p id='button2' className='review_boxs_heading_ize'>Mr. Shah and Family</p>
          <p className='justify'>
            "We couldn't be happier with the transformation Le Foyer Decor brought to our home. Their
            attention to detail and dedication to understanding our style made the entire process seamless
            and enjoyable. Every room now feels like a reflection of us, and we can't wait to show it off to our
            friends and family!"
          </p>
        </div>
        <div className="row_right">
          <img src={happyfam} alt="Mr. Shah and Family" id='design_stories_img' height={250} />
        </div>
      </div>
      
      <div className="steps">
        <div className="blocks">
          <h3 id='heading_review'>4.5</h3>
          <img src={img2} alt="Star" height={20} />
          <img src={img2} alt="Star" height={20} />
          <img src={img2} alt="Star" height={20} />
          <img src={img2} alt="Star" height={20} />
          <img src={img2} alt="Star" height={20} />
          <p>BASED ON GOOGLE REVIEWS</p>
        </div>
        {[...Array(4)].map((_, index) => (
          <div className="blocks" key={index}>
            <img src={happyfam} alt={`Step ${index + 2}`} className="reviews" />
            <p id='button2'>Mr. Shah and Family</p>
            <p className="justify">
              We are highly satisfied with your experienced workmanship. The team is
              quite professional. We pray God for your further upliftment. Wish you all the best.
            </p>
          </div>
        ))}
      </div>
      
      <a href="#start" className="button">JOIN US</a>
    </div>
  );
}

export default Design_Stories;
