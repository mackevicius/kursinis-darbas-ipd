import React, { useState, useEffect } from "react";
import logo from "../images/fundamental-logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
import { RiCloseFill } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Header.css";

import ScrollBlock from "./ScrollBlock";
import ShoppingBagCounter from "./ShoppingBagCounter";

const Header = ({
  shoppingCart,
  filter,
  changePage,
  changeSearchValue,
  hamburgerOpen,
}) => {
  const [menu, setMenu] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);
  const { currentUser, logout } = useAuth();
  const { blockScroll, allowScroll } = ScrollBlock();
  const [searchDropdown, setSearchDropdown] = useState(false);

  useEffect(() => {
    if (menu) blockScroll();
    else allowScroll();
    hamburgerOpen();
  }, [menu]);

  const history = useHistory();
  const handleClickDrabuziai = () => {
    isMobile && setMenu(!menu);
    filter("none");
    changePage(1);
  };
  const sumbit = (e) => {
    e.preventDefault();
    changeSearchValue(search);
    setSearchDropdown(!searchDropdown);
    setSearch("");
    history.push("/searchResults/", { from: "Homepage" });
  };
  async function handleLogout() {
    setError("");
    try {
      await logout();
    } catch {
      setError("Nepavyko prisijungti");
    }
  }

  return (
    <div className="header">
      <div className="header-container">
        {isMobile && (
          <>
            <GiHamburgerMenu
              onClick={() => {
                setMenu(!menu);
                hamburgerOpen();
              }}
              className="hamburger"
              size="3.5em"
            />
            <Link to="/">
              <img src={logo} alt="funda logo" className="logo" />
            </Link>

            <Link to="/shoppingBag">
              <ShoppingBagCounter />
            </Link>

            <div className={`hamburger-menu ${menu && "clicked"}`}>
              <RiCloseFill
                onClick={() => setMenu(false)}
                className="close"
                size="3.5em"
              />
              <ul>
                <div className="loginasMobile">
                  {currentUser ? (
                    <Link to="/">
                      <p
                        onClick={() => {
                          setMenu(!menu);
                          setLogin(!login);
                          handleLogout();
                        }}
                      >
                        Atsijungti
                      </p>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <p
                        onClick={() => {
                          setLogin(!login);
                          setMenu(!menu);
                        }}
                      >
                        Prisijungti
                      </p>
                    </Link>
                  )}
                </div>
                <Link to="/clothes/">
                  <li onClick={handleClickDrabuziai}>DRABUŽIAI</li>
                </Link>
                <Link to="/accessories/">
                  <li
                    onClick={() => {
                      filter("none");
                      setMenu(!menu);
                    }}
                  >
                    AKSESUARAI
                  </li>
                </Link>
                <Link to="/about/">
                  <li onClick={() => setMenu(!menu)}>APIE MUS</li>
                </Link>
                <li
                  onClick={() => {
                    setSearchDropdown(!searchDropdown);
                    setMenu(!menu);
                  }}
                >
                  PAIEŠKA
                </li>
              </ul>
            </div>
            {searchDropdown && (
              <div className="search-mobile">
                <RiCloseFill
                  onClick={() => setSearchDropdown(!searchDropdown)}
                  className="close"
                  size="3.5em"
                />
                <form onSubmit={sumbit}>
                  <input
                    type="text"
                    placeholder="Paieška"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  ></input>
                  <button
                    className="btn btn-dark btn-lg searchbutton"
                    type="submit"
                  >
                    Ieškoti
                  </button>
                </form>
              </div>
            )}
          </>
        )}
        {!isMobile && (
          <>
            <Link to="/">
              <img src={logo} alt="funda logo" className="logo" />
            </Link>
            <ul>
              <Link to="/clothes/">
                <li onClick={handleClickDrabuziai}>DRABUŽIAI</li>
              </Link>
              <Link to="/accessories/">
                <li onClick={() => filter("none")}>AKSESUARAI</li>
              </Link>
              <Link to="/about">
                <li>APIE MUS</li>
              </Link>
            </ul>
            <div className="search">
              <AiOutlineSearch size="1.5em" />
              <form onSubmit={sumbit}>
                <input
                  type="text"
                  placeholder="Paieška"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                ></input>
              </form>
            </div>
            <div className="icons">
              <Link to="/shoppingBag">
                <ShoppingBagCounter />
              </Link>
              <AiOutlineUser
                onClick={() => setLogin(!login)}
                size="2em"
                className="icon"
              />
              <div className={`userdropdown ${login && "displayed"}`}>
                {currentUser ? (
                  <Link to="/">
                    <p
                      onClick={() => {
                        setLogin(!login);
                        handleLogout();
                      }}
                    >
                      Atsijungti
                    </p>
                  </Link>
                ) : (
                  <Link to="/login">
                    <p onClick={() => setLogin(!login)}>Prisijungti</p>
                  </Link>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
