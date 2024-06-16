import { useContext, createContext, useState, useEffect } from "react";

import {
  removeBearerTokenOfApiCall,
  setBearerTokenForApiCall,
} from "./api-call-token";

const AuthContext = createContext<{
  token: string;
  isAuthenticated: boolean;
  saveTokenInStorage: (token: string) => void;
  cleanTokenOfStorage: () => void;
}>({
  token: "",
  isAuthenticated: false,
  saveTokenInStorage: () => {},
  cleanTokenOfStorage: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setBearerTokenForApiCall(savedToken);
      setToken(savedToken);
      setIsAuthenticated(true);
    }
  }, [token]);

  const saveTokenInStorage = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
    setBearerTokenForApiCall(token);
    setIsAuthenticated(true);
  };

  const cleanTokenOfStorage = () => {
    setToken("");
    removeBearerTokenOfApiCall();
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        saveTokenInStorage,
        cleanTokenOfStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
