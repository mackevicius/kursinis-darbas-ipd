import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { auth } from "./firebase";
import { useAuth } from "../contexts/AuthContext";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    password2: "",
    name: "",
    surname: "",
    adress: "",
    city: "",
    postalcode: "",
  });
  useEffect(() => {
    currentUser && setValues({ ...values, email: currentUser.email });
  }, []);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signup, currentUser } = useAuth();

  const [galimaLogin, setGalimaLogin] = useState(false);
  const [galimaRegister, setGalimaRegister] = useState(false);
  const [galimaDelivery, setGalimaDelivery] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };
  const handleSubmit2 = (e) => {
    setGalimaLogin(false);
    setGalimaRegister(false);
    setGalimaDelivery(false);
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    if (Object.keys(errors).length == 4) {
      setGalimaRegister(true);
    }
    if (Object.keys(errors).length == 5) {
      setGalimaLogin(true);
    }
    if (Object.keys(errors).length == 2) {
      setGalimaDelivery(true);
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    handleSubmit2,
    values,
    errors,
    galimaLogin,
    galimaDelivery,
    galimaRegister,
  };
};

export default useForm;
