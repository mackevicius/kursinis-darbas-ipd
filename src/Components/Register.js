import React, { useEffect, useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import "./AboutPage.css";
import "./Checkout.css";
import { AiOutlineUser } from "react-icons/ai";
import "./Login.css";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { Alert } from "react-bootstrap";

const Register = ({ submitForm }) => {
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const { handleChange, handleSubmit2, values, errors, galimaRegister } =
    useForm(submitForm, validate);

  const history = useHistory();
  useEffect(() => {
    if (galimaRegister) {
      handleSubmit();
      async function handleSubmit() {
        try {
          setError("");
          await signup(values.email, values.password);
          history.push("/");
        } catch {
          setError("Tokia paskyra jau egzistuoja");
        }
      }
    }
  }, [galimaRegister]);

  return (
    <div className="about-wrapper">
      <AiOutlineUser size="3.5rem" className="info-icon" />
      <h1>Registracija</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <hr className="hr top" />
      <form onSubmit={handleSubmit2} className="login-form" noValidate>
        <div className="form-inputs">
          <label className="form-label">El.paštas</label>
          <input
            type="email"
            name="email"
            value={currentUser ? currentUser.email : values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Slaptažodis</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Pakartokite slaptažodį</label>
          <input
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button type="submit" className="btn btn-dark btn-lg butonas">
          Registruotis
        </button>
      </form>
      <hr className="hr bottom" />
    </div>
  );
};

export default Register;
