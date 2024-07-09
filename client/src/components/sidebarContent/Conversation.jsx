import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation._id
  return (
    <div className="w-full">
      <div className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer hover:bg-gray-500 ${isSelected ? "bg-gray-800 hover:bg-gray-700" : ""}`} onClick={() => setSelectedConversation(conversation)}>

        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user profile photo" />
          </div>
        </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-col gap-3 justify-between">
          <p className="font-bold text-gray-200">{conversation.username}</p>
          <span className="items-center mb-2">Message summary here</span>
        </div>
      </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </div>
  );
};

export default Conversation;
