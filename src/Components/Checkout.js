import React from "react";
import "./AboutPage.css";
import "./Checkout.css";
import "./Login.css";
import validate from "./validateInfo";
import useForm from "./useForm";
import { useAuth } from "../contexts/AuthContext";
import "./Form.css";

const Checkout = ({ submitForm }) => {
  const { currentUser } = useAuth();
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="about-wrapper">
      <h1>Pristatymas</h1>
      <hr className="hr top" />
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <div className="form-inputs">
          <label className="form-label" for="email">
            El.paštas
          </label>
          <input
            type="email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p>{errors.email}</p>}
        <label for="name">Vardas</label>
        <input type="text" id="name" />
        <label for="surname">Pavardė</label>
        <input type="text" id="surname" />
        <label for="adresas">Adresas</label>
        <input type="text" id="adresas" />
        <label for="miestas">Miestas</label>
        <input type="text" id="miestas" />
        <label for="kodas">Pašto kodas</label>
        <input type="text" id="kodas" />
        <button type="submit" className="btn btn-dark btn-lg butonas">
          Apmokėti
        </button>
      </form>
    </div>
  );
};

export default Checkout;
