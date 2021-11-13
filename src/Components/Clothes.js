import React, { useState, useEffect } from "react";
import "./ProductsList.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SingleProduct from "./SingleClothesProduct";

const Clothes = ({ data, filterType, filterSection, page, changePage }) => {
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(true);
  const history = useHistory();
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });

  let dataClothes = data;

  const reset = data;
  if (filterType === "tshirt") {
    dataClothes = dataClothes.filter((item) =>
      item.name.includes("marškinėliai")
    );
  }
  if (filterType === "hoodie") {
    dataClothes = dataClothes.filter((item) => item.name.includes("Džemperis"));
  }
  if (filterType === "dress") {
    dataClothes = dataClothes.filter((item) => item.name.includes("Suknelė"));
  }
  if (filterSection === "size") {
    dataClothes = dataClothes.filter((item) => item.sizes.includes(filterType));
  }
  if (filterSection === "color") {
    dataClothes = dataClothes.filter((item) => item.color === filterType);
  }
  if (filterSection === "sort") {
    if (filterType === "pigiausios")
      dataClothes = dataClothes.sort((a, b) => (a.price > b.price ? 1 : -1));
    else if (filterType === "brangiausios")
      dataClothes = dataClothes.sort((a, b) => (a.price < b.price ? 1 : -1));
    else dataClothes = dataClothes.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  if (filterType === "none") dataClothes.sort((a, b) => (a.id > b.id ? 1 : -1));

  const checkRight = () => {
    if (arrowRight) {
      changePage(page + 1);
    }
  };
  const checkLeft = () => {
    if (arrowLeft) {
      changePage(page - 1);
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    page === 1 ? setArrowLeft(false) : setArrowLeft(true);
    page === 2 ? setArrowRight(false) : setArrowRight(true);
  }, [page]);

  return (
    <div className="productsList-wrapper">
      <div
        className={`productsList-container firstpage ${
          page === 1 && "clicked1"
        }`}
      >
        {dataClothes.slice(0, !isMobile ? 9 : 8).map((item) => {
          return (
            <SingleProduct
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              onClick={() => history.push("/clothes/", { from: "Clothes" })}
            />
          );
        })}
      </div>
      <div
        className={`productsList-container ${
          page === 3 ? "secondpage3" : "secondpage"
        } ${page === 2 && "clicked2"} ${page === 3 && "clicked23"}`}
      >
        {dataClothes.slice(!isMobile ? 9 : 8, 16).map((item) => {
          return (
            <SingleProduct
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              onClick={() => history.push("/clothes/", { from: "Clothes" })}
            />
          );
        })}
      </div>

      {dataClothes.length > 9 ? (
        <div className="arrows-products">
          <FaArrowCircleLeft
            size="4em"
            className={`iconas ${arrowLeft ? "enabled" : "disabled"}`}
            onClick={checkLeft}
          />
          <FaArrowCircleRight
            size="4em"
            className={`iconas ${arrowRight ? "enabled" : "disabled"}`}
            onClick={checkRight}
          />
        </div>
      ) : (
        <div className="arrows-products">
          <FaArrowCircleLeft size="4em" className={`iconas disabled`} />
          <FaArrowCircleRight size="4em" className={`iconas disabled`} />
        </div>
      )}
    </div>
  );
};

export default Clothes;
