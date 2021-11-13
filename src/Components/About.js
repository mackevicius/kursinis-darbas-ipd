import React from "react";
import img from "../images/about.png";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const About = () => {
  return (
    <div className="about">
      <div className="product">
        <Link to="/about">
        <button className="btn btn-dark btn-lg" type="submit">Apie mus</button>
        </Link>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default About;
