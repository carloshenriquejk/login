import { AuthContext } from "./AuthContext"
import { useState } from "react";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    const singnin = async (email:string, password: string) => {
        const data = await api.signin(email, password);
        if(data.user && data.token){
            setUser(data.user)
            return true;
        }
        return false;
    }
    const sigonout = () =>{

    }
    return (
            <AuthContext.Provider value={{user, singnin, sigonout}}>
                {children}
            </AuthContext.Provider>
    )
}