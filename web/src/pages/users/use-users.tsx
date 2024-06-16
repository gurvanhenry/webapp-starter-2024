import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const getUsers = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token");
  const data = await axios.get(`${URL}/users`, {
    params: { $limit: "100" },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useUsers = () => {
  const queryGetUsers = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return {
    queryGetUsers,
  };
};
