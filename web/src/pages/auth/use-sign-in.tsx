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
  const mutageSignIn = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      // store token  in localstorage
      const token = data.data.accessToken;
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    },
    onError: (error) => {
      console.log(error);
      // we could show a toast here
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
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
