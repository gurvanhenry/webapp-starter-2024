import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./auth-context";

export const useSignOut = () => {
  const { cleanTokenOfStorage } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();
  console.log("location", location);

  const signOut = () => {
    cleanTokenOfStorage();
    navigate("/users");
  };

  return {
    signOut,
  };
};
