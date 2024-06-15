import { useState } from "react";
import { useBats } from "./use-bats";
import { Button } from "../components/button";
import { TrashIcon, PlusIcon, PencilIcon } from "@heroicons/react/24/solid";
import { Input } from "../components/input";
import { Badge } from "../components/badge";
import { Heading } from "../components/heading";
import { Text, TextLink } from "../components/text";
import { Divider } from "../components/divider";

export function Bats() {
  const [batTextAdd, setBatTextAdd] = useState("new-bat ✅");
  const [batId, setBatId] = useState(0);

  const { queryGetBats, mutationAddBat, mutationDeleteBat, mutationEditBat } =
    useBats();

  const { isPending, error, data } = queryGetBats;

  return (
    <>
      <Heading level={1} className="mb-4">
        Bats
      </Heading>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <Input
              className="max-w-48"
              type="text"
              value={batTextAdd}
              onChange={(x) => setBatTextAdd(x.currentTarget.value)}
            />
            <Button
              disabled={mutationAddBat.isPending}
              onClick={() => {
                mutationAddBat.mutate({ text: batTextAdd });
              }}
            >
              <PlusIcon />
              Add bat
            </Button>
            {mutationAddBat.isError && (
              <Badge color="rose">{mutationAddBat.error.message}</Badge>
            )}
          </div>
          <div>
            <div className="flex flex-row gap-2">
              <Input
                className="max-w-48"
                type="number"
                value={batId}
                onChange={(x) => setBatId(Number(x.currentTarget.value))}
              />
              <Button
                disabled={mutationDeleteBat.isPending}
                onClick={() => {
                  mutationDeleteBat.mutate({ id: String(batId) });
                }}
              >
                <TrashIcon />
                Detete a bat
              </Button>
              {mutationDeleteBat.isError && (
                <Badge color="rose">{mutationDeleteBat.error.message}</Badge>
              )}
            </div>
          </div>
          <div>
            <div>
              <Button
                disabled={mutationEditBat.isPending}
                onClick={() => {
                  mutationEditBat.mutate({
                    id: String(batId),
                    text: batTextAdd,
                  });
                }}
              >
                <PencilIcon />
                Patch bat
              </Button>
              {mutationEditBat.isError && (
                <Badge color="rose">{mutationEditBat.error.message}</Badge>
              )}
            </div>
          </div>
        </div>
        <Divider />
        <Text>
          Api call :{" "}
          <TextLink href={`${import.meta.env.VITE_API_URL}/bat`}>
            {import.meta.env.VITE_API_URL}/bat
          </TextLink>
        </Text>
        <div>
          {isPending ? (
            <Text className="">Loading...</Text>
          ) : error ? (
            <Text className="text-red-500">Error: {error.message}</Text>
          ) : (
            <div>
              <Text className="text-xs">
                <pre>{JSON.stringify(data.data, null, 2)}</pre>
              </Text>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
