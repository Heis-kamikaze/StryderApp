import { create } from "zustand";


const useConversation = create(
    (set) => ({
        // Global state definition
        // selected conversation state
        selectedConversation: null,
        setSelectedConversation: (selectedConversation) => set({selectedConversation}),

        // Message state
        messages: [],
        setMessages: (messages) => set({messages}),


    })
)

export default useConversation;