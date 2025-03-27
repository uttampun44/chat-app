import { AuthProvider } from "./features/authcontext";

interface ContextProps {
    children: React.ReactNode;
}       
export default function Context({children}: ContextProps){
    return(
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}