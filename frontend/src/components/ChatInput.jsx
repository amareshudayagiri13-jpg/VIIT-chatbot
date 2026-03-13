import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="bg-white border-t flex items-center px-3 py-2 gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type your message..."
        className="flex-1 text-sm outline-none border rounded-full px-3 py-1.5 focus:border-yellow-400"
      />
      <button
        onClick={handleSend}
        className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center hover:bg-yellow-500 transition text-white font-bold"
      >
        ➤
      </button>
    </div>
  );
}