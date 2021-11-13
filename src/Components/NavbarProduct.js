import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoBackspaceOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import "./NavbarProduct.css";
const NavbarProduct = () => {
  const history = useHistory();
  return (
    <div className="navbar product">
      <Link to="/">
        <AiOutlineHome
          className="home-button"
          style={{ color: "white" }}
          size="2.5em"
        />
      </Link>

      <IoBackspaceOutline
        onClick={() => {
          history.goBack();
        }}
        className="back-button"
        style={{ color: "white" }}
        size="2.5em"
      />
    </div>
  );
};

export default NavbarProduct;
