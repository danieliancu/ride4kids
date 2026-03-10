import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";

export function RequestRide() {
  const navigate = useNavigate();
  const [selectedChild, setSelectedChild] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 pb-20">
      <Header />

      <main className="max-w-md mx-auto">
        <div className="bg-white px-6 py-4 flex items-center gap-4 border-b border-gray-200">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="text-xl font-semibold">Request a Ride</h1>
        </div>

        <div className="px-6 py-6 space-y-6">
          <div>
            <h2 className="text-purple-700 font-semibold mb-3">For:</h2>

            <button
              onClick={() => setSelectedChild(selectedChild ? "" : "1")}
              className="w-full bg-purple-50 hover:bg-purple-100 rounded-2xl px-4 py-4 flex items-center justify-between mb-3 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center text-xl">a</div>
                <span className="font-medium">{selectedChild ? "Charlotte" : "Select a child"}</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button
              onClick={() => setSelectedActivity(selectedActivity ? "" : "1")}
              className="w-full bg-purple-50 hover:bg-purple-100 rounded-2xl px-4 py-4 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl">a</div>
                <span className="font-medium">{selectedActivity ? "Painting class" : "Select an activity / school"}</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </div>

          <div>
            <h2 className="text-purple-700 font-semibold mb-3">From:</h2>
            <div className="bg-purple-50 rounded-2xl px-4 py-3">
              <input
                type="text"
                placeholder="Type an address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none"
              />
            </div>
            {address && <div className="mt-2 px-4 py-2 text-sm text-gray-700">Brandards Road 36, 2000 Neuchatel</div>}
          </div>

          <div>
            <h2 className="text-purple-700 font-semibold mb-3">When:</h2>

            <button
              onClick={() => setDate(date ? "" : "2026-01-06")}
              className="w-full bg-purple-50 hover:bg-purple-100 rounded-2xl px-4 py-4 flex items-center justify-between mb-3 transition-all"
            >
              <div className="flex items-center gap-3">
                <Calendar size={24} className="text-indigo-600" />
                <span className="font-medium">{date ? "Tuesday, January 6, 2026" : "Date"}</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>

            <button
              onClick={() => setTime(time ? "" : "18:00")}
              className="w-full bg-purple-50 hover:bg-purple-100 rounded-2xl px-4 py-4 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <Clock size={24} className="text-indigo-600" />
                <span className="font-medium">{time || "Time"}</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </div>

          <div>
            <h2 className="text-purple-700 font-semibold mb-3">Who:</h2>
            <button
              onClick={() => navigate("/select-parent")}
              className="w-full bg-purple-50 hover:bg-purple-100 rounded-2xl px-4 py-4 flex items-center justify-between transition-all"
            >
              <span className="font-medium">Available parents</span>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          </div>

          <button
            onClick={() => navigate("/my-rides")}
            className="w-full bg-indigo-900 hover:bg-indigo-800 text-white rounded-2xl px-6 py-4 font-semibold text-lg shadow-lg transition-all"
          >
            Send request
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
