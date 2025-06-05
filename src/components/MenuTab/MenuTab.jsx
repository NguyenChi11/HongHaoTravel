import React from 'react'
import "./MenuTab.css"
import { assets } from '../../assets/assets'

const MenuTab = () => {
  return (
    <div className='menu-tab-container'>
      <div className="menu_icon_1">
        <p className='menu_icon_title'>BOOK NOW</p>
      </div>
      <div className="menu_icon_2">
        <img className='menu_icon_img' src={assets.Icon_1} alt="" />
      </div>
      <div className="menu_icon_3">
        <img className='menu_icon_img' src={assets.Icon_2} alt="" /></div>  
    </div>
  )
}

export default MenuTab 
