import { TimeExtract } from "../../../../server/utilities/TimeExtract";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { AuthUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const from_I = message.senderId === AuthUser._id;
  const chatPosClass = from_I ? "chat-end" : "chat-start";
  const chatProfilePic = from_I
    ? AuthUser.profilePic
    : selectedConversation.profilePic;
  const chatBubbleColor = from_I ? "bg-blue-500" : "bg-gray-500";
  const sendTime = TimeExtract(message.createdAt)

  return (
    <div className={`chat ${chatPosClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={`${chatProfilePic}`} alt="Tailwind chat bubble" />
        </div>
      </div>
      <div className={`chat-bubble shadow-black drop-shadow-2xl text-white bg-black flex justify-between items-center pb-2 ${chatBubbleColor}`}>
        <span className="text-wrap max-w-lg">
          {message.message}
        </span>
      </div>
      <div className="chat-footer text-gray-700 text-xs flex gap-1">{sendTime}</div>
    </div>
  );
};

export default Message;
