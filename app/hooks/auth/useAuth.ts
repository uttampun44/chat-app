import { AuthContext } from "@/context/features/authcontext";
import { useContext } from "react";

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used within a AuthProvider");
   return context;
};