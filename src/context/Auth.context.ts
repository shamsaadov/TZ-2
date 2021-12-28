import React from "react";
import { IAuthInterface } from "../interfaces/auth.interface";

const defaultValue = {
  auth: false,
  setAuthState: () => {
    return;
  },
};

export const AuthContext = React.createContext<IAuthInterface>(defaultValue);
