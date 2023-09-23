import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";

function RouterProvider() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RouterProvider;
