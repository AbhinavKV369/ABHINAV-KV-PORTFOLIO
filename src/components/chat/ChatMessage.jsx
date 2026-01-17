const ChatMessage = ({ role, text }) => {
  const isUser = role === "user";

  return (
    <div
      className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm
        ${
          isUser
            ? "ml-auto bg-blue-900 text-white rounded-br-md"
            : "mr-auto bg-gray-200 text-gray-800 rounded-bl-md"
        }`}>
      {text}
    </div>
  );
};

export default ChatMessage;
