import MessageList from "./MessageList";

const applyClasses = (breakpoint, classes) => {
  return classes
    .split(" ")
    .map((cls) => `${breakpoint}:${cls}`)
    .join(" ");
};

const MessageContainer = () => {
  // Utility function to apply multiple classes for a specific breakpoint

  return (
    <>
      <div
        className="overflow-y-auto"
      >
        <div className="bg-gray-500 px-4 py-2 mb-2 flex flex-grow align-middle items-center justify-between w-full">
        <div className="avatar">
        <div className="w-12 rounded-full">
            <img src="./x.jpg" alt="user profile photo" />
          </div>
        </div>
          <div>
          <span className="text-gray-900 font-bold">John Doe</span>
          </div>
        </div>

        <MessageList />
        {/* <MessageInput /> */}
      </div>
    </>
  );
};

export default MessageContainer;
