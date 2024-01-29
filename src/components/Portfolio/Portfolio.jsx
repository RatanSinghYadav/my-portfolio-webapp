import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Shipmate from "../../img/shipmate.png";
import Ecommerce from "../../img/ecommerce.png";
import Facebook from "../../img/fbook.png";
import Rest from "../../img/rest.png";
import Twitter from "../../img/twitter.png";
import Course from "../../img/courses.png";
import Amazon from "../../img/amazon1.png";
import Cart from "../../img/cart.png";
import Todo_MERN from "../../img/todo_mern.png";
import Todo_Redux from "../../img/redux_todo.png";
import Page from "../../img/pagination.png";
import Chart from "../../img/chart.png";
import Backlink from "../../img/backlink.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <span className="frontend">Frontend Projects</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://luxury-llama-ff0f86.netlify.app/">
            <img src={Shipmate} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://loquacious-marigold-cf6dbd.netlify.app/">
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://bucolic-kangaroo-9070ba.netlify.app/">
            <img src={Facebook} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>

      <span className="frontend">MERN Projects</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://course-portal-webapp.onrender.com/">
            <img src={Course} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://twitter-clone-frontend-8bpi.onrender.com">
            <img src={Twitter} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://amazon-clone-frontend-iq23.onrender.com">
            <img src={Amazon} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mern-todo-frontend.onrender.com/">
            <img src={Todo_MERN} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://silly-monstera-5ab27c.netlify.app">
            <img src={Backlink} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://cozy-puppy-d6ece8.netlify.app/">
            <img src={Cart} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://thunderous-faloodeh-6e3d7f.netlify.app/">
            <img src={Todo_Redux} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://tubular-mooncake-52acdf.netlify.app/">
            <img src={Page} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://comfy-semifreddo-e00c1c.netlify.app/">
            <img src={Chart} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://tranquil-bunny-8ba657.netlify.app/">
            <img src={Rest} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
