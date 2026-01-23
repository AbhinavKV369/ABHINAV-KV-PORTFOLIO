import { useState } from "react";
import { sendMessageToAI } from "../services/chatServices";

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text?.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    try {

      const reply = await sendMessageToAI(text);

      if (!reply || typeof reply !== "string") {
        throw new Error("Invalid response from AI");
      }

      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch (error) {
      console.error("Chat API Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, sendMessage, loading };
};
