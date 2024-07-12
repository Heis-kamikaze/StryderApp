import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = (conversation) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  useEffect(
    () => 
    {
      return () => setSelectedConversation(null);
    }, [setSelectedConversation]
  );

  return (
    <>
      
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
           <div className="flex flex-col w-full">
           <div className="bg-black pl-4 py-2 mb-2 flex align-middle items-center w-full">
             <div className="flex align-middle items-center">
             <div className="avatar">
                <div className="w-12 rounded-full">
                  <img
                    src={selectedConversation.profilePic}
                    alt="user profile photo"
                  />
                </div>
              </div>
              <div className="pl-4 flex flex-col">
                <span className="text-white font-bold">
                  {selectedConversation.username}
                </span>
                <span className={`${isOnline&&isSelected ? "text-blue-400" : "text-gray-500"}`}>
                  {isOnline ? "Online" : "Offline"}
                </span>
              </div>
             </div>
             <div>

             </div>
            </div>

            <MessageList />
            <MessageInput />
           </div>
          </>
        )}
    </>
  );
};

export default MessageContainer;

export const NoChatSelected = () => {
  const { AuthUser } = useAuthContext();
  return (
    <div className=" flex-col items-center justify-center h-full w-full hidden sm:flex md:flex gap-6">
      <div className="text-5xl sm:text-3xl font-bold text-white text-center">
        Welcome {AuthUser.username}
      </div>
      <div className="text-2xl sm:text-lg font-bold text-white text-center justify-center">
        Select a chat to start messaging
      </div>
      <div>
        <TiMessages className="text-2xl sm:text-4xl md:text-9xl text-center text-white" />
      </div>
    </div>
  );
};
