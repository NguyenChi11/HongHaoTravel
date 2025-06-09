import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import "./BodyMission.css"
import { assets } from '../../assets/assets'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const BodyMission = ({text, title , description}) => {

const pathRef = useRef(null);
const iconRef = useRef(null);
const imageRef = useRef(null)

  useEffect(() => {
    const path = pathRef.current;
    const icon = iconRef.current;
    const length = path.getTotalLength();

    // 1. Vẽ đường trước
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: path,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power2.out',
    });

    // 2. Sau 2s, chạy icon theo đường path
    tl.to(icon, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 4,
      ease: 'power1.inOut',
    }, "+=0.2"); // chờ 0.2s sau khi vẽ xong
  }, []);


  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: '100vw', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);


  const data_title = [
    {title:"Tours accommodate a maximum of 10 guests"},
    {title:"Flexible cancellation policy"},
    {title:"Book now, pay later"},
    {title:"Fluent English-speaking guides"},
    {title:"Creating job opportunities for the Vietnamese community"},
  ]

  return (
    <div className='bodyMission-container'>
      <div className='bodyMission-container-content'>
        <p className='bodyMission-title-heading'>{text}</p>
        <h1 className='bodyMission-title'>{title}</h1>
        <p className='bodyMission-content'>{description}</p>
        <div className='bodyMission-option-list'>
          {data_title.map((item,index)=>(
            <div key={index} className='bodyMission-option-item'>
                <img className='bodyMission-option-img' src={assets.Tick} alt="" />
                <p className='bodyMission-option-title'>{item.title}</p>
            </div>
          ))}
        </div>
        <div className='button-container'>
            <button className='button-container-left'>BOOK NOW <i class="fa-solid fa-arrow-right"></i></button>
            <button className='button-container-right'>ALL TOUR <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>

      <div className='bodyMission-scroll-svg'>
        <svg className='bodyMission-img-svg'
        viewBox="0 0 100 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
          <path
            ref={pathRef}
            d="M12.1582 1.89551C9.56033 24.1217 1.63281 54.4379 1.63281 76.8445C1.63281 94.6201 5.52653 113.236 2.49001 130.848C-1.15298 151.977 12.7991 186.622 24.8723 203.614C41.5076 227.027 56.6881 254.78 62.9698 283.047C67.5053 303.457 66.8678 323.635 63.7318 344.194C62.2826 353.694 63.8138 363.39 62.3031 372.957C60.6279 383.567 58.2166 394.057 56.1123 404.578C52.6306 421.987 46.8569 437.015 36.7778 451.915C29.2215 463.085 23.0426 472.206 22.1102 485.726C20.9194 502.992 12.5121 520.164 9.34756 537.253C6.60436 552.066 10.2048 566.045 10.2048 580.684C10.2048 603.727 8.36815 626.026 14.9669 648.022C21.4484 669.626 13.2051 691.359 15.3479 712.787"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />

          <image className='motobike'
            ref={iconRef}
            href={assets.motobike}
          />
          </svg>
      </div>

      <div ref={imageRef} className='bodyMission-container-image'>
        <img className='bodyMission-image' src={assets.image_mission} alt="" />
      </div>
    </div>
  )
}

export default BodyMission
