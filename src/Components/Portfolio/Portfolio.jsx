import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Metroid from "../../img/metroid.png";
import Hangman from "../../img/hangman.png";
import Forum from "../../img/forum.png";
import Ecommerce from "../../img/ecommerce.png";
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading */}
      <span>Recent</span>
      <span>Projects</span>
      {/* slider */}
      <Swiper
        spaceBetween={-100}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {/* slide 1 */}
        <SwiperSlide>
          <a href="https://github.com/ZTeasley/GamersForum">
            <img src={Forum} alt="" />
          </a>
        </SwiperSlide>

        {/* slide 2 */}
        <SwiperSlide>
          <a href="https://github.com/ZTeasley/Hangman-App">
            <img src={Hangman} alt="" />
          </a>
        </SwiperSlide>

        {/* slide 3 */}
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>

        {/* slide 4 */}
        <SwiperSlide>
          <a href="https://github.com/ZTeasley/GamersForum">
            <img src={Metroid} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
