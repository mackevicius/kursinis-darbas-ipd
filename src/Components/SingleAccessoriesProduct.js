import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const getName = (name) => {
  let words = name.split(" ");
  const lastword = words[words.length - 1];
  return lastword;
};
const getAbout = (name) => {
  let words = name.split(" ");
  let lastword = words[words.length - 1];
  let otherwords = words.filter((item) => item !== lastword);
  otherwords = otherwords.toString();

  return otherwords.split(",").join(" ");
};
const getMobileAbout = (name) => {
  let words = name.split(" ");
  let lastword = words[words.length - 1];
  let otherwords = words[0] + " " + words[2];
  otherwords = otherwords.toString();

  return otherwords;
};
const SingleProduct = ({ id, name, price, image, onClick }) => {
  const isSmallMobile = useMediaQuery({ query: "(max-width: 370px)" });
  const isBreak = useMediaQuery({ query: "(max-width: 920px)" });

  return (
    <Link to={`/accessories/${id}`}>
      <div onClick={onClick} className="item-container">
        <img src={image} />
        <h4 className="aboutProduct">
          {isSmallMobile ? getMobileAbout(name) : getAbout(name)}
        </h4>
        <h4 className="productName">{getName(name)}</h4>
        {isBreak && <br></br>}
        <p>{price}</p>
      </div>
    </Link>
  );
};

export default SingleProduct;
