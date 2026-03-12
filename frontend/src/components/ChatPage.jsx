import { useState, useRef, useEffect } from "react";

const quickReplies = [
  "Admission",
  "Academics",
  "EAPCET Cutoff",
  "Courses",
  "Prerequisites",
  "Fee Structure",
  "Scholarships",
  "Placements",
  "Campus Life",
  "Contact Us",
];

const LOGO = "https://play-lh.googleusercontent.com/tOOHUlCtpqxAeqjeReYJOA8jaXBWpP7GplrnPanNr1JyytTWWVwo64gd769kIkyyAvI";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Hello! Welcome to VIIT Help Desk.\nI'm here to assist you with admissions, courses, campus life and more.\n\nPlease select an option below or type your question:",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleQuickReply = async (label) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: label },
      { type: "bot", text: "⏳ Thinking...", isTyping: true },
    ]);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: label }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev.filter((m) => !m.isTyping),
        { type: "bot", text: data.answer },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev.filter((m) => !m.isTyping),
        { type: "bot", text: "❌ Sorry! Could not connect to server. Please try again!" },
      ]);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const question = input;
    setInput("");
    setMessages((prev) => [
      ...prev,
      { type: "user", text: question },
      { type: "bot", text: "⏳ Thinking...", isTyping: true },
    ]);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev.filter((m) => !m.isTyping),
        { type: "bot", text: data.answer },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev.filter((m) => !m.isTyping),
        { type: "bot", text: "❌ Sorry! Could not connect to server. Please try again!" },
      ]);
    }
  };

  const formatText = (text) => {
    return text.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <>
      <style>{`
        .logo-wrap {
          background: white !important;
          border: 2.5px solid rgba(255,255,255,0.85) !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          position: relative;
        }
        .logo-wrap::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0.55) 0%,
            rgba(255,255,255,0.0) 100%
          );
          border-radius: 999px 999px 0 0;
          pointer-events: none;
          z-index: 10;
        }
        .qr-btn {
          transition: opacity 0.2s ease;
        }
        .qr-btn:hover {
          opacity: 0.85;
        }
        .qr-btn:active {
          transform: scale(0.95);
        }
        .send-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .send-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(21,101,192,0.45);
        }
        .send-btn:active {
          transform: scale(0.93);
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .typing-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #1565C0;
          margin: 0 2px;
          animation: bounce 1.2s infinite;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>

      <div
        className="flex flex-col"
        style={{ height: "100dvh", background: "#e8f0fe", overflow: "hidden" }}
      >
        {/* ── Header ── */}
        <div
          className="shrink-0 flex items-center gap-3 shadow-md"
          style={{
            background:
              "linear-gradient(135deg,#1565C0 0%,#1976D2 60%,#42A5F5 100%)",
            padding: "10px 16px",
          }}
        >
          <div className="flex flex-col items-center shrink-0">
            <div
              className="logo-wrap rounded-full overflow-hidden"
              style={{ width: 44, height: 44, padding: 2 }}
            >
              <img
                src={LOGO}
                alt="Vignan"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span
              className="font-extrabold text-white tracking-widest"
              style={{ fontSize: 8, marginTop: 2 }}
            >
              VIGNAN
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <h1 className="font-bold text-white truncate text-base sm:text-lg md:text-xl">
              VIIT Help Desk
            </h1>
            <p className="text-blue-100 text-xs sm:text-sm truncate">
              🟢 Online · We typically reply instantly
            </p>
          </div>
        </div>

        {/* ── Sub Header ── */}
        <div
          className="shrink-0 text-center text-white font-semibold text-xs sm:text-sm py-1.5"
          style={{ background: "#1976D2" }}
        >
          Vignan's Institute of Information Technology · Visakhapatnam
        </div>

        {/* ── Messages ── */}
        <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-end ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {/* Bot avatar */}
              {msg.type === "bot" && (
                <div className="flex flex-col items-center shrink-0 mr-2">
                  <div
                    className="rounded-full overflow-hidden shadow"
                    style={{
                      width: 28,
                      height: 28,
                      background: "white",
                      border: "2px solid #e0e0e0",
                      padding: 1,
                    }}
                  >
                    <img
                      src={LOGO}
                      alt="bot"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span
                    className="font-extrabold text-blue-700"
                    style={{ fontSize: 6, marginTop: 1 }}
                  >
                    VIGNAN
                  </span>
                </div>
              )}

              {/* Bubble */}
              <div
                className={`rounded-2xl shadow-sm leading-relaxed text-sm sm:text-base ${
                  msg.type === "user"
                    ? "text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none border border-blue-100"
                }`}
                style={{
                  maxWidth: "min(75%, 480px)",
                  padding: "10px 14px",
                  background:
                    msg.type === "user"
                      ? "linear-gradient(135deg,#1565C0,#42A5F5)"
                      : undefined,
                }}
              >
                {/* Typing indicator */}
                {msg.isTyping ? (
                  <div className="flex items-center gap-1 py-1">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                ) : (
                  <>
                    {msg.title && (
                      <p
                        className="font-bold mb-1 text-sm sm:text-base"
                        style={{ color: "#1565C0" }}
                      >
                        {msg.title}
                      </p>
                    )}
                    <p>{formatText(msg.text)}</p>
                  </>
                )}
              </div>

              {/* User avatar */}
              {msg.type === "user" && (
                <div
                  className="rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white shadow ml-2"
                  style={{ width: 32, height: 32, background: "#42A5F5" }}
                >
                  U
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* ── Quick Replies ── */}
        <div
          className="shrink-0 bg-white border-t border-blue-100 px-3"
          style={{ paddingTop: 10, paddingBottom: 14 }}
        >
          <p className="text-xs text-gray-400 font-medium mb-2">
            Quick Replies:
          </p>
          <div
            className="no-scrollbar flex gap-2 overflow-x-auto"
            style={{ paddingBottom: 4, paddingTop: 2 }}
          >
            {quickReplies.map((btn) => (
              <button
                key={btn}
                onClick={() => handleQuickReply(btn)}
                className="qr-btn shrink-0 text-white font-semibold rounded-full
                           shadow text-xs sm:text-sm"
                style={{
                  background: "linear-gradient(135deg,#1565C0,#42A5F5)",
                  padding: "7px 16px",
                  whiteSpace: "nowrap",
                }}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        {/* ── Input ── */}
        <div className="shrink-0 bg-white border-t border-blue-100 flex items-center gap-2 px-3 py-2 shadow-md">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 border-2 border-blue-200 rounded-full outline-none
                       focus:border-blue-400 transition text-sm sm:text-base"
            style={{ padding: "8px 16px" }}
          />
          <button
            onClick={handleSend}
            className="send-btn shrink-0 rounded-full flex items-center
                       justify-center text-white shadow"
            style={{
              background: "linear-gradient(135deg,#1565C0,#42A5F5)",
              width: 40,
              height: 40,
              fontSize: 16,
            }}
          >
            ➤
          </button>
        </div>
      </div>
    </>
  );
}