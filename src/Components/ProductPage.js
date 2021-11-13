import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import Select from "react-select";
import { colourStyles } from "./ColourStyles";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { Alert } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { bindActionCreators } from "redux";
import * as actions from "../state/action-creators/index";
import { useDispatch } from "react-redux";

const ProductPage = ({ item, type }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });
  const [item2, setItem2] = useState(item);
  const dispatch = useDispatch();

  const { addToCart, clearCart } = bindActionCreators(actions, dispatch);

  let options = [];
  if (type === "clothes") {
    options = item.sizes.map((size) => {
      return { value: size, label: size };
    });
  }
  if (type === "accessories") {
    options = item.models.map((model) => {
      return { value: model, label: model };
    });
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [num, setNum] = useState(1);
  const [val, setVal] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const minus = () => {
    if (num !== 0) {
      setNum(num - 1);
    }
  };
  const plus = () => {
    if (num !== item.stock) {
      setNum(num + 1);
    }
  };
  useEffect(() => {
    setItem2({ ...item2, value: val });
    setError("");
  }, [val]);
  useEffect(() => {
    setItem2({ ...item2, qty: num });
  }, [num]);

  const submitItem = (e) => {
    e.preventDefault();
    if (!val && type == "clothes") setError("Pasirinkite dydį");
    else if (!val && type == "accessories") setError("Pasirinkite modelį");
    else {
      setSuccess("Įdėta į krepšelį");
      addToCart(item2);
    }
  };

  return (
    <div className="wrapper">
      <div className="selection">
        <div className="left">
          <img src={process.env.PUBLIC_URL + item.image} />
        </div>
        <div className="right">
          <h4>{item.name}</h4>
          <div className="kaina">
            <p>Kaina:</p>
            <h2>{item.price}</h2>
          </div>
          <form className="product-form" onSubmit={submitItem}>
            {error && (
              <Alert className={isMobile ? "" : "alertDanger"} variant="danger">
                {error}
              </Alert>
            )}
            {success && isMobile && <Alert variant="success">{success}</Alert>}
            <Select
              className="selectP"
              options={options}
              placeholder={type === "clothes" ? "Dydis" : "Modelis"}
              styles={colourStyles}
              isSearchable={false}
              onChange={(e) => setVal(e.value)}
            />
            <div className="kiekis">
              <p>Kiekis:</p>
              <AiOutlineMinus
                size="2em"
                className="pliusminus"
                onClick={minus}
              />
              <input
                type="number"
                min={1}
                max={item.stock}
                step={1}
                value={num}
              />
              <AiOutlinePlus size="2em" className="pliusminus" onClick={plus} />
            </div>
            <button className="btn btn-dark btn-lg buy" type="submit">
              <AiOutlineShopping size="2.1em" style={{ marginRight: "10px" }} />
              Į krepšelį
            </button>
            {success && !isMobile && (
              <Alert className="alertSuccess" variant="success">
                {success}
              </Alert>
            )}
          </form>
        </div>
      </div>
      <div className="info">
        <ul className="descriptions">
          {item.descriptions.map((item) => (
            <li key={item.id}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
