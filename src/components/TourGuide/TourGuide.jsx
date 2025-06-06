import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import "./TourGuide.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { riderTeam_data, tourGuide_data } from '../../assets/tour-guide';

const TourGuide = () => {

  const [selected, setSelected] = useState("tour-guide");

  const handleSelect = (type) => {
    setSelected(type);
  };

  const currentRequests = selected === "tour-guide" ? tourGuide_data : riderTeam_data;

  const [activeIndex, setActiveIndex] = useState(null);
  const timeoutRef = useRef(null);
  const itemRefs = useRef([]);


  const handleClick = (index) => {
    if (activeIndex !== null && activeIndex !== index) {
      resetItem(activeIndex);
    }

    setActiveIndex(index);
    const item = itemRefs.current[index];

    gsap.to(item.querySelector(".tourGuide-item-img"), {
      scaleY: 0.8,
      y: -10,
      duration: 0.5,
    });

    gsap.to(item.querySelector(".tourGuide-item-info"), {
      y: -10,
      opacity: 1,
      duration: 0.4,
    });

    gsap.to(item.querySelector(".tourGuide-text-item"), {
      height: "auto",
      opacity: 1,
      duration: 0.5,
      delay: 0.2,
    });

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!item.matches(":hover")) {
        resetItem(index);
        setActiveIndex(null);
      }
    }, 2000);
  };

  const resetItem = (index) => {
    const item = itemRefs.current[index];
    if (!item) return;

    gsap.to(item.querySelector(".tourGuide-item-img"), {
      scale: 1,
      y: 0,
      duration: 0.5,
    });

    gsap.to(item.querySelector(".tourGuide-item-info"), {
      y: 0,
      opacity: 1,
      duration: 0.4,
    });


    gsap.to(item.querySelector(".tourGuide-text-item"), {
      height: 0,
      opacity: 0,
      duration: 0.5,
    });
  };
  return (
    <div className='tourGuide-container-wrap'>
        <div className='tourGuide-item-tags'>
            <div onClick={() => handleSelect("tour-guide")} className={`tourGuide-tag ${selected === 'tour-guide' ? 'action' :''}` }>TOUR GUIDE</div>
            <div onClick={() => handleSelect("rider-team")} className={`tourGuide-tag ${selected === 'rider-team' ? 'action' :''}` }>RIDER TEAM</div>
        </div>
        <div className="tourGuide-container-items">
            <div className='tourGuide-container-content'>
                <div className="tourGuide-title-header-wrap">
                    <p className='tourGuide-title-header'>HONG HAO TRAVEL</p>
                    <h2 className='tourGuide-title'>OUR TEAM</h2>
                </div>
                <p className='tourGuide-text'>We pride ourselves on having a team of dedicated and passionate individuals who are committed to providing exceptional service and unforgettable experiences to our guests. Our team is comprised of knowledgeable professionals with diverse backgrounds and expertise in various aspects of the tourism industry.</p>
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
                        focus: 'center',
                        // autoplay: true,
                        interval: 2000,
                        pauseOnHover: false,
                        pagination: false,
                        autoWidth: true,
                        gap: '1.5rem',
                    }}
                    >
                        {currentRequests.map((item,index)=>(
                            <SplideSlide key={index}>
                                <div className='tourGuide-item' 
                                    key={item.id}
                                    ref={(el) => (itemRefs.current[index] = el)}
                                    onClick={() => handleClick(index)}
                                    >
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
                                    </div>
                                    <p className='tourGuide-text-item'>{item.text}</p>
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
