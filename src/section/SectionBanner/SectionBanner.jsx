import React from 'react'
import "./SectionBanner.css"
import MenuTab from '../../components/MenuTab/MenuTab'
import BannerTab from '../../components/BannerTab/BannerTab'


const SectionBanner = () => {
  return (
     <section className='banner-container'>
        <MenuTab/>
        <BannerTab/>
     </section>
  )
}

export default SectionBanner
