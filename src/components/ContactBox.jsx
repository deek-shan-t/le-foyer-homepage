import React from 'react';
import './Contact_box.css';
import img1 from '../pngwing.com (18).png';
import img2 from '../pngwing.com (15).png';
import img3 from '../pngwing.com (20).png';
import img4 from '../pngwing.com (19).png';
function Contact_box() {
  return (
    <>
    <div className="contact_box">
    <h3 className='box_heading center' >GET IN TOUCH</h3>
    <p className='text_style justify'>Office no. 233, Xion Mall, Hinjewadi
Phase 1 Rd, Hinjawadi Village,
Hinjawadi, Pune, Pimpri-Chinchwad,
Maharashtra 411057</p>
<p className=' text_style justify underline'>077969 73767</p>
<p className='text_style justify'>inquiryl@lefoyerdecor.com</p>
<div id='imgbox'>
  <img src={img1} alt="" />
  <img src={img2} alt="" />
  <img src={img3} alt="" />
  <img src={img4} alt="" />
</div>

    </div>
    </>
  );
}

export default Contact_box;
