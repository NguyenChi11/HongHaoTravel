import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../../components/Header/Header'
import MenuTab from '../../components/MenuTab/MenuTab'
import BannerTab from '../../components/BannerTab/BannerTab'
import BodyOption from '../../components/BodyOption/BodyOption'
import BodyMission from '../../components/BodyMission/BodyMission'
import "./Home.css"
import { assets } from '../../assets/assets'
import TravelTour from '../../components/TravelTour/TravelTour'
import SliderHome from '../../components/SliderHome/SliderHome';
import ReviewHome from '../../components/ReviewHome/ReviewHome';
import TourGuide from '../../components/TourGuide/TourGuide';
import CloudAnimation from '../../components/CloudAnimation/CloudAnimation';
import Footer from '../../components/Footer/Footer';


gsap.registerPlugin(ScrollTrigger);
const Home = () => {

  const [selectedImage, setSelectedImage] = useState(assets.Map); // ảnh mặc định

  const bodyOption_data = {
    title: "Hong Hao Travel is a travel company in Ha Giang, we specialize in organizing unforgettable tours to explore Ha Giang loop but still focus on the pristine nature of nature."
  }

  const bodyMission_data ={
    text:"START WITH",
    title: "HONG HAO MOTORBIKE TOUR",
    description :"Experience the raw beauty of Hà Giang with our immersive travel adventures. From rugged mountain landscapes to vibrant ethnic cultures, Hà Giang offers a truly unique and authentic experience. Explore remote villages."
  }

  // Khi hover vào item
  const handleHover = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Khi rời khỏi item
  const handleLeave = () => {
    setSelectedImage(assets.Map); // trở về ảnh mặc định
  };

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
    <div className='page-home'>
     <section className='banner-container'>
        <Header/>
        <MenuTab/>
        <BannerTab/>
     </section>
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
     <section className='travelSection-container'>
      <div className='travelSection-map-container-wrap'>
        <div className='travelSection-map-container' >
          <div className='travelSection-map-content'>
            <div className='travelSection-map-tab'>EXPLORE</div>
            <div className='travelSection-map-title'>BEST TRIPS FOR YOU</div>
          </div>
          <div className='travelSection-map-image'>
            <img className='travelSection-map-img' src={selectedImage} alt="" />
          </div>
        </div>
      </div>
      <TravelTour onTourHover={handleHover} onTourLeave={handleLeave}/>
     </section>
     <SliderHome/>
     <section className='reviewSection-container'>
        <ReviewHome/>
        <TourGuide/>
      </section>  
      <section className='cloudSection-container'>
        <CloudAnimation/>
      </section>
      <section className='footerSection-container'>
        <Footer/>
      </section>
      <div className='footer-footer'>
        <span className='footer-footer-span'></span>
        <p className='footer-editor'>© DESIGNED BY OKHUB AGENCY</p>
      </div>
    </div>
  )
}

export default Home
