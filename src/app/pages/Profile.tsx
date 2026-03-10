import { useNavigate } from "react-router";
import { ArrowLeft, User, MapPin, Phone, Mail, Settings, LogOut, Shield, HandHeart } from "lucide-react";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";

export function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 pb-20">
      <Header showNotification={false} />
      
      <main className="max-w-md mx-auto">
        {/* Page Header */}
        <div className="bg-white px-6 py-4 flex items-center gap-4 border-b border-gray-200">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="text-xl font-semibold">My Profile</h1>
        </div>

        {/* Profile Info */}
        <div className="bg-white px-6 py-8 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-indigo-800 rounded-full flex items-center justify-center mb-4">
              <User size={40} className="text-white" />
            </div>
            <h2 className="text-2xl font-semibold mb-1">Sophie Martin</h2>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <Shield size={16} className="text-green-600" />
              <p className="text-sm">Parent vérifié</p>
            </div>
          </div>
        </div>

        {/* Children Section */}
        <div className="bg-white px-6 py-6 mb-6">
          <h3 className="font-semibold text-lg mb-4">My children</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-2xl">
                👧
              </div>
              <div>
                <p className="font-medium">Charlotte</p>
                <p className="text-sm text-gray-600">8 years old</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-2xl">
                👦
              </div>
              <div>
                <p className="font-medium">Oscar</p>
                <p className="text-sm text-gray-600">6 years old</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white px-6 py-6 mb-6">
          <h3 className="font-semibold text-lg mb-4">Coordonnées</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-gray-500" />
              <p className="text-gray-700">Neuchâtel, Suisse</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-gray-500" />
              <p className="text-gray-700">+41 76 123 45 67</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-gray-500" />
              <p className="text-gray-700">sophie.martin@email.ch</p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white px-6 py-6 mb-6">
          <button 
            onClick={() => navigate("/offer-help")}
            className="w-full flex items-center justify-between py-3 hover:bg-purple-50 -mx-6 px-6 rounded-lg transition-all"
          >
            <div className="flex items-center gap-3">
              <HandHeart size={20} className="text-purple-700" />
              <span className="font-medium">Offer Help</span>
            </div>
            <span className="text-gray-400">›</span>
          </button>
          <button className="w-full flex items-center justify-between py-3 hover:bg-purple-50 -mx-6 px-6 rounded-lg transition-all">
            <div className="flex items-center gap-3">
              <Settings size={20} className="text-gray-700" />
              <span className="font-medium">Paramètres</span>
            </div>
            <span className="text-gray-400">›</span>
          </button>
          <button className="w-full flex items-center justify-between py-3 hover:bg-purple-50 -mx-6 px-6 rounded-lg transition-all text-red-600">
            <div className="flex items-center gap-3">
              <LogOut size={20} />
              <span className="font-medium">Déconnexion</span>
            </div>
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}