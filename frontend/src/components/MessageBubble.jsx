function MessageBubble({ message }) {

  const isUser = message.role === "user"

  return (
    <div className={`flex mb-3 ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`px-4 py-2 rounded-2xl max-w-xs text-sm ${
        isUser 
          ? "bg-blue-900 text-white" 
          : "bg-gray-200 text-gray-800"
      }`}>
        {message.content}
      </div>
    </div>
  )
}

export default MessageBubble