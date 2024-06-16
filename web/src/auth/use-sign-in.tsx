import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "./auth-context";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_API_URL;

const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const data = await axios.post<User>(
    `${URL}/authentication`,
    {
      strategy: "local",
      email,
      password,
    },
    { headers: { "Content-Type": "application/json" } }
  );
  return data;
};

export const useSignIn = () => {
  const { saveTokenInStorage, cleanTokenOfStorage } = useAuth();

  const navigate = useNavigate();

  const mutageSignIn = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      saveTokenInStorage(data.data.accessToken);
      navigate("/users");
    },
    onError: (error) => {
      cleanTokenOfStorage();
      console.log(error);
    },
  });

  return {
    mutageSignIn,
  };
};

export interface User {
  accessToken: string;
  user: {
    id: number;
    email: string;
  };
}
