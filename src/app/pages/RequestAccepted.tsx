import { useNavigate } from "react-router";
import { Bell, List, MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";

export function RequestAccepted() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 pb-20">
      <Header />

      <main className="max-w-md mx-auto">
        {/* Page Header */}
        <div className="bg-white px-6 py-4 flex items-center justify-end gap-3 border-b border-gray-200">
          <div className="relative">
            <Bell size={24} className="text-red-500" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          <div className="w-10 h-10 bg-indigo-900 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">C</span>
          </div>
        </div>

        <div className="px-6 py-12 flex flex-col items-center">
          {/* Success Icon */}
          <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <svg
              className="w-20 h-20 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Demande acceptée !
          </h1>

          {/* Message */}
          <p className="text-center text-gray-700 mb-8 px-6 leading-relaxed">
            Merci pour votre aide, Rémy D. a été informée de votre prise en charge.
          </p>

          {/* Action Buttons */}
          <div className="w-full space-y-4">
            <button
              onClick={() => navigate("/rides")}
              className="w-full bg-yellow-100 hover:bg-yellow-200 text-gray-900 rounded-2xl py-4 px-6 font-semibold transition-all shadow-sm flex items-center justify-center gap-3"
            >
              <List size={24} className="text-orange-600" />
              <span>View my rides</span>
            </button>

            <button
              onClick={() => navigate("/messages")}
              className="w-full bg-yellow-100 hover:bg-yellow-200 text-gray-900 rounded-2xl py-4 px-6 font-semibold transition-all shadow-sm flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} className="text-gray-700" />
              <span>Accéder à la Messages</span>
            </button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
