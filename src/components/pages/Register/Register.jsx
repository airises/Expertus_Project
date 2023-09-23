import React from "react";
import Logo from "../../../assets/images/logotype.svg";
// import Image from "../../../assets/images/image-main.png";
import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="left">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
          <h3>Өзгөрт</h3>
        </div>
        <h1>Регистрация</h1>
        <form>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Фамилия" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Пароль" />
          <div></div>
          <button>Регистрация</button>
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
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
