import React, { useEffect, useRef, useState } from 'react';
import "./SectionBody.css"
import BodyOption from '../../components/BodyOption/BodyOption'
import BodyMission from '../../components/BodyMission/BodyMission'
import { assets } from '../../assets/assets';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
const SectionBody = () => {
    const bodyOption_data = {
    title: "Hong Hao Travel is a travel company in Ha Giang, we specialize in organizing unforgettable tours to explore Ha Giang loop but still focus on the pristine nature of nature."
  }

  const bodyMission_data ={
    text:"START WITH",
    title: "HONG HAO MOTORBIKE TOUR",
    description :"Experience the raw beauty of Hà Giang with our immersive travel adventures. From rugged mountain landscapes to vibrant ethnic cultures, Hà Giang offers a truly unique and authentic experience. Explore remote villages."
  }

    const imgRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);

      useEffect(() => {
    ScrollTrigger.matchMedia({
      // Desktop
      '(min-width: 376px)': function () {
        const trigger = ScrollTrigger.create({
          trigger: imgRef.current,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            setIsFixed(true);
            gsap.to(imgRef.current, {
              width: '100rem',
              height: '48.75rem',
              top: 0,
              left: 0,
              borderRadius: '1rem',
              duration: 1,
              ease: 'power2.out',
            });
          },
          onLeaveBack: () => {
            setIsFixed(false);
            gsap.to(imgRef.current, {
              width: '52rem',
              height: '29.8125rem',
              top: '0',
              left: '5vw',
              borderRadius: '1rem',
              duration: 1,
              ease: 'power2.inOut',
            });
          },
        });

        return () => trigger.kill();
      },

      // Mobile
      '(max-width: 376px)': function () {
        const trigger = ScrollTrigger.create({
          trigger: imgRef.current,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            setIsFixed(true);
            gsap.to(imgRef.current, {
              width: '23.5rem',
              height: '13.125rem',
              top: 0,
              left: 0,
              borderRadius: '1rem',
              duration: 1,
              ease: 'power2.out',
            });
          },
          onLeaveBack: () => {
            setIsFixed(false);
            gsap.to(imgRef.current, {
              width: '12.42269rem',
              height: '6.98775rem',
              top: '0',
              left: '10vw',
              borderRadius: '1rem',
              duration: 1,
              ease: 'power2.inOut',
            });
          },
        });

        return () => trigger.kill();
      },
    });
  }, []);

   const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !loaded) {
            imgRef.current.src =
              'https://www.youtube.com/embed/K4j4FR5tUtU?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=K4j4FR5tUtU';
            setLoaded(true);
          }
        },
        {
          threshold: 0.5,
        }
      );
  
      if (imgRef.current) {
        observer.observe(imgRef.current);
      }
  
      return () => observer.disconnect();
    }, [loaded]);

  return (
     <section className='bodySection-container'>
        <div className='bodySection-mountain'><img className='bodySection-mountain-image' src={assets.Mountain} alt="" /></div>
        <BodyOption
          title = {bodyOption_data.title}
        />
        <div className='bodySection-arrow-down'>
          <p className='bodySection-arrow-down-title'>EXPLORE YOUR JOURNEY WITH US</p>
          <img className='bodySection-arrow-down-img' src={assets.arrowDown} alt="" />
        </div>
        <BodyMission
          text = {bodyMission_data.text}
          title   = {bodyMission_data.title}
          description={bodyMission_data.description}
        />
        <div className='bodySection-welcome-container'>
          <div className='bodySection-welcome-text-container'>
            <p className='bodySection-welcome'>WELCOME TO</p>
            <h2 className='bodySection-welcome-title'>HA GIANG NATURALLY</h2>
            <img className='bodySection-welcome-img-title' src={assets.Beautiful} alt="" />
          </div>
          <iframe  ref={imgRef} className={`bodySection-welcome-img ${isFixed ? 'fixed' : ''}`} 
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen 
          />
        </div>
     </section>
  )
}

export default SectionBody
