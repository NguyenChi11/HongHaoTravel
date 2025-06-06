import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cloudImages } from "../../assets/assets";
import  "./CloudAnimation.css"

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
        y: 100 + Math.random() * 500,
        zIndex: 2 + index,
      });

      moveCloud(); // gọi lần đầu
    });
  }, []);


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
        <div className="cloud-weather-container"></div>
    </div>
  )
}

export default CloudAnimation
