/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client';


export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketProvider = ({ children }) => {
    const [socket, setSocket]= useState(null);
    const [onlineUsers, setOnlineUsers]= useState([]);
    const {AuthUser} = useAuthContext();

    useEffect(() => {
        if(AuthUser) {
            const socket = io("http://localhost:5000", {
                query:{
                    // stores the authenticated users id to be used in the socket.js file
                    userId: AuthUser._id,
                }
            });

            socket.on("connect", () => {
                console.log('Socket connected:', socket.id);
            });

            socket.on("disconnect", () => {
                console.log('Socket disconnected:', socket.id);
            });

            // From socket.js, using the event name update the online users state to the users
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })

            setSocket(socket)

            // Close socket connection when component is unmounted
            return () => socket.close();
        } else {
            if(socket) {
                socket.close();
                setSocket(null)
            }
        }
    }, [AuthUser])

    return (
        <SocketContext.Provider value={{socket,  onlineUsers}}>
        {children}
        </SocketContext.Provider>
    );
    }