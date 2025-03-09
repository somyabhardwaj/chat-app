import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("https://chat-app-5bxa.onrender.com"); // Replace with your backend URL

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("hello")
    });
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => socket.off("message");
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: "me", time: new Date().toLocaleTimeString() };
    socket.emit("message", newMessage);
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">
      <div className="bg-green-600 p-4 text-white font-bold">Chat</div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
            <div className={`p-2 rounded-lg max-w-xs text-white ${msg.sender === "me" ? "bg-green-500" : "bg-gray-500"}`}>
              <p>{msg.text}</p>
              <span className="text-xs block text-right text-gray-200">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white flex items-center border-t">
        <input
          type="text"
          className="flex-1 border p-2 rounded-lg focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="ml-2 bg-green-500 text-white p-2 rounded-lg" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
