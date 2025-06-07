import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { assets, cloudImages } from "../../assets/assets";
import  "./CloudAnimation.css"

import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { weather_data } from "../../assets/weatherData";



const CloudAnimation = () => {
const cloudRefs = useRef([]);

  useEffect(() => {
    cloudRefs.current.forEach((cloud, index) => {
      let direction = -1; // bắt đầu từ phải qua trái
      let speed = 20 + Math.random() * 10; // tốc độ ngẫu nhiên

      const moveCloud = () => {
        const screenWidth = window.innerWidth;
        const cloudWidth = cloud.offsetWidth;

        const endX = direction === -1 ? -cloudWidth : screenWidth;

        gsap.to(cloud, {
          x: endX,
          duration: speed,
          ease: "linear",
          onComplete: () => {
            direction *= -1; // đổi chiều
            speed = 30 + Math.random() * 20; // đổi tốc độ mỗi lần
            gsap.set(cloud, {
              x: direction === -1 ? screenWidth : -cloudWidth,
            });
            moveCloud(); // loop lại
          },
        });
      };

      // bắt đầu ở vị trí ngẫu nhiên
      gsap.set(cloud, {
        x: window.innerWidth + index * 500,
        y: 100 + Math.random() * 100,
        zIndex: 2 + index,
      });

      moveCloud(); // gọi lần đầu
    });
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="cloud-container-wrap">
        <div className="cloud-area-container">
            <div className="cloud-area">
            {cloudImages.concat(cloudImages).map((src, i) => (
                <img
                key={i}
                ref={(el) => (cloudRefs.current[i] = el)}
                src={src.image}
                className="cloud"
                />
            ))}
            </div>
        </div>
        <div className="cloud-weather-container">
          <div className="cloud-weather-background-container">
            <Swiper
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              onInit={(swiper) => {
                // Gắn phần tử DOM sau khi Swiper đã khởi tạo
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              slidesPerView={1}
              className="cloud-weather-background-items"
            >
              <div ref={prevRef} className="custom-prev">
                <img className="custom-prev-img" src={assets.arrow_left} alt="Prev" />
              </div>
              <div ref={nextRef} className="custom-next">
                <img className="custom-next-img" src={assets.arrow_right} alt="Next" />
              </div>
              {weather_data.map((item,index)=>(
                <SwiperSlide key={index}>
                  <div className="cloud-weather-background-item" style={{background:`url(${item.image_weather})`,backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",}}>
                    <div className="cloud-weather-card">
                      <p className="cloud-weather-temperature">{item.temperature}</p>
                      <img className="cloud-weather-icon" src={item.icon} alt="" />
                      <p className="cloud-weather-date">{item.date}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="cloud-weather-info-container">
              <Swiper
               onSwiper={setThumbsSwiper}
               loop={true}
               spaceBetween={28}
               slidesPerView={12}
               freeMode={true}
               watchSlidesProgress={true}
               modules={[FreeMode, Navigation, Thumbs]}
               className="cloud-weather-info-items"
              >
                {weather_data.map((item,index)=>(
                  <SwiperSlide key={index}>
                    <div className="cloud-weather-info-item">
                      <p className="cloud-weather-month">{item.month}</p>
                      <p className="cloud-weather-degree">{item.degree}</p>
                      <p className="cloud-weather-degreeNumber">{item.degreeNumber}</p>
                      <img className="cloud-weather-iconRain" src={item.iconRain} alt="" />
                      <p className="cloud-weather-rainfall">{item.rainfall}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
        </div>
    </div>
  )
}

export default CloudAnimation
