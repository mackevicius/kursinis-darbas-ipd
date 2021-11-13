import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiSortDown } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import { RiCloseFill } from "react-icons/ri";
import FilterMobile from "./FilterMobile";
import ScrollBlock from "./ScrollBlock";
const Navbar = ({ data, filter, changePage, hamburger }) => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const { blockScroll, allowScroll } = ScrollBlock();
  const spalvos = ["black", "grey", "white", "blue"];
  const dydziai = ["XS", "S", "M", "L", "XL", "XXL"];
  useEffect(() => {
    if (dropdown4) {
      blockScroll();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else allowScroll();
  }, [dropdown4]);
  const filterOpened = () => {
    setDropdown4(false);
  };
  useEffect(() => {
    hamburger && setDropdown4(false);
  }, [hamburger]);
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

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
          <ul className="filter">
            <li>
              <a onClick={() => setDropdown1(!dropdown1)}>Drabužio tipas</a>
              <MdKeyboardArrowDown
                onClick={() => setDropdown1(!dropdown1)}
                className={`dropdown-arrow ${dropdown1 ? "clicked" : ""}`}
                size="2em"
              />
              <ul className={`dropdownas tipas ${dropdown1 && "display"}`}>
                <li>
                  <a
                    onClick={() => (
                      filter("tshirt", "kind"),
                      setDropdown1(!dropdown1),
                      changePage(1)
                    )}
                  >
                    Marškinėliai
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => (
                      filter("hoodie", "kind"),
                      setDropdown1(!dropdown1),
                      changePage(1)
                    )}
                  >
                    Džemperiai
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => (
                      filter("dress", "kind"),
                      setDropdown1(!dropdown1),
                      changePage(1)
                    )}
                  >
                    Suknelės
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={() => setDropdown2(!dropdown2)}>Dydis</a>
              <MdKeyboardArrowDown
                onClick={() => setDropdown2(!dropdown2)}
                className={`dropdown-arrow ${dropdown2 ? "clicked" : ""}`}
                size="2em"
              />
              <ul className={`dropdownas dydis ${dropdown2 && "display"}`}>
                {dydziai.map((item) => {
                  return (
                    <li key={item.id}>
                      <a
                        onClick={() => (
                          setDropdown2(!dropdown2),
                          filter(item, "size"),
                          changePage(1)
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
              <a onClick={() => setDropdown3(!dropdown3)}>Spalva</a>
              <MdKeyboardArrowDown
                onClick={() => setDropdown3(!dropdown3)}
                className={`dropdown-arrow ${dropdown3 ? "clicked" : ""}`}
                size="2em"
              />

              <ul className={`dropdownas spalva ${dropdown3 && "display"}`}>
                {spalvos.map((item) => {
                  return (
                    <li key={item.id}>
                      <div
                        onClick={() => (
                          setDropdown3(!dropdown3),
                          filter(item, "color"),
                          changePage(1)
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
        <FilterMobile
          spalvos={spalvos}
          dydziai={dydziai}
          changePage={changePage}
          filter={filter}
          filterOpened={filterOpened}
        />
      )}
      {!isMobile && (
        <>
          <ul className="sort">
            <li>
              <a onClick={() => setDropdown4(!dropdown4)}>Rūšiuoti pagal</a>
              <MdKeyboardArrowDown
                onClick={() => setDropdown4(!dropdown4)}
                className={`dropdown-arrow ${dropdown4 ? "clicked" : ""}`}
                size="2em"
              />
              <ul className={`dropdownas sort ${dropdown4 && "display"}`}>
                <li>
                  <a
                    onClick={() => (
                      setDropdown4(!dropdown4),
                      filter("pigiausios", "sort"),
                      changePage(1)
                    )}
                  >
                    Pigiausios viršuje
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => (
                      setDropdown4(!dropdown4),
                      filter("brangiausios", "sort"),
                      changePage(1)
                    )}
                  >
                    Brangiausios viršuje
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => (
                      setDropdown4(!dropdown4),
                      filter("naujausios", "sort"),
                      changePage(1)
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
              onClick={() => {
                setDropdown4(!dropdown4);
              }}
              style={{ color: "white" }}
              size="1.9em"
            />
            <div className={`dropdownas sort mobile ${dropdown4 && "display"}`}>
              <ul>
                <li>
                  <a
                    onClick={() => (
                      setDropdown4(!dropdown4),
                      filter("pigiausios", "sort"),
                      changePage(1)
                    )}
                  >
                    Pigiausios viršuje
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => (
                      setDropdown4(!dropdown4),
                      filter("brangiausios", "sort"),
                      changePage(1)
                    )}
                  >
                    Brangiausios viršuje
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => (
                      setDropdown4(!dropdown4),
                      filter("naujausios", "sort"),
                      changePage(1)
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

export default Navbar;
