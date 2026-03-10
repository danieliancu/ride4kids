import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, MapPin, Calendar, AlertTriangle } from "lucide-react";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";

export function RideDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showCancelModal, setShowCancelModal] = useState(false);

  const ride = {
    id: id || "1",
    childName: id === "2" ? "Oscar" : "Charlotte",
    childAvatar: id === "2" ? "👦" : "👧",
    location: id === "2" ? "ISN School" : "Brandards Road 36, 2000 Neuchatel",
    activity: id === "2" ? "Football practice" : "Painting class",
    date: "Today",
    time: id === "2" ? "17:00" : "18:00",
    status: id === "2" ? "accepted" : "pending",
    assignedTo: id === "2" ? "Pierre S." : undefined,
    assignedAvatar: "👤",
    note: id === "2" ? undefined : "Request sent to Sophie R.",
  };

  const handleCancelRide = () => {
    setShowCancelModal(false);
    navigate("/ride-cancelled");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 pb-20">
      <Header />

      <main className="max-w-md mx-auto">
        <div className="bg-white px-6 py-4 flex items-center gap-4 border-b border-gray-200">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="text-xl font-semibold">Ride details</h1>
        </div>

        <div className="px-6 py-6 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-pink-200 rounded-2xl flex items-center justify-center text-4xl">
                {ride.childAvatar}
              </div>
              <h2 className="text-2xl font-semibold">{ride.childName}</h2>
            </div>

            <div className="flex items-start gap-3 mb-4 pb-4 border-b border-gray-100">
              <MapPin size={24} className="text-red-500 flex-shrink-0 mt-1" />
              <p className="text-blue-600 font-medium">
                {ride.location} - {ride.activity}
              </p>
            </div>

            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
              <Calendar size={24} className="text-indigo-600" />
              <p className="font-medium">
                {ride.date} - {ride.time}
              </p>
            </div>

            {ride.status === "pending" && ride.note && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3">
                <p className="text-sm text-gray-700 font-medium">⏱ Waiting for response</p>
                <p className="text-sm text-gray-600 mt-1 italic">{ride.note}</p>
              </div>
            )}

            {ride.status === "accepted" && ride.assignedTo && (
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                <div className="flex items-center gap-1 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p className="text-sm font-semibold text-green-800">ACCEPTED</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    {ride.assignedAvatar}
                  </div>
                  <p className="text-sm text-gray-700">Handled by {ride.assignedTo}</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-2xl px-6 py-4 font-semibold flex items-center justify-center gap-2 transition-all">
              <span>✏️</span>
              Edit details
            </button>
            <button
              onClick={() => setShowCancelModal(true)}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-2xl px-6 py-4 font-semibold transition-all"
            >
              Cancel ride
            </button>
          </div>
        </div>
      </main>

      <BottomNav />

      {showCancelModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle size={32} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Are you sure you want to cancel this ride?
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                The assisting parent will be informed.
              </p>
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white rounded-2xl px-6 py-3 font-semibold transition-all"
                >
                  Back to My Rides
                </button>
                <button
                  onClick={handleCancelRide}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-2xl px-6 py-3 font-semibold transition-all"
                >
                  Confirm cancellation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
