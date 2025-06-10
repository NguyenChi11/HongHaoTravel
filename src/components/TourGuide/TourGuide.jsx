import React, { useState } from "react";
// import { gsap } from "gsap";
import "./TourGuide.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { riderTeam_data, tourGuide_data } from '../../assets/tour-guide';

const TourGuide = ({text,title,description}) => {

  const [selected, setSelected] = useState("tour-guide");

  const handleSelect = (type) => {
    setSelected(type);
  };

  const currentRequests = selected === "tour-guide" ? tourGuide_data : riderTeam_data;


  return (
    <div className='tourGuide-container-wrap'>
        <div className='tourGuide-item-tags'>
            <div onClick={() => handleSelect("tour-guide")} className={`tourGuide-tag ${selected === 'tour-guide' ? 'action' :''}` }>TOUR GUIDE</div>
            <div onClick={() => handleSelect("rider-team")} className={`tourGuide-tag ${selected === 'rider-team' ? 'action' :''}` }>RIDER TEAM</div>
        </div>
        <div className="tourGuide-container-items">
            <div className='tourGuide-container-content'>
                <div className="tourGuide-title-header-wrap">
                    <p className='tourGuide-title-header'>{text}</p>
                    <h2 className='tourGuide-title'>{title}</h2>
                </div>
                <p className='tourGuide-text'>{description}</p>
                <div className='tourGuide-button-wrap'>
                    <button className='tourGuide-button-1'>Join with us <i class="fa-solid fa-arrow-right"></i></button>
                    <button className='tourGuide-button-2'>Call us <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
                <div className='tourGuide-items'>
                    <Splide
                        options={{
                        type: 'loop',
                        perPage: 3,
                        perMove: 1,
                        // autoplay: true,
                        interval: 2000,
                        pauseOnHover: false,
                        pagination: false,
                        autoWidth: true,
                        gap: '1rem',
                    }}
                    >
                        {currentRequests.map((item,index)=>(
                            <SplideSlide key={index}>
                                <div className='tourGuide-item'>
                                    <div className="tourGuide-item-img-wrap">
                                        <img className='tourGuide-item-img' src={item.image} alt="" />
                                    </div>
                                    <div className="tourGuide-item-info">                               
                                        <p className='tourGuide-item-name'> {item.name}</p>
                                        <div className='tourGuide-info-wrap'>
                                            <p className='tourGuide-profession'>{item.profession}</p>
                                            <div className='tourGuide-circle'></div>
                                            <p className='tourGuide-exp'>{item.experience}</p>
                                        </div>
                                        <p className='tourGuide-text-item'>{item.text}</p>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </div>
  )
}

export default TourGuide
