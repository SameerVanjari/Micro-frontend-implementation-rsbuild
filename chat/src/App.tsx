import { useState } from "react";
import { MessageSquare, Send, User } from "lucide-react";
import "./App.css";

interface Message {
  id: number;
  content: string;
  timestamp: Date;
  sender: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hey there! How are you?",
      timestamp: new Date(2024, 2, 1, 14, 30),
      sender: "Alice",
    },
    {
      id: 2,
      content: "I'm doing great! How about you?",
      timestamp: new Date(2024, 2, 1, 14, 31),
      sender: "Bob",
    },
    {
      id: 3,
      content: "Just working on some new features.",
      timestamp: new Date(2024, 2, 1, 14, 32),
      sender: "Alice",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        content: newMessage,
        timestamp: new Date(),
        sender: "You",
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Message List Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Messages
          </h1>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-4rem)]">
          {messages.map((message) => (
            <div
              key={message.id}
              onClick={() => setSelectedMessage(message)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedMessage?.id === message.id ? "bg-blue-50" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{message.sender}</p>
                  <p className="text-sm text-gray-500 truncate">
                    {message.content}
                  </p>
                </div>
                <span className="text-xs text-gray-400">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedMessage ? (
          <>
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">
                Chat with {selectedMessage.sender}
              </h2>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{selectedMessage.sender}</p>
                    <p className="text-xs text-gray-400">
                      {selectedMessage.timestamp.toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 ml-11">{selectedMessage.content}</p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a message to view the conversation
          </div>
        )}

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
