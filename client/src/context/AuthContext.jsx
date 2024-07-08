/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) => {
  const getUserFromLocalStorage = () => {
    try {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
        return null;
    }
};

const [AuthUser, setAuthUser] = useState(getUserFromLocalStorage);

  return <AuthContext.Provider value={{AuthUser, setAuthUser}}>
    {children}
    </AuthContext.Provider>;
};
