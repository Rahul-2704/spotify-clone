"use client"

import { MyUserContextProvider } from "@/hooks/useUser";
import { Dela_Gothic_One } from "next/font/google";

interface UserProviderProps{
    children:React.ReactNode;
}
const UserProvider:React.FC<UserProviderProps> =({children})=>{
    return(
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
}
export default UserProvider;