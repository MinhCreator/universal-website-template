import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/react-router";
import { MuiProvider } from "./MuiProvider";
import { ChakraProvider } from "./ChakraProvider";
import { router } from "../routes/routeTree";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5 },
  },
});

export function AppProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      <MuiProvider>
        <ChakraProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </ChakraProvider>
      </MuiProvider>
    </QueryClientProvider>
  );
}
