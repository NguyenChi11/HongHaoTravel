import React, { useEffect, useState } from 'react'
import "./Header.css"
import { assets } from '../../assets/assets'


const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false); // Cuộn xuống -> ẩn
      } else {
        setShow(true);  // Cuộn lên -> hiện
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 60) {
        setShow(true); // Di chuột gần đầu trang -> hiện lại
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <div className={`header-container-wrap ${show ? '' : 'hide'} `}>
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
