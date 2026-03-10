import { useNavigate } from "react-router";
import { ArrowLeft, Bell } from "lucide-react";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface Notification {
  id: string;
  type: "request" | "reminder" | "accepted";
  parentName: string;
  parentImage: string;
  verified: boolean;
  title: string;
  subtitle: string;
  time?: string;
  childName?: string;
}

export function Notifications() {
  const navigate = useNavigate();

  const notifications: Notification[] = [
    {
      id: "1",
      type: "request",
      parentName: "Rémy D.",
      parentImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHNtaWxlfGVufDF8fHx8MTc3MjYzNjU0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      verified: true,
      title: "Ride request for Emma",
      subtitle: "De École ISN → Home à 16h00",
      childName: "Emma",
    },
    {
      id: "2",
      type: "reminder",
      parentName: "",
      parentImage: "",
      verified: false,
      title: "Upcoming reminder",
      subtitle: "Vous avez un trajet bientôt.\nFootball practice à 17h00",
    },
    {
      id: "3",
      type: "accepted",
      parentName: "Sophie R.",
      parentImage: "",
      verified: false,
      title: "Trajet accepté",
      subtitle: "Charlotte - Painting class\n18h00",
    },
  ];

  const handleNotificationClick = (notification: Notification) => {
    if (notification.type === "request") {
      navigate("/notification-detail");
    } else if (notification.type === "accepted") {
      navigate("/rides");
    }
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
          {/* Today Section */}
          <h2 className="text-purple-700 font-semibold mb-4">Today</h2>

          <div className="space-y-4">
            {/* Request Notification */}
            <button
              onClick={() => handleNotificationClick(notifications[0])}
              className="w-full bg-white rounded-2xl p-4 shadow-sm border border-purple-200 hover:shadow-md transition-all"
            >
              {/* Parent Info */}
              <div className="flex items-center gap-3 mb-3">
                <ImageWithFallback
                  src={notifications[0].parentImage}
                  alt={notifications[0].parentName}
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
                />
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900">
                      {notifications[0].parentName}
                    </span>
                    <span className="text-yellow-500 text-sm">⭐</span>
                    <span className="text-sm text-gray-600">profil vérifié</span>
                  </div>
                  <p className="text-sm text-gray-700">{notifications[0].title}</p>
                </div>
              </div>

              {/* Trip Details */}
              <div className="bg-purple-50 rounded-xl p-3 mb-3">
                <p className="text-sm text-gray-700">{notifications[0].subtitle}</p>
              </div>

              {/* View Button */}
              <div className="bg-indigo-900 text-white rounded-xl py-3 px-4 text-center font-semibold">
                View request
              </div>
            </button>

            {/* Reminder Notification */}
            <button
              onClick={() => handleNotificationClick(notifications[1])}
              className="w-full bg-white rounded-2xl p-4 shadow-sm border border-purple-200 hover:shadow-md transition-all text-left"
            >
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">⏰</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {notifications[1].title}
                  </h3>
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {notifications[1].subtitle}
                  </p>
                </div>
                <span className="text-gray-400">›</span>
              </div>
            </button>

            {/* Accepted Notification */}
            <button
              onClick={() => handleNotificationClick(notifications[2])}
              className="w-full bg-white rounded-2xl p-4 shadow-sm border border-purple-200 hover:shadow-md transition-all text-left"
            >
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {notifications[2].title}
                  </h3>
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {notifications[2].subtitle}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {notifications[2].parentName}
                  </p>
                </div>
                <span className="text-gray-400">›</span>
              </div>
            </button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
