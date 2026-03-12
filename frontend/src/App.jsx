import { useState, useEffect } from "react"
import ChatWindow from "./components/ChatWindow"
import InputBar from "./components/InputBar"

const BACKEND_URL = "http://localhost:5000/chat"

const WELCOME_MESSAGE = {
  role: "assistant",
  content: "👋 Hi! I'm VIIT Smart Assistant. Ask me anything about admissions, fees, hostel, courses or placements!"
}

function App() {

  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [isLoading, setIsLoading] = useState(false)

  // load from localStorage on first visit
  useEffect(() => {
    const saved = localStorage.getItem("viit_chat")
    if (saved) {
      setMessages(JSON.parse(saved))
    }
  }, [])

  // save to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem("viit_chat", JSON.stringify(messages))
  }, [messages])

  async function sendMessage(text) {
    const newMessages = [...messages, { role: "user", content: text }]
    setMessages(newMessages)
    setIsLoading(true)

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages })
      })
      const data = await res.json()
      setMessages([...newMessages, { role: "assistant", content: data.reply }])
    } catch (err) {
      setMessages([...newMessages, { role: "assistant", content: "⚠️ Something went wrong. Please try again." }])
    } finally {
      setIsLoading(false)
    }
  }

  function clearChat() {
    localStorage.removeItem("viit_chat")
    setMessages([WELCOME_MESSAGE])
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl flex flex-col h-[600px]">

        {/* Header */}
        <div className="bg-blue-900 text-white px-5 py-4 rounded-t-2xl flex items-center justify-between border-b-4 border-yellow-400">
          <div>
            <h1 className="font-bold text-lg">🎓 VIIT Smart Assistant</h1>
            <p className="text-xs text-blue-200">Vignan's Institute of Information Technology</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-green-300 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
              Online
            </span>
            <button onClick={clearChat} className="text-xs text-blue-200 hover:text-white">
              Clear
            </button>
          </div>
        </div>

        {/* Chat */}
        <ChatWindow messages={messages} isLoading={isLoading} />

        {/* Input */}
        <InputBar onSend={sendMessage} isLoading={isLoading} />

      </div>
    </div>
  )
}

export default App