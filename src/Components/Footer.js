import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { ImInfo } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import ig from "../images/footer-ig.png";
import fb from "../images/footer-fb.png";
import twitter from "../images/footer-twitter.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container-item">
          <Link to="/about">
            <ImInfo className="icon" size="3em" />
          </Link>
          <h4>Apie Mus</h4>
        </div>
        <div className="footer-container-item">
          <a href="https://www.google.com/maps/@54.7289929,25.2388323,12z">
            <IoLocationOutline className="icon" size="3em" />
          </a>
          <h4>Kelmo g. 23a</h4>
        </div>
        <div className="footer-container-item">
          <a href="mailto:info.fundamental@gmail.com">
            <HiOutlineMail className="icon" size="3em" />
          </a>
          <h4>info.fundamental@gmail.com</h4>
        </div>
        <div className="footer-container-item">
          <IoCallOutline className="icon" size="3em" />
          <h4>+37052485221</h4>
        </div>
        {!isMobile && (
          <div className="footer-container-item social">
            <a href="https://www.instagram.com/">
              <img className="icon" src={ig} alt="" />
            </a>
            <a href="https://www.facebok.com/">
              <img className="icon" src={fb} alt="" />
            </a>
            <a href="https://www.twitter.com/">
              <img className="icon" src={twitter} alt="" />
            </a>
          </div>
        )}
      </div>
      {isMobile && (
        <div className="mobile-social">
          <a href="https://www.instagram.com/">
            <img className="icon" src={ig} alt="" />
          </a>
          <a href="https://www.facebok.com/">
            <img className="icon" src={fb} alt="" />
          </a>
          <a href="https://www.twitter.com/">
            <img className="icon" src={twitter} alt="" />
          </a>
        </div>
      )}
      <p>
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> 2021 by
        FUNDAMENTAL
      </p>
    </footer>
  );
};

export default Footer;
