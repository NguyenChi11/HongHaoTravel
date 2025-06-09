import React from 'react'
import "./ReviewHome.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { comment_data, reviewer_data } from '../../assets/comment';
import { assets } from '../../assets/assets';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // CSS mặc định của Splide



const ReviewHome = () => {
  return (
    <div className='reviewHome-container'>
      <div className='reviewHome-title-container-wrap'>
        <p className='reviewHome-title-heading'>READ WHAT OUR RECENT</p>
        <h2 className='reviewHome-title'>CLIENTS SAY</h2>
      </div>
      <div className='reviewHome-image-wrap'>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
        >
          {reviewer_data.map((item,index)=>(
            <SwiperSlide key={index}>
              <div className='reviewHome-image' style={{background:`url(${item.image}  ) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center'}} /> 
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

      <div className='reviewHome-container-comments'>
        <div className='reviewHome-comment-items'>
            {comment_data.map((item,idx)=>(
                <div key={idx} className={`reviewer-comment-item reviewer-container-${item.index}`}>
                    <div className='review-info-container-wrap'>
                      <div className='reviewer-info-wrap'>
                          <img className='reviewer-avatar' src={item.image} alt="" />
                          <div className='reviewer-info'>
                              <h3 className='reviewer-name'>{item.name}</h3>
                              <p className='reviewer-date'>{item.date}</p>
                          </div>
                      </div>
                      <img className='reviewer-icon' src={assets.icon_reviewer} alt="" />
                    </div>
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

      <div className='reviewHome-container-comments-mobile'>
            <Splide
              options={{
              type: "loop",
              perPage: 2,
              perMove: 1,
              gap: "12px",
              pauseOnHover: true,
              pagination: false,
          }}
            >
              {comment_data.map((item,index)=>(
                <SplideSlide key={index}>
                  <div className='reviewer-comment-item'>
                    <div className='review-info-container-wrap'>
                      <div className='reviewer-info-wrap'>
                          <img className='reviewer-avatar' src={item.image} alt="" />
                          <div className='reviewer-info'>
                              <h3 className='reviewer-name'>{item.name}</h3>
                              <p className='reviewer-date'>{item.date}</p>
                          </div>
                      </div>
                      <img className='reviewer-icon' src={assets.icon_reviewer} alt="" />
                    </div>
                    <div className='reviewer-stars'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p className='reviewer-text'>{item.text}</p>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
      </div>
      <div className='reviewer-icon-wrap'>
        <p className='reviewer-icon-title'>View us on</p>
        <div className='reviewer-icon-list'>
          <img className='reviewer-icon-item' src={assets.icon_reviewer} alt="" />
          <img className='reviewer-icon-item' src={assets.instagram} alt="" />
          <img className='reviewer-icon-item' src={assets.facebook} alt="" />
          <img className='reviewer-icon-item' src={assets.tiktok} alt="" />
        </div>
      </div>
      <img className='reviewer-border' src={assets.image_border} alt="" />
    </div>
  )
}

export default ReviewHome
