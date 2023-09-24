import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Slidebar from "../components/components/Sidebar/Sidebar";
import Main from "../components/Main/Main";
import Discussions from "../components/Main/Discussions/Discussions";
import Article from "../components/Article/Article";
import Help from "../components/Help/Help";
function RouterProvider() {
  return (
    <div>
      <Slidebar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Main />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/article" element={<Article/>} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RouterProvider;
