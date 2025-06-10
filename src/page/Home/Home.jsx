import React from 'react';
import "./Home.css"
import SliderHome from '../../components/SliderHome/SliderHome';
import ReviewHome from '../../components/ReviewHome/ReviewHome';
import TourGuide from '../../components/TourGuide/TourGuide';
import CloudAnimation from '../../components/CloudAnimation/CloudAnimation';
import SectionBanner from '../../section/SectionBanner/SectionBanner';
import SectionBody from '../../section/SectionBody/SectionBody';
import SectionTravel from '../../section/SectionTravel/SectionTravel';


const Home = () => {

  const TourGuide_data = {
    text: "HONG HAO TRAVEL",
    title: "OUR TEAM",
    description: "We pride ourselves on having a team of dedicated and passionate individuals who are committed to providing exceptional service and unforgettable experiences to our guests. Our team is comprised of knowledgeable professionals with diverse backgrounds and expertise in various aspects of the tourism industry."
  }


  return (
    <div className='page-home'>
     <SectionBanner/>
     <SectionBody/>
     <SectionTravel/>
     <SliderHome/>
     <section className='reviewSection-container'>
        <ReviewHome/>
        <TourGuide
          text = {TourGuide_data.text}
          title = {TourGuide_data.title}
          description={TourGuide_data.description}
        />
      </section>  
      <CloudAnimation/>
    </div>
  )
}

export default Home
