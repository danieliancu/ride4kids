import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";

type RideStatus = "pending" | "accepted" | "cancelled";

interface Ride {
  id: string;
  childName: string;
  childAvatar: string;
  location: string;
  activity: string;
  time: string;
  status: RideStatus;
  assignedTo?: string;
  note?: string;
}

export function MyRides() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"today" | "tomorrow" | "week">("today");

  const rides: Ride[] = [
    {
      id: "1",
      childName: "Charlotte",
      childAvatar: "a",
      location: "Brandards Road 36, 2000 Neuchatel",
      activity: "Painting class",
      time: "18:00",
      status: "pending",
      note: "? Waiting for response",
    },
    {
      id: "2",
      childName: "Oscar",
      childAvatar: "a",
      location: "ISN School",
      activity: "Football practice",
      time: "17:00",
      status: "accepted",
      assignedTo: "Pierre S.",
    },
  ];

  const getStatusBadge = (status: RideStatus) => {
    switch (status) {
      case "pending":
        return (
          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            PENDING
          </div>
        );
      case "accepted":
        return (
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            ACCEPTED
          </div>
        );
      case "cancelled":
        return <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">CANCELLED</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 pb-20">
      <Header />

      <main className="max-w-md mx-auto">
        <div className="bg-white px-6 py-4 flex items-center gap-4 border-b border-gray-200">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="text-xl font-semibold">My Rides</h1>
        </div>

        <div className="bg-white px-6 py-3 flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("today")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "today" ? "bg-indigo-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setActiveTab("tomorrow")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "tomorrow" ? "bg-indigo-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Tomorrow
          </button>
          <button
            onClick={() => setActiveTab("week")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "week" ? "bg-indigo-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            This week
          </button>
        </div>

        <div className="px-6 py-6 space-y-4">
          <h2 className="text-purple-700 font-semibold mb-4">Today</h2>

          {rides.map((ride) => (
            <div key={ride.id} className="bg-white rounded-2xl p-5 shadow-md space-y-3">
              {getStatusBadge(ride.status)}

              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-pink-200 rounded-full flex items-center justify-center text-2xl">{ride.childAvatar}</div>
                <div>
                  <h3 className="font-semibold text-lg">{ride.childName}</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    {ride.location} - {ride.activity}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1 text-gray-500">
                  <Clock size={16} />
                  <span className="text-sm">{ride.time}</span>
                </div>
              </div>

              {ride.note && <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-sm text-gray-700">{ride.note}</div>}

              {ride.assignedTo && (
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">a</div>
                  <span>Handled by {ride.assignedTo}</span>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <Link
                  to={`/rides/${ride.id}`}
                  className="flex-1 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-xl px-4 py-2 text-center font-medium transition-all"
                >
                  View details
                </Link>
                <button className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-xl px-4 py-2 font-medium transition-all">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
