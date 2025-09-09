import React, { useState } from "react";
import { Search, FileText, Stethoscope, User, Send } from "lucide-react";
import "./chatPage.css";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm your Helping assistant. I can help you with NAMASTE terminologies, ICD-11 mappings, and FHIR resource management. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");

  // NAMASTE code suggestions (example knowledge base)
  const namasteKnowledge = {
    "NAM001.001": {
      mapping: "ICD-11 TM2: TM-AA01.0, Biomedicine: M79.3",
      cure: "Balance Vata dosha with warm oil massage, yoga, and herbal decoctions.",
    },
    "NAM002.015": {
      mapping: "ICD-11 TM2: TM-AA02.1, Biomedicine: K30",
      cure: "Reduce Pitta by cooling diet, avoiding spicy foods, and taking herbal remedies like Amalaki.",
    },
  };

  const handleSend = () => {
  if (!input.trim()) return;

  const userMessage = input.trim();
  const botResponse = namasteKnowledge[userMessage];

  let reply;
  if (botResponse) {
    reply = `Here is the information for ${userMessage}:\n\n🔹 Mapping → ${botResponse.mapping}\n🔹 Suggested Cure → ${botResponse.cure}`;
  } else {
    reply = `You said: ${userMessage}. I’ll try to fetch more information for you.`;
  }

  setMessages((prev) => [
    ...prev,
    { text: userMessage, sender: "user" },
    { text: reply, sender: "bot" }
  ]);

  setInput("");
};


return (
    <div className="chat-container">
      {/* HEADER */}
      <div className="chat-profile">
        <div className="avatar"></div>
        <div className="profile-info">
          <h3>NEXA6 Assistant</h3>
          <p>Healthcare Professional Support</p>
        </div>
        <span className="status">Online</span>
      </div>

      {/* QUICK ACTIONS */}
      <div className="quick-actions">
        <button><Search size={16}/> Search NAMASTE codes</button>
        <button><FileText size={16}/> View ICD-11 mappings</button>
        <button><Stethoscope size={16}/> FHIR validation</button>
        <button><User size={16}/> Patient lookup</button>
      </div>

      {/* CHAT MESSAGES */}
      <div className="chat-body">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask about FHIR, terminologies, patient management..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="send-btn">
          <Send size={18}/>
        </button>
      </div>
    </div>
  );
}
