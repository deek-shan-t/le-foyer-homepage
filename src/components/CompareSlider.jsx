import React, { useEffect } from 'react'
import './CompareSlider.css'
import { useState, useRef } from 'react'
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { motion,useInView, useAnimationControls} from 'framer-motion'
import { Link } from 'react-router-dom';
function CompareSlider() {
  const ref = useRef();
  const ref1 = useRef();
  const controls = useAnimationControls();
  const controls1 = useAnimationControls();
  const isInview = useInView(ref);
  const isInview1 = useInView(ref1);
  useEffect(()=>{
    if(isInview){
        controls.start({scaleX:1,scaleY:1,y:0,opacity:1,transition:{duration:0.7, type:'spring'}})
    }
  },[isInview,controls])
  useEffect(()=>{
    if(isInview1){
        controls1.start({scaleX:1,scaleY:1,y:0,opacity:1,transition:{duration:0.4, type:'keyframes'}})
    }
  },[isInview1,controls1])
  const [project_number, setProjectNumber] = useState(1);
  // Image reesource can be changed after creating the asset folder
  const left_image_resource = ["https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/5644353/pexels-photo-5644353.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/23916863/pexels-photo-23916863/free-photo-of-luxury-interior-design.png?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/23916869/pexels-photo-23916869/free-photo-of-interior-design-of-luxury-living-room.png?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/23916837/pexels-photo-23916837/free-photo-of-pool-in-house.png?auto=compress&cs=tinysrgb&w=600"]
  const right_image_resource = ["https://images.pexels.com/photos/23119651/pexels-photo-23119651/free-photo-of-interior-design-of-a-house.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/210547/pexels-photo-210547.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600"]
  const ProjectTitles = ["Project1", "Project2", "Project3", "Project4", "Project5", "Project6"];
  return (
    <div className='CompareSliderSection'>

      {/* Heading of the section */}
      <div className='sliderHead'>
        <h1 className='SliderSectionTopHeading'>
          Before & After: Stunning Transformations
        </h1>
        <h4 className='SliderSectionSubHeading'>
          Explore our stunning transformations and envision your space anew
        </h4>
      </div>

      {/* Project title bar */}
      <motion.div initial={{ scaleX: 0, y: 20, scaleY: 0, opacity: 1 }} animate={controls1} ref={ref1} className='SliderProjectTitleBar'>
  {ProjectTitles.map((title, index) => (
    <div className="ProjectTItles" key={index + 1} onClick={() => { setProjectNumber(index + 1) }}>{title}</div>
  ))}

  {/* Insert the Link Here for navigating the user to the gallery */}
  <div style={{ marginLeft: '10px', marginRight: '10px' }}>
    <Link to="./Image_gallery">Explore More+</Link>
  </div>
</motion.div>

      {/* Comparison Slider */}
      <motion.div initial={{scaleX:0,scaleY:0,opacity:0}} animate={{scaleX:1,scaleY:1,opacity:1,transition:{duration:0.7,type:'spring'}}} className='ComparisonSliderCont'>
        <ImgComparisonSlider className='ComparisonSlider'>
          <img slot="first" src={left_image_resource[project_number - 1]} className='compImages' alt='image1'/>
          <img slot="second" src={right_image_resource[project_number - 1]} className='compImages' alt='image1'/>
        </ImgComparisonSlider>
      </motion.div>

      {/* Start Transform Button */}
      <motion.div initial={{scaleX:0,scaleY:0,y:80,opacity:0}} animate={controls} ref={ref} className='SliderBottomButton'><Link to={"design_quiz"} style={{textDecoration:'none',color:"white"}} >START MY TRANSFORMATION</Link></motion.div>
    </div>
  )
}

export default CompareSlider