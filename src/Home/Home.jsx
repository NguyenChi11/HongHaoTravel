import React, { useState } from 'react';
import Header from '../components/Header/Header'
import MenuTab from '../components/MenuTab/MenuTab'
import BannerTab from '../components/BannerTab/BannerTab'
import BodyOption from '../components/BodyOption/BodyOption'
import BodyMission from '../components/BodyMission/BodyMission'
import "./Home.css"
import { assets } from '../assets/assets'
import TravelTour from '../components/TravelTour/TravelTour'
import SliderHome from '../components/SliderHome/SliderHome';
import ReviewHome from '../components/ReviewHome/ReviewHome';

const Home = () => {

  const [selectedImage, setSelectedImage] = useState(assets.Map); // ảnh mặc định

  // Khi hover vào item
  const handleHover = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Khi rời khỏi item
  const handleLeave = () => {
    setSelectedImage(assets.Map); // trở về ảnh mặc định
  };
  return (
    <>
     <section className='banner-container'>
        <Header/>
        <MenuTab/>
        <BannerTab/>
     </section>
     <section className='bodySection-container'>
        <div className='bodySection-mountain'><img src={assets.Mountain} alt="" /></div>
        <BodyOption/>
        <div className='bodySection-arrow-down'>
          <p className='bodySection-arrow-down-title'>EXPLORE YOUR JOURNEY WITH US</p>
          <img src={assets.arrowDown} alt="" />
        </div>
        <BodyMission/>
        <div className='bodySection-welcome-container'>
          <p className='bodySection-welcome'>WELCOME TO</p>
          <h2 className='bodySection-welcome-title'>HA GIANG NATURALLY</h2>
          <img className='bodySection-welcome-img-title' src={assets.Beautiful} alt="" />
          <img className='bodySection-welcome-img' src={assets.HaGiang} alt="" />
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
        <TravelTour/>
      </section>  
    </>
  )
}

export default Home
