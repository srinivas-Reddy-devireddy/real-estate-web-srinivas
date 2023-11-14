import React from "react";
import "./Residence.css";
import Swipermediam from "../SwiperMedium/Swipermedium";
import Swipersmall from "../Swipersmall/Swipersmall";
const Residence = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth  r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choice</span>
          <span className="primaryText">Popular Residences</span>
        </div>

        <div className="res-medium">
          <Swipermediam />
        </div>

        <div className="res-small">
          <Swipersmall />
        </div>
      </div>
    </section>
  );
};

export default Residence;
