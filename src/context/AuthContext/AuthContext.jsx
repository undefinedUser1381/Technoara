import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiReq } from "@/services/axios/api/apiReq";

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  userInformation: {},
  login: (userData) => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [userInformation, setUserInformation] = useState(null);

  const login = (userData) => {
    setIsLoggedin(true);
    setToken(userData.data.data[0].access_token);
    setUserInformation(userData.data.data[0]);
    localStorage.setItem("token", userData.data.data[0].access_token);
  };

  const logout = () => {
    console.log("Log out");
    setIsLoggedin(false);
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      alert("has token");
      navigate("/");
      apiReq
        .get("/users/get-user", { headers: { 'Cookie' : `access_token=${token}` } })
        .then((data) => {
          setIsLoggedin(true)
          console.log(data.data);
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, isLoggedIn, login, logout, userInformation }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
