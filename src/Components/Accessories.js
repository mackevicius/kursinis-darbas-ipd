import React from "react";
import "./ProductsList.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import SingleProduct from "./SingleAccessoriesProduct";

const Accessories = ({ page, data, filterType, filterSection }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });

  const history = useHistory();
  let dataAcc = data;
  if (filterType === "iPhone") {
    dataAcc = dataAcc.filter((item) => item.name.includes("iPhone"));
  }
  if (filterType === "Samsung") {
    dataAcc = dataAcc.filter((item) => item.name.includes("Samsung"));
  }
  if (filterType === "none") dataAcc.sort((a, b) => (a.id > b.id ? 1 : -1));
  if (filterSection === "color") {
    dataAcc = dataAcc.filter((item) => item.color === filterType);
  }
  if (filterSection === "sort") {
    if (filterType === "pigiausios")
      dataAcc = dataAcc.sort((a, b) => (a.price > b.price ? 1 : -1));
    else if (filterType === "brangiausios")
      dataAcc = dataAcc.sort((a, b) => (a.price < b.price ? 1 : -1));
    else dataAcc = dataAcc.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  return (
    <div className="productsList-wrapper">
      <div
        className={`productsList-container firstpage ${
          page === 1 && "clicked1"
        }`}
      >
        {dataAcc.slice(0, !isMobile ? 9 : 8).map((item) => {
          return (
            <SingleProduct
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              onClick={() =>
                history.push("/accessories/", { from: "Accessories" })
              }
            />
          );
        })}
      </div>

      <div className="arrows-products">
        <FaArrowCircleLeft size="4em" className={`iconas disabled`} />
        <FaArrowCircleRight size="4em" className={`iconas disabled`} />
      </div>
    </div>
  );
};

export default Accessories;
