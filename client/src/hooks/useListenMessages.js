import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"

import notifSound from "../assets/sounds/notif.wav"

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(() => {
    socket?.on("newMessage", 
        (newMessage) => {
            newMessage.shouldNotify = true;
            // Notificaion sound effect here
            
            setMessages([...messages, newMessage])
            const notif = new Audio(notifSound)
            notif.play()
    })

    // Turn off event when component unmounts
    return () => socket?.off("newMessage")
  },[socket, setMessages, messages])
}

export default useListenMessages