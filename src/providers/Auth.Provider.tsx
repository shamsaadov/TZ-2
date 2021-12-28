import React, { useState } from "react";
import { AuthContext } from "../context/Auth.context";
import { LOGIN_STORAGE_KEY } from "../constants/localStorage";

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem(LOGIN_STORAGE_KEY) || "false");
  });

  const setAuthState = (value: boolean) => {
    setAuth(value);
    localStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(value));
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
