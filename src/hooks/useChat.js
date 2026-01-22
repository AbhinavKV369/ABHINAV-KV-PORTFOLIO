import { useState } from "react";
import { sendMessageToAI } from "../services/chatServices";

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text?.trim()) return;

    // Add user message immediately
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    try {
      // Send message to AI
      const reply = await sendMessageToAI(text);

      // Check reply validity
      if (!reply || typeof reply !== "string") {
        throw new Error("Invalid response from AI");
      }

      // Add AI message
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch (error) {
      console.error("Chat API Error:", error);

      // Add a fallback AI message
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
