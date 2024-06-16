import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth-context";

export const useSignOut = () => {
  const { cleanTokenOfStorage } = useAuth();

  const navigate = useNavigate();

  const signOut = () => {
    cleanTokenOfStorage();
    navigate("/");
  };

  return {
    signOut,
  };
};
