import { GrSend } from "react-icons/gr";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("")
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form action="" className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2 pr-8 bg-gray-700 border-black text-white"
          placeholder="What's on your mind...?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
/>
        <button
          type="submit"
          className={`absolute inset-y-0 end-0 flex items-center pe-3 text-white ${ (message === "") ? "btn-disabled" : "" }`}
        >
          {loading? <div className="loading loading-spinner"></div> : <GrSend  className={` ${ (message == "") ? "text-gray-500" : "" }`}/> }
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
