import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const ConvoList = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="py-2 mx-3 flex flex-col overflow-y-auto w-auto">
      {
        conversations.map(
          (conversation, idx) => (
            <Conversation key={conversation._id} conversation={conversation} 
            lastIdx ={idx === conversations.length - 1}/>
          )
        )
      }

      {loading ? <span className="loading loading-dots mx-auto"></span> : null}
    </div>
  );
};

export default ConvoList;
