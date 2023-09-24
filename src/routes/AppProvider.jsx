import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Home from "../components/pages/Home/Home";
function RouterProvider() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RouterProvider;
