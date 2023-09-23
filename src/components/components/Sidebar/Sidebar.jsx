import React from "react";
import Logo from "../../../assets/images/ozgort-logo.png";
import "./Sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ExtensionIcon from "@mui/icons-material/Extension";
import ForumIcon from "@mui/icons-material/Forum";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpIcon from "@mui/icons-material/Help";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="logoContainer">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu">
          <span>Меню</span>
          <div className="item">
            <HomeIcon />
            <NavLink to={"/home"} >
              <span>Главная</span>
            </NavLink>
          </div>
          <div className="item">
            <ArticleIcon />
            <span>Статьи</span>
          </div>
          <div className="item">
            <ExtensionIcon />
            <span>Интерактив</span>
          </div>
          <div className="item">
            <ForumIcon />
            <span>Петиции</span>
          </div>
          <span style={{ marginTop: "100px" }}>Другое</span>
          <div className="item">
            <AccountCircleIcon />
            <span>Личный кабинет</span>
          </div>
          <div className="item">
            <HelpIcon />
            <span>Помощь</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
