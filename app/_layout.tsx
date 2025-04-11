import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import Context from "@/context/context";
import { NavigationContainer } from "@react-navigation/native";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export default function RootLayout() {
   return (
      <QueryClientProvider client={queryClient}>
         <Context >
            <Toaster />
            <Stack />
         </Context>
      </QueryClientProvider>
   );
}
