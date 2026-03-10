import { useNavigate } from "react-router";
import { ArrowLeft, Search } from "lucide-react";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";

interface Message {
  id: string;
  from: string;
  avatar: string;
  preview: string;
  time: string;
  unread: boolean;
}

export function Messages() {
  const navigate = useNavigate();

  const messages: Message[] = [
    {
      id: "1",
      from: "Sophie R.",
      avatar: "a",
      preview: "Thanks for the request! I can take Charlotte...",
      time: "10:30",
      unread: true,
    },
    {
      id: "2",
      from: "Pierre S.",
      avatar: "a",
      preview: "No problem for Oscar tomorrow!",
      time: "Yesterday",
      unread: false,
    },
    {
      id: "3",
      from: "Marie L.",
      avatar: "a",
      preview: "Hi, I'm looking for someone for...",
      time: "Mar 2",
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 pb-20">
      <Header />

      <main className="max-w-md mx-auto">
        <div className="bg-white px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-4 mb-4">
            <button onClick={() => navigate(-1)}>
              <ArrowLeft size={24} className="text-gray-800" />
            </button>
            <h1 className="text-xl font-semibold">Messages</h1>
          </div>

          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search a conversation..."
              className="w-full bg-purple-50 rounded-full pl-12 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {messages.map((message) => (
            <button
              key={message.id}
              className="w-full bg-white hover:bg-purple-50 px-6 py-4 flex items-start gap-4 transition-all"
            >
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                {message.avatar}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className={`font-semibold ${message.unread ? "text-gray-900" : "text-gray-700"}`}>
                    {message.from}
                  </h3>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
                <p className={`text-sm truncate ${message.unread ? "text-gray-900 font-medium" : "text-gray-600"}`}>
                  {message.preview}
                </p>
              </div>
              {message.unread && <div className="w-3 h-3 bg-purple-600 rounded-full flex-shrink-0 mt-2" />}
            </button>
          ))}
        </div>

        {messages.length === 0 && (
          <div className="px-6 py-12 text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">a</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">No messages</h3>
            <p className="text-gray-600 text-sm">Your conversations with other parents will appear here</p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
