import React, { useEffect } from "react";
import "./AboutPage.css";
import { BsCheckBox } from "react-icons/bs";

const SuccessfulPurchase = ({ clearShoppingBag }) => {
  useEffect(() => {
    clearShoppingBag();
  }, []);
  return (
    <div className="about-wrapper">
      <BsCheckBox size="3.7rem" className="info-icon" />
      <h1>Sėkmingas užsakymas!</h1>
      <hr className="hr top"></hr>
      <p style={{ marginTop: "30px" }}>
        Tolimesnė užsakymo eiga išsiųsta Jūsų nurodytu el. paštu
      </p>
      <hr className="hr bottom"></hr>
    </div>
  );
};

export default SuccessfulPurchase;
