import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Bell, Calendar, MapPin } from "lucide-react";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function NotificationDetail() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleAccept = () => {
    navigate("/request-accepted");
  };

  const handleRefuse = () => {
    navigate("/notifications");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 pb-20">
      <Header />

      <main className="max-w-md mx-auto">
        {/* Page Header */}
        <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)}>
              <ArrowLeft size={24} className="text-gray-800" />
            </button>
            <h1 className="text-xl font-semibold">Notifications</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell size={24} className="text-red-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="w-10 h-10 bg-indigo-900 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">C</span>
            </div>
          </div>
        </div>

        <div className="px-6 py-6">
          {/* Parent Info Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-purple-200 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHNtaWxlfGVufDF8fHx8MTc3MjYzNjU0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Rémy D."
                className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900">Rémy D.</span>
                  <span className="text-yellow-500 text-sm">⭐</span>
                  <span className="text-sm text-gray-600">profil vérifié</span>
                </div>
                <p className="text-sm text-gray-700">Ride request for Emma</p>
              </div>
            </div>

            {/* Trip Details */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Ride for Emma</h3>

              {/* Route */}
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-red-500 flex-shrink-0" />
                <p className="text-sm">
                  <span className="text-blue-600 font-medium">École ISN</span>
                  <span className="text-gray-600"> → </span>
                  <span className="text-blue-600 font-medium">Home</span>
                </p>
              </div>

              {/* Time */}
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-purple-600 flex-shrink-0" />
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Today</span> 16h00
                </p>
              </div>

              {/* Map */}
              <div className="bg-gradient-to-br from-green-200 to-blue-300 rounded-xl h-40 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 300 200">
                    {/* Road path */}
                    <path
                      d="M 50 150 Q 100 120 150 100 Q 200 80 250 60"
                      stroke="#4B5563"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="10 5"
                    />
                    {/* Water area */}
                    <ellipse
                      cx="180"
                      cy="140"
                      rx="80"
                      ry="40"
                      fill="#3B82F6"
                      opacity="0.3"
                    />
                  </svg>
                </div>
                {/* Map marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <MapPin size={32} className="text-red-600 drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={handleRefuse}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-2xl py-3 px-6 font-semibold transition-all shadow-sm"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 bg-green-900 hover:bg-green-800 text-white rounded-2xl py-3 px-6 font-semibold transition-all shadow-sm"
            >
              Accept
            </button>
          </div>

          {/* Message Section */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-purple-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message (optional):
            </label>
            <input
              type="text"
              placeholder="Écrit un message à Rémy D..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
