import React from "react";
import "./AboutPage.css";
import { AiOutlineShopping } from "react-icons/ai";
import "./ShoppingBag.css";
import ShoppingBagItem from "./ShoppingBagItem";
import { useMediaQuery } from "react-responsive";
import ShoppingBagItemMobile from "./ShoppingBagItemMobile";
import { Link } from "react-router-dom";

const ShoppingBag = ({ data }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });

  return (
    <div className="about-wrapper">
      <AiOutlineShopping size="3.7rem" className="info-icon" />
      <h1 className="headerName">Pirkinių krepšelis</h1>
      <hr className="hr top bag" />

      <div
        className={`shopping-bag-container ${
          data.arr.length === 0 || data.arr.length === 1 ? "noItem" : ""
        }`}
      >
        {!isMobile && (
          <>
            {data.arr.map((item) => {
              return <ShoppingBagItem item={item} key={item.id} />;
            })}
          </>
        )}
        {isMobile && (
          <>
            {data.arr.map((item) => {
              return <ShoppingBagItemMobile item={item} key={item.id} />;
            })}
          </>
        )}
      </div>
      {data.arr.length === 0 && (
        <h4 className="tuscias">Pirkinių krepšelis tuščias.</h4>
      )}
      {data.arr.length !== 0 && (
        <>
          <div className="total">
            <h5>Bendra suma: €{data.total}</h5>
          </div>
          <Link to="/checkout">
            <div className="btn btn-dark btn-lg toliau">Toliau</div>
          </Link>
        </>
      )}
      <hr className="hr bottom bag " />
    </div>
  );
};

export default ShoppingBag;
