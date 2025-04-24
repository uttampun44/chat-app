import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import Context from "@/context/context";
import { Toaster } from "sonner-native";
import 'react-native-reanimated';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";

const queryClient = new QueryClient();

export default function RootLayout() {
   return (
      <GestureHandlerRootView style={{ flex: 1 }}>
             <StatusBar barStyle="light-content" />
            <QueryClientProvider client={queryClient}>
               <Context >
                  <Toaster richColors />
                  <Stack />
               </Context>
            </QueryClientProvider>
      </GestureHandlerRootView>
      
   );
}
