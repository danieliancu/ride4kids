import { useNavigate } from "react-router";
import { Check, Calendar, Clock, MapPin, Edit } from "lucide-react";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";

export function RequestConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 pb-20">
      <Header />
      
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 px-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-b from-purple-50 to-white px-6 pt-8 pb-6 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={48} className="text-white" strokeWidth={3} />
            </div>
            
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Votre demande de trajet a été envoyée
            </h2>
            <p className="text-sm text-gray-600">
              Les parents vont être prévenus
            </p>
          </div>

          {/* Status Section */}
          <div className="px-6 pb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Current status:</h3>
            
            {/* Current Status Badge */}
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-2xl px-4 py-3 flex items-center gap-3 mb-4">
              <div className="text-2xl">⏳</div>
              <span className="font-semibold text-yellow-800">En attente de réponse</span>
            </div>

            {/* Ride Details */}
            <div className="space-y-3 mb-4">
              {/* Child and Activity */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center text-xl">
                  👧
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Charlotte</p>
                  <p className="text-sm text-gray-600">Painting class</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 text-gray-700">
                <Calendar size={20} className="text-indigo-600" />
                <span className="font-medium">Today</span>
              </div>

              {/* Time */}
              <div className="flex items-center gap-3 text-gray-700">
                <Clock size={20} className="text-indigo-600" />
                <span className="font-medium">18:00</span>
              </div>
            </div>

            {/* Status Timeline */}
            <div className="space-y-2 mb-6">
              {/* Sent */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-indigo-900 rounded-full"></div>
                <span className="text-sm text-gray-700">Demande envoyée</span>
              </div>
              
              {/* Waiting */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-gray-400 rounded-full bg-gray-100"></div>
                <span className="text-sm text-gray-500">Attente de réponse</span>
              </div>
              
              {/* Scheduled */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-gray-300 rounded-full bg-white"></div>
                <span className="text-sm text-gray-400">Trajet prévu</span>
              </div>
              
              {/* Dropped */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-gray-300 rounded-full bg-white"></div>
                <span className="text-sm text-gray-400">Enfant déposé</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/my-rides")}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-2xl px-4 py-3 font-semibold transition-all"
              >
                Cancel ride
              </button>
              <button
                onClick={() => navigate("/request-ride")}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-2xl px-4 py-3 font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <Edit size={18} />
                Modifier détails
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
