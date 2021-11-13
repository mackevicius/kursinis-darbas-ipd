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
import { Link } from "react-router-dom";

const Login2 = ({ submitForm }) => {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const { handleChange, handleSubmit2, values, errors, galimaLogin } = useForm(
    submitForm,
    validate
  );

  const history = useHistory();
  useEffect(() => {
    if (galimaLogin) {
      handleSubmit();

      async function handleSubmit() {
        try {
          setError("");
          await login(values.email, values.password);
          history.push("/");
        } catch {
          setError("Nepavyko prisijungti");
        }
      }
    }
  }, [galimaLogin]);

  return (
    <div className="about-wrapper">
      <AiOutlineUser size="3.5rem" className="info-icon" />
      <h1>Prisijungti</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <hr className="hr top" />
      <form onSubmit={handleSubmit2} className="login-form" noValidate>
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
          <label className="form-label">Slaptažodis</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button type="submit" className="btn btn-dark btn-lg butonas">
          Prisijungti
        </button>
        <p className="p">
          Neturite paskyros?{" "}
          <Link to="/register">
            <span>Užsiregistruokite čia</span>
          </Link>
        </p>
      </form>
      <hr className="hr bottom" />
    </div>
  );
};

export default Login2;
