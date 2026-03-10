import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, MapPin } from "lucide-react";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";

export function OfferHelp() {
  const navigate = useNavigate();
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedHelpTypes, setSelectedHelpTypes] = useState<string[]>([]);

  const toggleAvailability = (option: string) => {
    setSelectedAvailability((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const toggleHelpType = (type: string) => {
    setSelectedHelpTypes((prev) =>
      prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 pb-20">
      <Header />

      <main className="max-w-md mx-auto">
        <div className="bg-white px-6 py-4 flex items-center gap-4 border-b border-gray-200">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="text-xl font-semibold">Offer Help</h1>
        </div>

        <div className="px-6 py-6 space-y-6">
          <div>
            <h2 className="text-purple-700 font-semibold mb-3">My availability</h2>
            <div className="space-y-2">
              <button
                onClick={() => toggleAvailability("today")}
                className={`w-full rounded-2xl px-4 py-4 flex items-center justify-between transition-all border-2 ${
                  selectedAvailability.includes("today")
                    ? "bg-purple-100 border-purple-300"
                    : "bg-purple-50 border-transparent hover:bg-purple-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                    selectedAvailability.includes("today")
                      ? "bg-purple-600 border-purple-600"
                      : "bg-white border-gray-300"
                  }`}>
                    {selectedAvailability.includes("today") && <span className="text-white text-sm">?</span>}
                  </div>
                  <span className="font-medium text-gray-900">Today</span>
                </div>
                <span className="text-gray-400">�</span>
              </button>

              <button
                onClick={() => toggleAvailability("week")}
                className={`w-full rounded-2xl px-4 py-4 flex items-center justify-between transition-all border-2 ${
                  selectedAvailability.includes("week")
                    ? "bg-purple-100 border-purple-300"
                    : "bg-purple-50 border-transparent hover:bg-purple-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                    selectedAvailability.includes("week")
                      ? "bg-purple-600 border-purple-600"
                      : "bg-white border-gray-300"
                  }`}>
                    {selectedAvailability.includes("week") && <span className="text-white text-sm">?</span>}
                  </div>
                  <span className="font-medium text-gray-900">This week</span>
                </div>
                <span className="text-gray-400">�</span>
              </button>

              <button
                onClick={() => toggleAvailability("custom")}
                className={`w-full rounded-2xl px-4 py-4 flex items-center justify-between transition-all border-2 ${
                  selectedAvailability.includes("custom")
                    ? "bg-purple-100 border-purple-300"
                    : "bg-purple-50 border-transparent hover:bg-purple-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                    selectedAvailability.includes("custom")
                      ? "bg-purple-600 border-purple-600"
                      : "bg-white border-gray-300"
                  }`}>
                    {selectedAvailability.includes("custom") && <span className="text-white text-sm">?</span>}
                  </div>
                  <span className="font-medium text-gray-900">Customize dates</span>
                </div>
                <span className="text-gray-400">�</span>
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-purple-700 font-semibold mb-3">Types of help</h2>
            <div className="space-y-2">
              <button
                onClick={() => toggleHelpType("walking-bus")}
                className={`w-full rounded-2xl px-4 py-4 flex items-center gap-3 transition-all border-2 ${
                  selectedHelpTypes.includes("walking-bus")
                    ? "bg-purple-100 border-purple-300"
                    : "bg-purple-50 border-transparent hover:bg-purple-100"
                }`}
              >
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                  selectedHelpTypes.includes("walking-bus")
                    ? "bg-purple-600 border-purple-600"
                    : "bg-white border-gray-300"
                }`}>
                  {selectedHelpTypes.includes("walking-bus") && <span className="text-white text-sm">?</span>}
                </div>
                <span className="font-medium text-gray-900">Walking bus</span>
              </button>

              <button
                onClick={() => toggleHelpType("car")}
                className={`w-full rounded-2xl px-4 py-4 flex items-center gap-3 transition-all border-2 ${
                  selectedHelpTypes.includes("car")
                    ? "bg-purple-100 border-purple-300"
                    : "bg-purple-50 border-transparent hover:bg-purple-100"
                }`}
              >
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                  selectedHelpTypes.includes("car")
                    ? "bg-purple-600 border-purple-600"
                    : "bg-white border-gray-300"
                }`}>
                  {selectedHelpTypes.includes("car") && <span className="text-white text-sm">?</span>}
                </div>
                <span className="font-medium text-gray-900">Car transport</span>
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-purple-700 font-semibold mb-3">Zone</h2>
            <button className="w-full bg-purple-50 hover:bg-purple-100 rounded-2xl px-4 py-4 flex items-center gap-3 transition-all">
              <MapPin size={24} className="text-gray-700" />
              <span className="font-medium text-gray-600">Choose distance radius (km) from home</span>
            </button>
          </div>

          <button
            onClick={() => navigate("/profile")}
            className="w-full bg-indigo-900 hover:bg-indigo-800 text-white rounded-2xl px-6 py-4 font-semibold text-lg shadow-lg transition-all"
          >
            Activate my availability
          </button>

          <p className="text-sm text-gray-600 text-center">Your help is visible to other parents</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
