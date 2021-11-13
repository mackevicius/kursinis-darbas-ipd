import React, { useRef, useState } from "react";
import "./Login.css";
import "./AboutPage.css";
import { AiOutlineUser } from "react-icons/ai";
import { auth } from "./firebase";
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Nepavyko prisijungti");
    }
  }

  return (
    <div className="about-wrapper">
      <AiOutlineUser size="3.5rem" className="info-icon" />
      <h1 className="h1">Prisijungti</h1>

      {error && <Alert variant="danger">{error}</Alert>}
      <hr className="hr top"></hr>
      <form className="login-form" onSubmit={handleSubmit}>
        <label for="email">El.paštas</label>
        <input type="email" id="email" ref={emailRef} />
        <label for="password">Slaptažodis</label>
        <input type="password" id="password" ref={passwordRef} />

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

export default Login;
