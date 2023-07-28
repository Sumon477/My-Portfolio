import "./Slider.css";
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import ReactJS from "./reactjs.png"
import Javascript from "./javascript.png"
import Html from "./html5.jpg"
import Css from "./css3.jpg"
import Python from "./python.png"
import Typescript from "./typescript.png"
import Cprogramming from "./c programming.png"
import "swiper/css"
export const Slider = () => {
    return (
        <div className="slider">
            <span>Skills</span>

            <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="slider-slider">
                <SwiperSlide>
                    <img src={ReactJS} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Javascript} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Html} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Css} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Python} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Typescript} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Cprogramming} alt="" />
                </SwiperSlide>
            </Swiper>
            
        </div>
    )
}
