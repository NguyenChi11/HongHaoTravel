import React from 'react'
import "./BodyMission.css"
import { assets } from '../../assets/assets'

const BodyMission = () => {
  return (
    <div className='bodyMission-container'>
      <div className='bodyMission-container-content'>
        <p className='bodyMission-title-heading'>START WITH</p>
        <h1 className='bodyMission-title'>HONG HAO MOTORBIKE TOUR</h1>
        <p className='bodyMission-content'>Experience the raw beauty of Hà Giang with our immersive travel adventures. From rugged mountain landscapes to vibrant ethnic cultures, Hà Giang offers a truly unique and authentic experience. Explore remote villages.</p>
        <div className='bodyMission-option-list'>
            <div className='bodyMission-option-item'>
                <img className='bodyMission-option-img' src={assets.Tick} alt="" />
                <p className='bodyMission-option-title'>Tours accommodate a maximum of 10 guests</p>
            </div>
            <div className='bodyMission-option-item'>
                <img className='bodyMission-option-img' src={assets.Tick} alt="" />
                <p className='bodyMission-option-title'>Flexible cancellation policy</p>
            </div>
            <div className='bodyMission-option-item'>
                <img className='bodyMission-option-img' src={assets.Tick} alt="" />
                <p className='bodyMission-option-title'>Book now, pay later</p>
            </div>            
            <div className='bodyMission-option-item'>
                <img className='bodyMission-option-img' src={assets.Tick} alt="" />
                <p className='bodyMission-option-title'>Fluent English-speaking guides</p>
            </div>
            <div className='bodyMission-option-item'>
                <img className='bodyMission-option-img' src={assets.Tick} alt="" />
                <p className='bodyMission-option-title'>Creating job opportunities for the Vietnamese community</p>
            </div>
        </div>
        <div className='button-container'>
            <button className='button-container-left'>BOOK NOW <i class="fa-solid fa-arrow-right"></i></button>
            <button className='button-container-right'>ALL TOUR <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      <div className='bodyMission-container-image'>
        <img className='bodyMission-image' src={assets.image_mission} alt="" />
      </div>
    </div>
  )
}

export default BodyMission
