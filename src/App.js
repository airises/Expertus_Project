import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
