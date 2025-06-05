import React from 'react'
import "./TravelTour.css"
import { travel_data } from '../../assets/travel'
import { assets } from '../../assets/assets'

const TravelTour = ({ onTourHover, onTourLeave }) => {
  return (
    <div className='travelTour-container'>
      <div className='travelTour-list'>
        {travel_data.map((item,idx)=>(
            <div className='travelTour-item' style={{ background:`url(${item.image}) lightgray 0px -93.83px / 100% 134.12%  no-repeat`,backgroundSize: 'cover', backgroundPosition: 'center',   filter: 'brightness(80%)', }} key={idx}
              onMouseEnter={() => onTourHover(item.map)}
              onMouseLeave={onTourLeave}
            >
                <div className='travelTour-container-content'>
                  <div className='travelTour-content'>
                    <h2 className='travelTour-name'>{item.name}</h2>
                  </div>
                  <div className='travelTour-content'>
                    <img className='travelTour-icon' src={assets.icon_home} alt="" />
                    <h4 className='travelTour-title'>Accommodation:</h4>
                    <p className='travelTour-content-item'>{item.accommodation}</p>
                  </div>
                  <div className='travelTour-content'>
                    <img className='travelTour-icon' src={assets.icon_car} alt="" />
                    <h4 className='travelTour-title'>Motorbike:</h4>
                    <p className='travelTour-content-item'>{item.vehicle}</p>
                  </div>
                  <div className='travelTour-content'>
                    <img className='travelTour-icon' src={assets.icon_user} alt="" />
                    <h4 className='travelTour-title'>Tour guide:</h4>
                    <p className='travelTour-content-item'>{item.tour_Group}</p>
                  </div>
                  <div className='travelTour-content'>
                    <img className='travelTour-icon' src={assets.icon_bus} alt="" />
                    <h4 className='travelTour-title'>Transport:</h4>
                    <p className='travelTour-content-item'>{item.transport}</p>
                  </div>
                </div>
                <div className='travelTour-container-price'>
                  <p className='travelTour-price-title'>From To</p>
                  <p className='travelTour-price'>{item.price}</p>
                </div>
                <div className='travelTour-container-date'>
                  <img className='travelTour-clock' src={assets.icon_clock} alt="" />
                  <p className='travelTour-date-content'>{item.time}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TravelTour
