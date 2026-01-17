import { useChat } from "../../hooks/useChat";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { X } from "lucide-react";

const ChatWindow = ({ onClose }) => {
  const { messages, sendMessage, loading } = useChat();

  return (
    <>
      {/* Backdrop Blur */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Chat Window */}
      <div
        className="fixed bottom-18 right-6 z-50 flex h-[460px] w-[340px] flex-col 
                   overflow-hidden rounded-2xl bg-black shadow-2xl
                   border border-white border-opacity-20
                   ring-2 ring-white ring-opacity-20
                   animate-in fade-in slide-in-from-bottom-4
                   max-sm:right-4 max-sm:w-[calc(100%-2rem)]
                   backdrop-brightness-105">
        {/* Header */}
        <div className="flex items-center justify-between bg-black px-4 py-3 text-white">
          <span className="text-sm font-semibold">Ask about Abhinav</span>
        </div>

        {/* Body */}
        <div className="flex-1 space-y-3 overflow-y-auto bg-gray-900 p-3 rounded-b-2xl">
          {messages.map((msg, index) => (
            <ChatMessage key={index} {...msg} />
          ))}

          {loading && (
            <p className="text-xs text-gray-400 animate-pulse">
              AI is typing...
            </p>
          )}
        </div>

        {/* Input */}
        <ChatInput onSend={sendMessage} />
      </div>
    </>
  );
};

export default ChatWindow;
