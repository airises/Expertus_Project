import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import TopicContextProvider from "./context/topicContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TopicContextProvider>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  </TopicContextProvider>
);
