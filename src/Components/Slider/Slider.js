import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import {Autoplay, Pagination, Navigation} from 'swiper/modules';

const Slider = () => {
  return (
    <div>
        <div className="slider-container">
            <div className="header-slogan-top">
                <div className='efficient-cooling-solutions'>
                    Efficient Cooling Solutions
                </div>
            </div>
            <div className="slider-overlay top"></div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="banner1.jpg" alt="sliderimage"/></SwiperSlide>
                <SwiperSlide><img src="slider2.jpg" alt="sliderimage"/></SwiperSlide>
                <SwiperSlide><img src="slider1.jpg" alt="sliderimage"/></SwiperSlide>
            </Swiper>
            <div className="header-slogan-bottom">
                <div className="header-slogan-text">
                    Calculate Consumption and Cost with our AC Consumption and Cost Calculator
                </div>
            </div>
            <div className="slider-overlay bottom"></div>
        </div>
    </div>
  )
}

export default Slider
