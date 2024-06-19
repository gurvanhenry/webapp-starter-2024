import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Bat } from "./Bats";

const URL = import.meta.env.VITE_API_URL;

const getBats = async () => {
  const data = await axios.post<Bat[]>(`${URL}/bats/findAll`);
  return data;
};

const postBat = async ({ text }: { text: string }) => {
  const data = await axios.post(
    `${URL}/bats/create`,
    { text, status: "web" },
    { headers: { "Content-Type": "application/json" } }
  );
  return data;
};

const deleteBat = async ({ id }: { id: number }) => {
  const data = await axios.post(`${URL}/bats/remove`, { id: id });
  return data;
};

const patchBat = async ({ id, text }: { id: number; text: string }) => {
  const data = await axios.post(
    `${URL}/bats/changeStatus`,
    { id: id, status: text },
    { headers: { "Content-Type": "application/json" } }
  );
  return data;
};

export const useBats = () => {
  const queryClient = useQueryClient();

  const queryGetBats = useQuery({
    queryKey: ["bats"],
    queryFn: getBats,
  });

  const mutationAddBat = useMutation({
    mutationFn: postBat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bats"] });
    },
  });

  const mutationDeleteBat = useMutation({
    mutationFn: deleteBat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bats"] });
    },
  });

  const mutationEditBat = useMutation({
    mutationFn: patchBat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bats"] });
    },
  });

  return {
    queryGetBats,
    mutationAddBat,
    mutationDeleteBat,
    mutationEditBat,
  };
};
