import { useState } from "react";
import { useBats } from "./use-bats";

export function Bats() {
  const [batTextAdd, setBatTextAdd] = useState("new-bat ✅");
  const [batId, setBatId] = useState(0);

  const { queryGetBats, mutationAddBat, mutationDeleteBat, mutationEditBat } =
    useBats();

  const { isPending, error, data } = queryGetBats;

  return (
    <div>
      <div>
        <input
          type="text"
          name="add-bat-id"
          value={batTextAdd}
          onChange={(x) => setBatTextAdd(x.currentTarget.value)}
        />
        <button
          disabled={mutationAddBat.isPending}
          onClick={() => {
            mutationAddBat.mutate({ text: batTextAdd });
          }}
        >
          Add bat
        </button>
        {mutationAddBat.isError && (
          <span style={{ color: "red" }}>{mutationAddBat.error.message}</span>
        )}
        <div>
          <input
            type="number"
            value={batId}
            onChange={(x) => setBatId(Number(x.currentTarget.value))}
          />
          <button
            disabled={mutationDeleteBat.isPending}
            onClick={() => {
              mutationDeleteBat.mutate({ id: String(batId) });
            }}
          >
            detete a bat
          </button>
          {mutationDeleteBat.isError && (
            <span style={{ color: "red" }}>
              {mutationDeleteBat.error.message}
            </span>
          )}
          <div>
            <button
              disabled={mutationEditBat.isPending}
              onClick={() => {
                mutationEditBat.mutate({ id: String(batId), text: batTextAdd });
              }}
            >
              Patch bat
            </button>
            {mutationEditBat.isError && (
              <span style={{ color: "red" }}>
                {mutationEditBat.error.message}
              </span>
            )}
          </div>
        </div>
        <div>http://localhost:3030/bat</div>
        {isPending ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            <pre>{JSON.stringify(data.data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
