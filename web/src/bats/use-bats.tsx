import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const URL = "http://localhost:3030";

const getBats = async () => {
  const data = await axios.get(`${URL}/bat`, {
    params: { $limit: "100" },
  });
  return data;
};

const postBat = async ({ text }: { text: string }) => {
  const data = await axios.post(
    `${URL}/bat`,
    { text },
    { headers: { "Content-Type": "application/json" } }
  );
  return data;
};

const deleteBat = async ({ id }: { id: string }) => {
  const data = await axios.delete(`${URL}/bat/${id}`);
  return data;
};

const patchBat = async ({ id, text }: { id: string; text: string }) => {
  const data = await axios.patch(
    `${URL}/bat/${id}`,
    { text },
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
