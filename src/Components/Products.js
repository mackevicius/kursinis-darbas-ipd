import React, { useState, useEffect } from "react";
import deklai from "../images/deklai.png";
import drabuziai from "../images/drabuziai.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Products = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="products-container">
      <div className="product">
        <Link to="/clothes/">
          <button className="btn btn-dark btn-lg" type="submit">
            Drabužiai
          </button>
        </Link>

        <LazyLoadImage
          src={drabuziai}
          alt="drabuziai"
          height={drabuziai.height}
        />
      </div>
      <div className="product">
        <Link to="/accessories/">
          <button className="btn btn-dark btn-lg" type="submit">
            Aksesuarai
          </button>
        </Link>
        <LazyLoadImage src={deklai} alt="deklai" height={deklai.height} />
      </div>
    </div>
  );
};

export default Products;
