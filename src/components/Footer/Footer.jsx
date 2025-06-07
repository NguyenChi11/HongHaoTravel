import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-container-content'>
        <img className='footer-logo-image' src={assets.logo_footer} alt="" />
        <div className='contact-footer-container-wrap'>
            <div className='contact-footer-container'>
                <h3 className='contact-footer-title'>CONTACT US</h3>
                <div className='contact-footer-text-wrap'> 
                    <div className='contact-footer-text'>
                        <i class="fa-solid fa-phone-volume"></i>
                        <p className='footer-text'>+84 941556338</p>
                    </div>
                    <div className='contact-footer-text'>
                        <i class="fa-solid fa-phone-volume"></i>
                        <p className='footer-text'>honghaotravel@gmail.com</p>
                    </div>
                    <div className='contact-footer-text'>
                        <i class="fa-solid fa-house-user"></i>
                        <p className='footer-text'>No. 10 Pham Hong Thai, Minh Khai Ward, City.  Ha Giang.</p>
                    </div>
                    <div className='contact-footer-text'>
                        <i class="fa-solid fa-earth-americas"></i>
                        <p className='footer-text'>honghaotravel.com.vn</p>
                    </div>
                </div>
            </div>
            <div className='contact-footer-container'>
                <h3 className='contact-footer-title'>ALL TOUR</h3>
                <div className='tour-guide-footer'>
                    <img className='tour-guide-footer-img' src={assets.iconTourGuide} alt="" />
                    <p className='tour-guide-footer-text'>Best Budget</p>
                </div>
                <div className='tour-guide-footer'>
                    <img className='tour-guide-footer-img' src={assets.iconTourGuide} alt="" />
                    <p className='tour-guide-footer-text'>Standard Tour</p>
                </div>
                <div className='tour-guide-footer'>
                    <img className='tour-guide-footer-img' src={assets.iconTourGuide} alt="" />
                    <p className='tour-guide-footer-text'>Premium Tour</p>
                </div>
            </div>
        </div>
        <div className='footer-social-container'>
            <h3 className='contact-footer-title'>FOLLOW US</h3>
            <div className='footer-social-image'>
                <img className='footer-social-img' src={assets.userFooter} alt="" />
                <img className='footer-social-img' src={assets.tiktokFooter} alt="" />
                <img className='footer-social-img' src={assets.instagramFooter} alt="" />
                <img className='footer-social-img' src={assets.facebookFooter} alt="" />
                <img className='footer-social-img' src={assets.youtubeFooter} alt="" />
            </div>
        </div>
      </div>
      <div className='footer-container-image'>
        <img className='footer-container-img' src={assets.image_footer} alt="" />
      </div>
    </div>
  )
}

export default Footer
