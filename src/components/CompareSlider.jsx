import React from 'react'
import './CompareSlider.css'
import { useState } from 'react'
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { Link } from 'react-router-dom';
function CompareSlider() {
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
      <div className='SliderProjectTitleBar'>
        {ProjectTitles.map((title, index) => (
          <div key={index + 1} onClick={() => { setProjectNumber(index + 1) }}>{title}</div>
        ))}

        {/* TODO: Insert the Link Here for navigating the user to the gallery */}
        <div>Explore More+</div>
      </div>

      {/* Comparison Slider */}
      <div className='ComparisonSliderCont'>
        <ImgComparisonSlider className='ComparisonSlider'>
          <img slot="first" src={left_image_resource[project_number-1]} className='compImages'/>
          <img slot="second" src={right_image_resource[project_number-1]} className='compImages' />
        </ImgComparisonSlider>
      </div>

      {/* Start Transform Button */}
      <Link to={"design_quiz"} className='SliderBottomButton'>START MY TRANSFORMATION</Link>
    </div>
  )
}

export default CompareSlider