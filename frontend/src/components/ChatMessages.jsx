import ContactForm from "./ContactForm";

const quickReplies = ["Admission", "Courses", "Prerequisites", "Campus Life"];

export default function ChatMessages({ messages, onQuickReply }) {
  return (
    <div className="bg-white h-96 overflow-y-auto p-3 flex flex-col gap-3">
      
      {/* Quick Reply Buttons */}
      <div className="flex gap-2 flex-wrap">
        {quickReplies.map((btn) => (
          <button
            key={btn}
            onClick={() => onQuickReply(btn)}
            className="bg-yellow-400 text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-yellow-500 transition"
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Messages */}
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
        >
          {msg.type === "user" ? (
            <div className="bg-yellow-400 text-gray-800 text-sm px-4 py-2 rounded-xl max-w-[75%] font-semibold">
              {msg.text}
            </div>
          ) : (
            <div className="bg-gray-100 rounded-xl p-3 max-w-[85%] text-sm">
              {msg.title && (
                <p className="font-bold mb-1">{msg.title}</p>
              )}
              {msg.text && (
                <p className="text-gray-700">{msg.text}</p>
              )}
              {msg.link && (
                <a href={msg.link} className="text-blue-500 underline text-xs">
                  Read more →
                </a>
              )}
              {msg.form && <ContactForm />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}