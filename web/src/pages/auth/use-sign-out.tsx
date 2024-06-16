import axios from "axios";

export const useSignOut = () => {
  const clearToken = () => {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  };

  return {
    clearToken,
  };
};
