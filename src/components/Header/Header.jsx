import React from 'react'
import "./Header.css"
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header-container-wrap'>
      <div className='header-container'>
        <div className='header-image'>
          <img className='header-img' src={assets.Logo} alt="" />
        </div>
        <div className='header-menu'>
          <i class="fa-solid fa-bars"></i>
          <p className='header-menu-title'>MENU</p>
        </div>
      </div>
    </div>
  )
}

export default Header
