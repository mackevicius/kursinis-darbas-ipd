import React, { useEffect, useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import "./AboutPage.css";
import "./Checkout.css";
import "./Login.css";
import "./ProductPage.css";
import { useAuth } from "../contexts/AuthContext";
import Select from "react-select";
import { colourStyles } from "./ColourStyles";
import { useHistory } from "react-router";

const Pristatymas = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors, galimaDelivery } =
    useForm(submitForm, validate);

  const history = useHistory();
  useEffect(() => {
    if (galimaDelivery) {
      history.push("/payment");
    }
  }, [galimaDelivery]);
  const { currentUser } = useAuth();
  return (
    <div className="about-wrapper">
      <h1>Pristatymas</h1>
      <hr className="hr top"></hr>
      <form onSubmit={handleSubmit} className="login-form" noValidate>
        <div className="form-inputs">
          <label className="form-label">El.paštas</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Vardas</label>
          <input
            type="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Pavardė</label>
          <input
            type="surname"
            name="surname"
            value={values.surname}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Adresas</label>
          <input
            type="adress"
            name="adress"
            value={values.adress}
            onChange={handleChange}
          />
          {errors.adress && <p>{errors.adress}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Miestas</label>
          <input
            type="city"
            name="city"
            value={values.city}
            onChange={handleChange}
          />
          {errors.city && <p>{errors.city}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Pašto kodas</label>
          <input
            type="postalcode"
            name="postalcode"
            value={values.postalcode}
            onChange={handleChange}
          />
          {errors.postalcode && <p>{errors.postalcode}</p>}
        </div>

        {errors.delivery && <p>{errors.delivery}</p>}
        <button type="submit" className="btn btn-dark btn-lg butonas">
          Toliau
        </button>
      </form>
      <hr className="hr bottom" />
    </div>
  );
};

export default Pristatymas;
