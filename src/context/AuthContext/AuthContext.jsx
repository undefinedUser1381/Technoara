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
    //  code
  };

  const logout = () => {
    // code
  };


  return (
    <AuthContext.Provider
      value={{ token, isLoggedIn, login, logout, userInformation }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
