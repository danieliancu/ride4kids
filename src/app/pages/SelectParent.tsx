import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, MapPin, MessageCircle, Plus } from "lucide-react";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const sophieImage = "/assets/169cae6178696ca19abdbafa2f374199c11a4e3b.png";

interface Parent {
  id: string;
  name: string;
  distance: string;
  address: string;
  verified: boolean;
  imageUrl: string;
  position: { top: string; left: string };
}

export function SelectParent() {
  const navigate = useNavigate();
  const [selectedParent, setSelectedParent] = useState<string | null>(null);

  const parents: Parent[] = [
    {
      id: "1",
      name: "Sophie R.",
      distance: "1 km",
      address: "58, Oliviers Street, 2000 Neuchatel",
      verified: true,
      imageUrl: sophieImage,
      position: { top: "45%", left: "75%" },
    },
    {
      id: "2",
      name: "Marie L.",
      distance: "2.5 km",
      address: "12, Station Avenue, 2000 Neuchatel",
      verified: true,
      imageUrl: "https://images.unsplash.com/photo-1624013599822-1faf520c67d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjB5b3VuZyUyMHdvbWFuJTIwaGFwcHl8ZW58MXx8fHwxNzcyNjM2NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      position: { top: "30%", left: "40%" },
    },
    {
      id: "3",
      name: "Jean D.",
      distance: "3 km",
      address: "45, Lake Road, 2000 Neuchatel",
      verified: true,
      imageUrl: "https://images.unsplash.com/photo-1560328055-e938bb2ed50a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXRoZXIlMjBtYW4lMjBwYXJlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI2MzY1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      position: { top: "60%", left: "55%" },
    },
  ];

  const handleSelectParent = (parentId: string) => {
    setSelectedParent(parentId);
  };

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
          <h2 className="text-purple-700 font-semibold">Select a parent:</h2>

          <div className="relative w-full h-64 bg-gray-200 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-blue-100">
              <svg className="absolute inset-0 w-full h-full opacity-30">
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#888" strokeWidth="2" />
                <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#888" strokeWidth="2" />
                <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#888" strokeWidth="2" />
                <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#888" strokeWidth="1" />
                <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#888" strokeWidth="1" />
              </svg>
            </div>

            <div className="absolute bottom-[30%] left-[20%] flex flex-col items-center">
              <div className="w-10 h-10 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <MapPin size={20} className="text-white" fill="white" />
              </div>
            </div>

            {parents.map((parent) => (
              <div
                key={parent.id}
                className="absolute flex flex-col items-center cursor-pointer transform hover:scale-110 transition-transform"
                style={{ top: parent.position.top, left: parent.position.left }}
                onClick={() => handleSelectParent(parent.id)}
              >
                <div className={`w-10 h-10 ${selectedParent === parent.id ? "bg-red-600" : "bg-red-500"} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                  <MapPin size={20} className="text-white" fill="white" />
                </div>
              </div>
            ))}

            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-300 opacity-40 rounded-tl-full"></div>
          </div>

          <div>
            <h3 className="text-purple-700 font-semibold mb-3">List of available parents:</h3>
            <div className="space-y-3">
              {parents.map((parent) => (
                <div
                  key={parent.id}
                  className={`bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm cursor-pointer transition-all ${
                    selectedParent === parent.id ? "ring-2 ring-purple-500" : "hover:shadow-md"
                  }`}
                  onClick={() => handleSelectParent(parent.id)}
                >
                  <div className="relative">
                    <ImageWithFallback src={parent.imageUrl} alt={parent.name} className="w-12 h-12 rounded-full object-cover" />
                    {parent.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs">?</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{parent.name}</h4>
                      <span className="text-green-600 font-semibold text-sm">{parent.distance}</span>
                    </div>
                    <p className="text-xs text-gray-500">{parent.address}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-xs text-gray-600">verified profile</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/parent-profile/${parent.id}`);
                      }}
                    >
                      <Plus size={18} className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MessageCircle size={18} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedParent ? (
            <button
              onClick={() => navigate(`/parent-profile/${selectedParent}`)}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-2xl px-6 py-4 font-semibold text-lg shadow-lg transition-all"
            >
              Choose {parents.find((p) => p.id === selectedParent)?.name}?
            </button>
          ) : (
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-2xl px-6 py-4 font-semibold text-lg shadow-lg transition-all">
              Choose Parent
            </button>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
