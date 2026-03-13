export default function ChatHeader({ onClose }) {
  return (
    <div className="bg-yellow-400 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-yellow-500 text-sm">
          VIIT
        </div>
        <div>
          <p className="font-bold text-sm text-gray-800">VIIT Help Desk</p>
          <p className="text-xs text-gray-600">🟢 We are online to assist you</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="bg-white rounded-full w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100">
          ⋮
        </button>
        <button
          onClick={onClose}
          className="bg-white rounded-full w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100"
        >
          ✕
        </button>
      </div>
    </div>
  );
}