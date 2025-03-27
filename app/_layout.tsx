import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import Context from "@/context/context";


const queryClient = new QueryClient();

export default function RootLayout() {
   return (
      <QueryClientProvider client={queryClient}>
         <Context >
            <Stack />
         </Context>
      </QueryClientProvider>
   );
}
