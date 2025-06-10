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
          <div className='bodyOption-items-wrap'>
              <div className="bodyOption-items"></div>
              <div className='bodyOption-item'>
                <div className='bodyOption-text-item-wrap'>
                  <div className='bodyOption-text-item'>
                    <p className='bd-text-item' >13 years experience</p>
                    <p className='bd-text-item'>13 years experience</p>
                  </div>
                </div>
              </div>
          </div>
          <div className='bodyOption-items-wrap'>
              <div className="bodyOption-items"></div>
              <div className='bodyOption-item'>
                <div className='bodyOption-text-item-wrap'>
                  <div className='bodyOption-text-item'>
                    <p className='bd-text-item' >Personalization</p>
                    <p className='bd-text-item'>Personalization</p>
                  </div>
                </div>
              </div>
          </div>
          <div className='bodyOption-items-wrap'>
              <div className="bodyOption-items"></div>
              <div className='bodyOption-item'>
                <div className='bodyOption-text-item-wrap'>
                  <div className='bodyOption-text-item'>
                    <p className='bd-text-item'>Tour guide with good English </p>
                    <p className='bd-text-item'>Tour guide with good English</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='bodyOption-list-gird'>
          <div className='bodyOption-items-wrap'>
              <div className="bodyOption-items"></div>
              <div className='bodyOption-item'>
                <div className='bodyOption-text-item-wrap'>
                  <div className='bodyOption-text-item'>
                    <p className='bd-text-item'>10.000 us tomers</p>
                    <p className='bd-text-item'>10.000 us tomers</p>
                  </div>
                </div>
              </div>
          </div>
          <div className='bodyOption-items-wrap'>
              <div className="bodyOption-items"></div>
              <div className='bodyOption-item'>
                <div className='bodyOption-text-item-wrap'>
                  <div className='bodyOption-text-item'>
                    <p className='bd-text-item'>Unique Experiences</p>
                    <p className='bd-text-item'>Unique Experiences</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyOption
