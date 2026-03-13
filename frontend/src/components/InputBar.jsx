import { useState } from "react"

function InputBar({ onSend, isLoading }) {

  const [input, setInput] = useState("")

  function handleSend() {
    if (!input.trim() || isLoading) return
    onSend(input)
    setInput("")
  }

  return (
    <div className="p-4 border-t border-gray-200 flex gap-2">

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Ask anything about VIIT..."
        disabled={isLoading}
        className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:border-blue-900 disabled:opacity-50"
      />

      <button
        onClick={handleSend}
        disabled={isLoading}
        className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-semibold disabled:opacity-50 hover:bg-blue-800"
      >
        Send
      </button>

    </div>
  )
}

export default InputBar