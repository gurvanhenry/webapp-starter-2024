import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Bats } from "./bats/Bats";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Bats />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
