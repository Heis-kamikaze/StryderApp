import { GrSend } from "react-icons/gr";

const MessageInput = () => {
  return (
    <form action="" className="px-4 my-3 flex ">
        <div className="w-full relative">
            <input type="text" className="border text-sm rounded-lg block w-full p-2 pr-8 bg-gray-700 border-black text-white text-wrap h-fit overflow-y-auto" placeholder="What's on your mind...?"/>
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3 text-white">
            <GrSend />
            </button>
            
            </div>
    </form>
  )
}

export default MessageInput