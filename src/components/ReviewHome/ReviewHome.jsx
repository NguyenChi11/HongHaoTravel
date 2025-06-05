import React from 'react'
import "./ReviewHome.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { comment_data } from '../../assets/comment';
import { assets } from '../../assets/assets';
import { sliderHome_data } from '../../assets/slider';

const ReviewHome = () => {
  return (
    <div className='reviewHome-container'>
      <h2 className='reviewHome-title'>CLIENTS SAY</h2>
      <div className='reviewHome-image-wrap'>
        {sliderHome_data.map((item,index)=>(
            <div key={index} className='reviewHome-image' style={{background:`url(${item.image}) no-repeat`}} ></div>
        ))}
      </div>

      <div className='reviewHome-container-comments'>
        <div className='reviewHome-comment-items'>
            {comment_data.map((item,index)=>(
                <div key={index} className='reviewer-container'>
                    <div className='reviewer-info-wrap'>
                        <img className='reviewer-avatar' src={item.image} alt="" />
                        <div className='reviewer-info'>
                            <h3 className='reviewer-name'>{item.name}</h3>
                            <p className='reviewer-date'>{item.date}</p>
                        </div>
                    </div>
                    <img className='reviewer-icon' src={assets.icon_reviewer} alt="" />
                    <div className='reviewer-stars'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p className='reviewer-text'>{item.text}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewHome
