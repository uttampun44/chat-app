import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Index from ".";

const queryClient = new QueryClient();

export default function Main() {
  return <React.Fragment>
       <QueryClientProvider client={queryClient}>
           <Index />
       </QueryClientProvider>
  </React.Fragment>;
}