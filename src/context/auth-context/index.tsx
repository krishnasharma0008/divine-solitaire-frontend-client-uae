// context/auth-context.tsx
import React, { createContext, useContext, useState } from "react";

import {
  deleteToken,
  getToken,
  //setToken,
  deleteUser,
  getUser,
  setUser,
  deleteMobileNumber,
  getMobileNumber,
  setMobileNumber,
  setToken,
} from "@/local-storage";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string, user: string, mobileno: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!getToken() && !!getUser && !!getMobileNumber
  );

  const login = (token: string, user: string, mobileno: string) => {
    //console.log("token", token);
    setToken(token);
    setUser(user);
    setMobileNumber(mobileno);
    setIsLoggedIn(true);
  };

  const logout = () => {
    deleteToken();
    deleteUser();
    deleteMobileNumber();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
