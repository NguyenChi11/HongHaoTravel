import React, { useState, useRef, useEffect } from 'react';
import { option_days, option_type_tour } from '../../assets/assets';
import "./BannerTab.css"

const BannerTab = () => {
    const [selectedDay, setSelectedDay] = useState ('5 days 4 night');
    const [selectedTypeTour,setSelectedTypeTour] = useState('Best Budget');
    const [openDay, setOpenDay] = useState(false); 
    const [openTypeTour, setOpenTypeTour] = useState(false); 
    const [paxSelf, setPaxSelf] = useState(5);
    const [paxPrivate, setPaxPrivate] = useState(5);
    const dropdownRefDay = useRef(null);
    const dropdownRefTypeTour =useRef(null);

    const toggleDropdownDay = () => setOpenDay(!openDay)
    const toggleDropdownTypeTour = () => setOpenTypeTour(!openTypeTour)

    const handleSelect = (value) => {
    setSelectedDay(value);
    setOpenDay(false);
  };

    const handleSelectTypeTour = (value) => {
    setSelectedTypeTour(value);
    setOpenTypeTour(false);
  };

    useEffect(() => {
    const handleClickOutsideDay = (e) => {
      if (dropdownRefDay.current && !dropdownRefDay.current.contains(e.target)) {
        setOpenDay(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideDay);
    return () => document.removeEventListener('mousedown', handleClickOutsideDay);
  }, []);


    useEffect(() => {
    const handleClickOutsideTypeTour = (e) => {
      if (dropdownRefTypeTour.current && !dropdownRefTypeTour.current.contains(e.target)) {
        setOpenTypeTour(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideTypeTour);
    return () => document.removeEventListener('mousedown', handleClickOutsideTypeTour);
  }, []);

  const incrementSelf = () => setPaxSelf((prev) => prev +1);
  const decrementSelf = () => setPaxSelf((prev) => Math.max(1, prev-1)) 

  const incrementPrivate = () => setPaxPrivate((prev) => prev +1);
  const decrementPrivate = () => setPaxPrivate((prev) => Math.max(1, prev-1)) 

  return (
    <div className='bannerTab-container'>
      <div className='bannerTab-option'>
        <div className="bannerTab-option-item bannerTab-item-1" ref={dropdownRefDay}>
            <div className='bannerTab-title'>DAYS</div>
            <div className='banner-select-box' onClick={toggleDropdownDay}>
                <span>{selectedDay}</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            {openDay && (
            <div className="options">
                {option_days.map((opt) => (
                <div key={opt} className="option" onClick={() => handleSelect(opt)}>
                    {opt}
                </div>
                ))}
            </div>
            )}
        </div>
        <span className='bannerTab-line'></span>
        <div className="bannerTab-option-item bannerTab-item-2" ref={dropdownRefTypeTour}>
            <div className='bannerTab-title'>TYPE OF TOUR</div>
            <div className='banner-select-box' onClick={toggleDropdownTypeTour}>
                <span>{selectedTypeTour}</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            {openTypeTour && (
            <div className="options">
                {option_type_tour.map((opt) => (
                <div key={opt} className="option" onClick={() => handleSelectTypeTour(opt)}>
                    {opt}
                </div>
                ))}
            </div>
            )}
        </div>
        <span className='bannerTab-line'></span>
        <div className="bannerTab-option-item bannerTab-item-3">
            <div className='bannerTab-title'> SELF DRIVING</div>
                <div className="banner-select-box">
                    <div className="banner-self-pax-value"><strong>{paxSelf}</strong> pax</div>
                    <div className="arrow-group">
                        <div className="arrow-up" onClick={incrementSelf}><i class="fa-solid fa-chevron-up"></i></div>
                        <div className="arrow-down" onClick={decrementSelf}><i class="fa-solid fa-chevron-down"></i></div>
                    </div>
                </div>
        </div>
        <span className='bannerTab-line'></span>
        <div className="bannerTab-option-item bannerTab-item-4">
            <div className='bannerTab-title'>PRIVATE DRIVING</div>
            <div className="banner-select-box">
                    <div className="banner-private-pax-value"><strong>{paxPrivate}</strong> pax</div>
                    <div className="arrow-group">
                        <div className="arrow-up" onClick={incrementPrivate}><i class="fa-solid fa-chevron-up"></i></div>
                        <div className="arrow-down" onClick={decrementPrivate}><i class="fa-solid fa-chevron-down"></i></div>
                    </div>
                </div>
        </div>
       </div>
       <button className='bannerTab-button'>
            <div className='bannerTab-button-price'>$299</div>
            <div className='bannerTab-button-title'>BOOK NOW</div>
       </button>
    </div>
  )
}

export default BannerTab 
