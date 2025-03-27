import React, { createContext, useContext } from "react";

interface AuthValue{
    user: string;
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>
    setUser: React.Dispatch<React.SetStateAction<string>>
}

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthContext = createContext<AuthValue>({
    user: "",
    token: "",
    setToken: () => {},
    setUser: () => {}
});

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = React.useState<string>("");
    const [token, setToken] = React.useState<string>("");
   return (
          <AuthContext.Provider value={{user, token, setToken, setUser}}>
             {children}
            </AuthContext.Provider>
   )
}

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used within a AuthProvider");
   return context;
};