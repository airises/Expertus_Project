import React from "react";
import { styled } from "@mui/material";
import { ArraiMain } from "./Arr";
import "../Main/style.scss";
import { NavLink } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Main = () => {
  return (
    <div id="main">
      <div className="blocks">
        <div className="blocks--greyBlock">
          <h2>Петиции</h2>
          <p>
            На данной странице человек может посмотреть популярные петиции,
            просмотреть, дать свой голос, Если хотите опубликовать проблему
            перейдите в обсуждения{" "}
          </p>
          <div className="blocks--greyBlock__btns">
            <NavLink to={"/home"}>
              <button className="blocks--greyBlock__btns--btnPetinsi">
                Петиции
              </button>
            </NavLink>
            <NavLink to={"/discussions"}>
              <button className="blocks--greyBlock__btns--btnObs">
                Обсужедения
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="lenta">
        {ArraiMain.map((el, index) => (
          <div className="container">
            <div className="container--block">
              <h1 className="container--block__text">{el.text}</h1>
              <div className="container--block__image">
                <img src={el.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
