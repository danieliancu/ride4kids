import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";

export function RideCancelled() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 pb-20 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center">
        <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} className="text-white" />
        </div>
        <h1 className="text-2xl font-semibold mb-3">Trajet annulé</h1>
        <p className="text-gray-600 mb-8">
          Le trajet de Oscar à 17:00 a été annulé. Pierre S. a été informé.
        </p>
        <button
          onClick={() => navigate("/my-rides")}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-2xl px-6 py-4 font-semibold transition-all"
        >
          Back to My Rides
        </button>
      </div>
      <BottomNav />
    </div>
  );
}
