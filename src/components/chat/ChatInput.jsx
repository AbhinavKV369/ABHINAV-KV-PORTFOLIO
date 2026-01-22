import { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  return (
    <div className="flex items-center gap-2 border-t border-gray-700 bg-black p-3">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your question..."
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        className="flex-1 rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 text-sm
                   text-white placeholder-gray-400 outline-none
                   focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
      />

      <button
        type="button"
        onClick={handleSend}
        disabled={!message.trim()}
        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white
                   transition hover:bg-indigo-700
                   disabled:cursor-not-allowed disabled:opacity-40">
        Send
      </button>
    </div>
  );
};

export default ChatInput;
