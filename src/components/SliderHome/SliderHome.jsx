import React from 'react'
import "./SliderHome.css"
import { assets } from '../../assets/assets'
import { sliderHome_data } from '../../assets/slider'

const SliderHome = () => {
  return (
    <div className='sliderHome-container-wrap'>
      <div className='sliderHome-title-left-container'>
        <img className='sliderHome-title-left' src={assets.OUR_GALLERY} alt="" />
      </div>
      <div className='sliderHome-container'>
        <div className='sliderHome-title-wrap'>
            <h2 className='sliderHome-title'>THE GLADDEST MOMENT</h2>
            <img className='sliderHome-logo' src={assets.logo_circle} alt="" />
            <div className='sliderHome-content-wrap'>
                <p className='sliderHome-content'>Don't hesitate to pick up your backpack and go. When you reach your destination and see all the beautiful things in sight, you will know that your efforts were worth it</p>
            </div>
        </div>
        <div className='sliderHome-slider-wrap'>
            <div className='sliderHome-slider-1'>
                {sliderHome_data.concat(sliderHome_data).map((icon,index)=>(
                    <img key={index} className='sliderHome-image' src={icon.image} alt="" />
                ))}
            </div>
            <div className='sliderHome-slider-2'>
                {sliderHome_data.concat(sliderHome_data).map((icon,index)=>(
                    <img key={index} className='sliderHome-image' src={icon.image} alt="" />
                    
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default SliderHome
