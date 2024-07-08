const Message = () => {
  return (
    <div className="chat chat-end text-black">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="./x.jpg" alt="Tailwind chat bubble" />
        </div>
      </div>
      <div className="chat-bubble chat-end  shadow-black drop-shadow-2xl text-white bg-black flex justify-between items-center">
        <span className="text-wrap max-w-lg">
          Hey, {`how's`} it going? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi illo, consequuntur corporis quo eos est,
          sit vel saepe iste reprehenderit delectus laboriosam assumenda numquam
          quae. here iwie okaw
        </span>
      </div>
      <div className="chat-footer">12:42</div>
    </div>
  );
};

export default Message;
