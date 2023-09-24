import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Home from "../components/pages/Home/Home";
import Add from "../components/components/Form/Add";
import TopicDetails from "../components/components/TopicDetails/TopicDetails";
import Test from "../components/components/Test/Test";
import Article from "../components/components/Articles/Articles";
import { Help } from "@mui/icons-material";
function RouterProvider() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/home" element={<Main />} /> */}
        <Route path="/help" element={<Help/>} />
        <Route path="/article" element={<Article/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/add" element={<Add />} />
        <Route path="/details/:id" element={<TopicDetails />} />
        <Route path="/tests" element={<Test />} />
        <Route path="/articles" element={<Article />} />
      </Routes>
    </div>
  );
}

export default RouterProvider;

