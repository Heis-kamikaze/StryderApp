import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = false;

  return (
    <>
      <div className="overflow-y-auto flex-1">
        { noChatSelected ? (
          <NoChatSelected />
        ) : (
          <>
            <div className="bg-black pl-4 py-2 mb-2 flex align-middle items-center w-full">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="./x.jpg" alt="user profile photo" />
                </div>
              </div>
              <div className="pl-4">
                <span className="text-white font-bold">John Doe</span>
              </div>
            </div>

            <MessageList />
            <MessageInput />
          </>
        )}
      </div>
    </>
  );
};

export default MessageContainer;

export const NoChatSelected = () => {
  return (
    <div className=" flex-col items-center justify-center h-full w-full hidden sm:flex md:flex gap-6">
      <div className="text-5xl sm:text-3xl font-bold text-white text-center">
        Welcome John Doe
      </div>
      <div className="text-2xl sm:text-lg font-bold text-white">
        Select a chat to start messaging
      </div>
      <div>
        <TiMessages className="text-2xl sm:text-4xl md:text-9xl text-center text-white" />
      </div>
    </div>
  );
};
