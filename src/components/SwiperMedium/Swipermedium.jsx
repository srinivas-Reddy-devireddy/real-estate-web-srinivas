import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
const Swipermediam = () => {
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={4}>
        <SliderButtons />
        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <div className=" flexColStart r-card">
              <img src={card.image} alt="home" />
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
              </span>
              <span className="primaryText">{card.name}</span>
              <span className="secondaryText">{card.detail}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipermediam;
const SliderButtons=()=>{
    const swiper=useSwiper();
      return(
        <div className=" felxCenter r-buttons">
    <button onClick={()=>swiper.slidePrev()}>&lt;</button>
    <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
      )
    }
    