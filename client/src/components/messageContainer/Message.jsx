
const Message = () => {
  return (
    <div className="chat chat-end text-black">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="./x.jpg" alt="Tailwind chat bubble" />
            </div>
        </div>
        <div className="chat-bubble text-white bg-black flex justify-between items-center">
           
            <span className="border text-wrap max-w-lg">Hey, {`how's`} it going? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illo, consequuntur corporis quo eos est, sit vel saepe iste reprehenderit delectus laboriosam assumenda numquam quae.
                <div className="chat-footer opacity-50 text-xs inline-flex gap-1  chat-end w-fit h-fit border ml-auto">12:42</div>
            </span>
        
        </div>
    </div>
  )
}

export default Message