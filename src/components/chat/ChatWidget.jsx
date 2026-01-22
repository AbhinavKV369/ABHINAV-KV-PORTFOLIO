import { BotMessageSquare, X } from "lucide-react";
import { useState } from "react";
import ChatWindow from "./ChatWindow";

const ChatWidget = () => {
  const [openWidget, setOpenWidget] = useState(false);

  const handleWidgetToggle = () => {
    setOpenWidget((prev) => !prev);
  };

  return (
    <>
      {/* Chat Window */}
      {openWidget && <ChatWindow onClose={() => setOpenWidget(false)} />}

      {/* Floating Toggle Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={handleWidgetToggle}
          aria-label="Toggle chat widget"
          className="flex items-center gap-2 rounded-full bg-black px-5 py-3
                     text-sm font-medium text-white shadow-2xl border-2
                     transition-all duration-200
                     hover:scale-105 hover:bg-gray-900 active:scale-95">
          {openWidget ? (
            <X size={20} />
          ) : (
            <>
              <BotMessageSquare size={20} />
              <span>Chat</span>
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default ChatWidget;
