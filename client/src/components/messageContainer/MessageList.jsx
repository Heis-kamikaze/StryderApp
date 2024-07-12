import { useEffect, useRef } from "react"
import useGetMessages from "../../hooks/useGetMessages"
import MsgSkltn from "../../skeletons/MsgSkltn"
import Message from "./Message"
import useListenMessages from "../../hooks/useListenMessages"

const MessageList = () => {
  const {loading, messages} = useGetMessages()
  useListenMessages();
  const lastMessageRef = useRef();
  
  useEffect(() =>{
    setTimeout(() =>{
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
    }, 10);
  }, [messages])

  return (
    <div className={`px-4 flex-1 overflow-auto ${loading || messages.length === 0 ? "justify-center items-center" : ""}`}>
      {loading && [...Array(3)].map((_, idx) => <MsgSkltn key={idx} />)}

      {!loading && messages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-2xl font-bold text-white">
            No messages yet 
          </p>
          <p className="text-white">Start the conversation</p>
          </div>
      )}

    {!loading && messages.length > 0 && messages.map((message) => (
      <div ref={lastMessageRef} key={message._id}>
        <Message message={message}/>
      </div>
    ))}
    </div>
  )
}

export default MessageList