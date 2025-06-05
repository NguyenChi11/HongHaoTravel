import React from 'react'
import "./BodyOption.css"
import { assets } from '../../assets/assets'

const BodyOption = () => {
  return (
    <div className='bodyOption-container'>
      <div className='bodyOption-Logo'>
        <img src={assets.image_H} alt="" />
      </div>
      <div className='bodyOption-title-container'>
        <h2 className='bodyOption-title'>
            Hong Hao Travel is a travel company in Ha Giang, we specialize in organizing unforgettable tours to explore Ha Giang loop but still focus on the pristine nature of nature.
        </h2>
      </div>
      <div className='bodyOption-list'>
        <div className="bodyOption-items">
            <p className='bodyOption-item'>13 years experience</p>
        </div>
        <div className="bodyOption-items">
            <p className='bodyOption-item'>Personalization</p>
        </div>
        <div className="bodyOption-items">
            <p className='bodyOption-item'>Tour guide with good English</p>
        </div>
        <div className="bodyOption-items">
            <p className='bodyOption-item'>10.000 customers</p>
        </div>
        <div className="bodyOption-items">
            <p className='bodyOption-item'>Unique Experiences</p>
        </div>
      </div>
    </div>
  )
}

export default BodyOption
