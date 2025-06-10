import React, { useState } from 'react'
import "./SectionTravel.css"
import { assets } from '../../assets/assets';
import TravelTour from '../../components/TravelTour/TravelTour';

const SectionTravel = () => {

    
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
  )
}

export default SectionTravel
