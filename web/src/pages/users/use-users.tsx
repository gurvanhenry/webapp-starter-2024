import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE3MTg0OTI4MDMsImV4cCI6MTcxODU3OTIwMywiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsInN1YiI6IjMiLCJqdGkiOiI4YTYwODdmYy1mNGUwLTQwMTEtOTZkOS0zY2Y4OGQzNTRhYzMifQ.0MY-10MRkVIyuNTyf3soswSHbS4vLdfxf01sA39R0BE";

const getUsers = async () => {
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
