import React, { useState } from "react";
import Logo from "../../../assets/images/logotype.svg";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const API = "http://localhost:8000/users";
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}`, inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);
  return (
    <div className="register">
      <div className="left">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <h1>Регистрация</h1>
        <form>
          <input
            type="text"
            placeholder="Имя"
            name="firstName"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Фамилия"
            name="lastName"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            onChange={handleChange}
          />
          <div></div>
          {err && err}
          <button onClick={handleClick}>Регистрация</button>
        </form>
        <span>У вас уже есть аккаунт?</span>
        <Link to="/login">
          <button>Войти</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
          <img
            src="https://img.freepik.com/free-photo/close-up-idea-concept_23-2148882596.jpg?w=360&t=st=1695470441~exp=1695471041~hmac=c5c59dbcd7908072f27c5464f505049c3674d14fe76878c585a1d8713b19da1e"
            alt="bulb"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
