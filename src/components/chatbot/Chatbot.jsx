import React, { useState } from "react";
import "./chatbot.css";
import { IoSend } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botReply = { text: "I'm a dummy bot! 🤖", sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      <div className={`chat-icon ${isOpen ? "hidden" : ""}`} onClick={() => setIsOpen(true)}>
        <BsWhatsapp size={40} color="white" />
      </div>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>WhatsApp Chat</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}><IoSend /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
