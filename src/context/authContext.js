import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.get("http://localhost:8000/users", inputs, {
      withCredentials: true,
    });
    let foundObj = res.data.filter((person) => person.email === inputs.email);
    if (foundObj.password === inputs.password) {
      setCurrentUser(foundObj.data);
    } else {
      alert("некорректный email или пароль");
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
