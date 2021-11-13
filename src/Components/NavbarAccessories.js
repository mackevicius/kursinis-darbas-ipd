import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiSortDown } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

import FilterMobileAccessories from "./FilterMobileAccessories";
import ScrollBlock from "./ScrollBlock";

const NavbarAccessories = ({ data, filter, hamburger }) => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const { blockScroll, allowScroll } = ScrollBlock();
  const modeliai = ["iPhone", "Samsung"];
  const spalvos = ["white", "black"];
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  useEffect(() => {
    if (dropdown3) {
      blockScroll();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else allowScroll();
  }, [dropdown3]);

  const filterOpened = () => {
    setDropdown3(false);
  };
  useEffect(() => {
    hamburger && setDropdown3(false);
  }, [hamburger]);

  return (
    <div className="navbar">
      <Link to="/">
        <AiOutlineHome
          className="home-button"
          style={{ color: "white" }}
          size="2.5em"
        />
      </Link>
      {!isMobile && (
        <>
          <ul className="filter acc">
            <li>
              <a onClick={() => setDropdown1(!dropdown1)}>Telefono modelis</a>
              <MdKeyboardArrowDown
                onClick={() => setDropdown1(!dropdown1)}
                className={`dropdown-arrow ${dropdown1 ? "clicked" : ""}`}
                size="2em"
              />
              <ul className={`dropdownas tipas ${dropdown1 && "display"}`}>
                {modeliai.map((item) => {
                  return (
                    <li key={item}>
                      <a
                        onClick={() => (
                          setDropdown1(!dropdown1), filter(item, "model")
                        )}
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <a onClick={() => setDropdown2(!dropdown2)}>Spalva</a>
              <MdKeyboardArrowDown
                onClick={() => setDropdown2(!dropdown2)}
                className={`dropdown-arrow ${dropdown2 ? "clicked" : ""}`}
                size="2em"
              />

              <ul className={`dropdownas spalva ${dropdown2 && "display"}`}>
                {spalvos.map((item) => {
                  return (
                    <li key={item.id}>
                      <div
                        onClick={() => (
                          setDropdown2(!dropdown2), filter(item, "color")
                        )}
                        className={`${item}`}
                      ></div>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </>
      )}
      {isMobile && (
        <FilterMobileAccessories
          spalvos={spalvos}
          modeliai={modeliai}
          filter={filter}
          filterOpened={filterOpened}
        />
      )}

      {!isMobile && (
        <>
          <ul className="sort">
            <li>
              <a onClick={() => setDropdown3(!dropdown3)}>Rūšiuoti pagal</a>
              <MdKeyboardArrowDown
                onClick={() => setDropdown3(!dropdown3)}
                className={`dropdown-arrow ${dropdown3 ? "clicked" : ""}`}
                size="2em"
              />
              <ul className={`dropdownas sort ${dropdown3 && "display"}`}>
                <li>
                  <a
                    onClick={() => (
                      setDropdown3(!dropdown3), filter("pigiausios", "sort")
                    )}
                  >
                    Pigiausios viršuje
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => (
                      setDropdown3(!dropdown3), filter("brangiausios", "sort")
                    )}
                  >
                    Brangiausios viršuje
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => (
                      setDropdown3(!dropdown3), filter("naujausios", "sort")
                    )}
                  >
                    Naujausios viršuje
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </>
      )}
      {isMobile && (
        <>
          <div className="sort-border">
            <BiSortDown
              onClick={() => setDropdown3(!dropdown3)}
              style={{ color: "white" }}
              size="1.9em"
            />
            <div className={`dropdownas sort mobile ${dropdown3 && "display"}`}>
              <ul>
                <li>
                  <a
                    onClick={() => (
                      setDropdown3(!dropdown3), filter("pigiausios", "sort")
                    )}
                  >
                    Pigiausios viršuje
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => (
                      setDropdown3(!dropdown3), filter("brangiausios", "sort")
                    )}
                  >
                    Brangiausios viršuje
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => (
                      setDropdown3(!dropdown3), filter("naujausios", "sort")
                    )}
                  >
                    Naujausios viršuje
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarAccessories;
