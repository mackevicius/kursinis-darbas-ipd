import React, { useRef, useEffect, useState } from "react";
import "./AboutPage";
import PayPal from "./PayPal";
import Select from "react-select";
import "./Pay.css";
import { colourStyles } from "./ColourStyles";
import { connect } from "react-redux";
const Pay = ({ shoppingCart }) => {
  const total = shoppingCart.total;
  const [newTotal, setNewTotal] = useState(total);

  const options = [
    { value: "OMNIVA", label: "OMNIVA paštomatas €1.20" },
    { value: "DPD", label: "DPD kurjeris €2.50" },
  ];
  const prices = [Number(total) + 1.2, Number(total) + 2.5];

  const [val, setVal] = useState("");

  useEffect(() => {
    if (val === "OMNIVA") {
      setNewTotal(prices[0].toFixed(2));
    }
    if (val === "DPD") {
      setNewTotal(prices[1].toFixed(2));
    }
  }, [val]);

  return (
    <div className="about-wrapper">
      <h1>Apmokėjimas</h1>
      <hr className="hr top" />

      <Select
        className="selectDelivery"
        options={options}
        styles={colourStyles}
        isSearchable={false}
        placeholder="Pristatymo būdas"
        onChange={(e) => setVal(e.value)}
      />
      <div className="summary">
        <h5>Galutinė suma: €{newTotal}</h5>
      </div>
      {newTotal == prices[0] && (
        <>
          <h5 className="budas">Apmokėjimo būdas:</h5>
          <PayPal key={val} total={newTotal} />
        </>
      )}
      {newTotal == prices[1] && (
        <>
          <h5 className="budas">Apmokėjimo būdas:</h5>
          <PayPal key={val} total={newTotal} />
        </>
      )}
      <hr className="hr bottom" />
    </div>
  );
};
function mapStateToProps(state) {
  return { shoppingCart: state.prekes };
}
export default connect(mapStateToProps)(Pay);
