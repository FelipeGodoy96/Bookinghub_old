import { createContext, useState, useEffect } from "react";

export const LogonStateContext = createContext()

export const LogonStateContextProvider = ({children}) => {
    const [logonState, setLogonState] = useState(() => {
            const storedLogonState = localStorage.getItem('logonState');
            return storedLogonState ? JSON.parse(storedLogonState) : { isLoggedIn: false, token: null };
        })

    
        useEffect(() => {
            localStorage.setItem('logonState', JSON.stringify(logonState));
        }, [logonState])
    
    return (
        <LogonStateContext.Provider value={{logonState, setLogonState}}>
            {children}
        </LogonStateContext.Provider>
    )
}
