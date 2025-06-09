import React from 'react'
import "./BodyOption.css"
import { assets } from '../../assets/assets'

const BodyOption = ({title}) => {
  return (
    <div className='bodyOption-container'>
      <div className='bodyOption-Logo'>
        <img className='bodyOption-Logo-H' src={assets.image_H} alt="" />
      </div>
      <div className='bodyOption-title-container'>
        <h2 className='bodyOption-title'>
           {title}
        </h2>
      </div>
      <div className='bodyOption-list'>
        <div className='bodyOption-list-gird'> 
          <div className="bodyOption-items">
              <p className='bodyOption-item'>13 years experience</p>
          </div>
          <div className="bodyOption-items">
              <p className='bodyOption-item'>Personalization</p>
          </div>
          <div className="bodyOption-items">
              <p className='bodyOption-item'>Tour guide with good English</p>
          </div>
        </div>
        <div className='bodyOption-list-gird'>
          <div className="bodyOption-items">
              <p className='bodyOption-item'>10.000 customers</p>
          </div>
          <div className="bodyOption-items">
              <p className='bodyOption-item'>Unique Experiences</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyOption
