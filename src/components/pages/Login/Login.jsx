import React from "react";
import Logo from "../../../assets/images/logotype.svg";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate=useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const {login} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div className="login">
      <div className="left">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
          <h3>Өзгөрт</h3>
        </div>
        <h1>Войти</h1>
        <Link to="/register">
          <button>Зарегистрироваться</button>
        </Link>
        <form>
          <input name="email" type="text" placeholder="Email" onChange={handleChange} />
          <input name="password" type="password" placeholder="Пароль" onChange={handleChange} />
          <div>
            <input
              type="checkbox"
              style={{ width: "16px", height: "16px", marginRight: "5px" }}
            />
            <label>Запомнить меня</label>
          </div>
          {err && err}
          <button onClick={handleLogin}>Войти</button>
        </form>
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

export default Login;
