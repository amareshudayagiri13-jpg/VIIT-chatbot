import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const botResponses = {
  Admission: {
    title: "Registration Process",
    text: "Thanks for your interest! One of our expert counsellors will reach out to you to discuss your career aspirations.",
    link: "#",
  },
  Courses: {
    title: "Our Courses",
    text: "We offer B.Tech, M.Tech, MBA and MCA programs. Please visit our website for detailed information.",
    link: "#",
  },
  Prerequisites: {
    title: "Contact Information",
    form: true,
  },
  "Campus Life": {
    title: "Campus Life at VIIT",
    text: "VIIT has a vibrant campus with sports, cultural events, hackathons and more! 🎉",
  },
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Hi! Welcome to VIIT Help Desk. How can I assist you today?",
    },
  ]);

  const handleQuickReply = (label) => {
    const userMsg = { type: "user", text: label };
    const response = botResponses[label] || {
      text: "Please contact us at helpdesk@viit.ac.in",
    };
    const botMsg = { type: "bot", ...response };
    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleSend = (text) => {
    const userMsg = { type: "user", text };
    const botMsg = {
      type: "bot",
      text: "Thanks for reaching out! Our team will get back to you soon. 😊",
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-yellow-500 transition text-2xl"
      >
        💬
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 shadow-2xl rounded-2xl overflow-hidden font-sans z-50 flex flex-col">
      <ChatHeader onClose={() => setIsOpen(false)} />
      <ChatMessages messages={messages} onQuickReply={handleQuickReply} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}