import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const data = await axios.post(
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

export const useAuth = () => {
  const mutageSignIn = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      // store token  in localstorage
    },
  });

  return {
    mutageSignIn,
  };
};
