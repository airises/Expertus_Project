import React from "react";
import { styled } from "@mui/material";
import { ArraiMain } from "./Arr";

const Main = () => {
  return (
    <div>
      {ArraiMain.map((el, index) => (
        <Container key={index}>
          <h1>{el.text}</h1>
          <div>
            <Img src={el.img} alt="" />
          </div>
        </Container>
      ))}
    </div>
  );
};

const Container = styled("div")``;
const Img = styled("img")`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

export default Main;
