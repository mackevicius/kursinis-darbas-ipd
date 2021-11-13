import React, { useState } from "react";
import img from "../images/showcase2.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import showcase1 from "../images/showcase1.png";
import showcase2 from "../images/showcase2.png";
import showcase3 from "../images/showcase3.png";

const Showcase = () => {
  const [image, setImage] = useState(showcase2);
  const [counter, setCounter] = useState(2);
  const left = () => {
    if (counter === 1) {
      setCounter(3);
      changeImage(counter);
    } else {
      setCounter(counter - 1);
      changeImage(counter);
    }
  };
  const right = () => {
    if (counter === 3) {
      setCounter(1);
      changeImage(counter);
    } else {
      setCounter(counter + 1);
      changeImage(counter);
    }
  };
  const changeImage = (counter) => {
    if (counter === 1) setImage(showcase1);
    else if (counter === 2) setImage(showcase2);
    else setImage(showcase3);
  };
  return (
    <div className="showcase">
      <img src={image} style={{ transition: "all 0.2s ease-in" }} alt="" />
      <div className="arrows">
        <FaArrowCircleLeft onClick={left} size="4em" className="icon" />
        <FaArrowCircleRight onClick={right} size="4em" className="icon" />
      </div>
    </div>
  );
};

export default Showcase;
