import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import one from "../images/showcase1.png";
import two from "../images/showcase2.png";
import three from "../images/showcase3.png";
import "./Showcase.css";

const ImageSlider = () => {
  return (
    <Carousel className="carouselStyle">
      <Carousel.Item>
        <img className="d-block w-100" src={one} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={two} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={three} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
