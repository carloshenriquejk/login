import { createContext } from "react";
import { User } from "../../types/User";

export type AuthContextType = {
    user : User | null;
    singnin:(email: string, password: string) => Promise<boolean>;
    sigonout: () =>void;

}

export const AuthContext = createContext<AuthContextType>(null!);