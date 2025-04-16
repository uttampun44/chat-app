import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

interface AuthValue {
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
    setToken: () => { },
    setUser: () => { }
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<string>("");
    const [token, setToken] = useState<string>("");

    const fetchToken = async () => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            setToken(token);
        }
    };

    useEffect(() => {
        fetchToken()
        if (token) {
            AsyncStorage.setItem("token", token);
        }
    }, [token]);


    return (
        <AuthContext.Provider value={{ user, token, setToken, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

