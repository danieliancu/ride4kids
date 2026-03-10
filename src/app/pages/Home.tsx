import { Link } from "react-router";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";
import { MessageSquare, HandHeart, List, Star } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 pb-20">
      <Header />
      
      <main className="max-w-md mx-auto px-6 py-8 space-y-6">
        {/* Request Ride Button */}
        <Link
          to="/request-ride"
          className="block bg-gray-900 hover:bg-gray-800 text-white rounded-3xl px-8 py-6 shadow-lg transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-2xl">
              🚗
            </div>
            <span className="text-xl font-semibold">Request a Ride</span>
          </div>
        </Link>

        {/* My Rides Section */}
        <Link
          to="/my-rides"
          className="block bg-white rounded-3xl px-6 py-5 shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <List size={24} className="text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">My Rides</h3>
                <p className="text-sm text-gray-600">Track / edit / cancel</p>
              </div>
            </div>
            <div className="text-gray-400">›</div>
          </div>
        </Link>

        {/* Messaging Section */}
        <Link
          to="/messages"
          className="block bg-white rounded-3xl px-6 py-5 shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageSquare size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Messages</h3>
                <p className="text-sm text-gray-600">Échanger avec les parents</p>
              </div>
            </div>
            <div className="text-gray-400">›</div>
          </div>
        </Link>

        {/* Offer Help Section */}
        <div className="block bg-white rounded-3xl px-6 py-5 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <HandHeart size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Offer Help</h3>
              </div>
            </div>
            <div className="text-gray-400">›</div>
          </div>
        </div>

        {/* Verification Badge */}
        <div className="bg-purple-100 rounded-2xl px-6 py-4 flex items-center gap-3">
          <Star size={20} className="text-yellow-500 fill-yellow-500" />
          <p className="text-sm text-gray-800">
            <span className="font-semibold">Parents vérifiés</span> · Coordination sécurisée
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
