import React, { useState, useEffect } from "react";
import "./ProductsList.css";
import "./NavbarProduct.css";
import "./SearchResults.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { SearchData } from "./SearchData";

const SearchResults = ({ page, changePage, searchValue }) => {
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(true);
  const history = useHistory();
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });
  const isBreak = useMediaQuery({ query: "(max-width: 920px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 370px)" });
  let searchProducts = SearchData;

  if (searchValue)
    searchProducts = searchProducts.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
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
  const checkRight = () => {
    if (arrowRight) {
      changePage(page + 1);
      // page === 1 ? setArrowRight(true) : setArrowRight(false);
      // setArrowLeft(true);
    }
  };
  const checkLeft = () => {
    if (arrowLeft) {
      changePage(page - 1);
      // setArrowRight(true);
      // setArrowLeft(false);
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
        {searchProducts.slice(0, !isMobile ? 9 : 8).map((item) => {
          {
            return (
              <Link
                to={`${item.sizes ? "/clothes/" : "/accessories/"}${item.id}`}
                key={item.id}
              >
                <div
                  onClick={() =>
                    history.push("/searchResults/", { from: "Clothes" })
                  }
                  className="item-container"
                >
                  <img src={process.env.PUBLIC_URL + item.image}></img>
                  <h4 className="aboutProduct">
                    {isSmallMobile && !item.sizes && getMobileAbout(item.name)}

                    {!isSmallMobile && getAbout(item.name)}
                  </h4>
                  <h4 className="productName">{getName(item.name)}</h4>
                  {isBreak && <br></br>}
                  <p>{item.price}</p>
                </div>
              </Link>
            );
          }
        })}
      </div>
      <div
        className={`productsList-container ${
          page === 3 ? "secondpage3" : "secondpage"
        } ${page === 2 && "clicked2"} ${page === 3 && "clicked23"}`}
      >
        {searchProducts.slice(!isMobile ? 9 : 8, 16).map((item) => {
          return (
            <Link to={`/clothes/${item.id}`} key={item.id}>
              <div
                onClick={() =>
                  history.push("/searchResults/", { from: "Clothes" })
                }
                key={item.id}
              >
                <img src={process.env.PUBLIC_URL + item.image}></img>
                <h4>{item.name}</h4>
                <br />
                <p>{item.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
      {searchProducts.length === 0 && (
        <h2 className="error">Paieškos rezultatų nerasta</h2>
      )}
      {searchProducts.length > 9 ? (
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

export default SearchResults;
