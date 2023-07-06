import { createContext, useEffect, useState } from "react";
import { userInfor } from "../userInfo";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user") || null)
    )

    const login = ()=>{
        //TODO
        setCurrentUser({
            id: userInfor[1].id,
            name: userInfor[1].name,
            profilePic: userInfor[1].profilePic
        })
    }
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])
    return(
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
    )
}

