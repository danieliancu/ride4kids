import { useNavigate, useParams } from "react-router";
import { ArrowLeft, ChevronRight, MapPin, ThumbsUp } from "lucide-react";
import { Header } from "../components/Header";
import { BottomNav } from "../components/BottomNav";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
const sophieImage = "/assets/169cae6178696ca19abdbafa2f374199c11a4e3b.png";

interface ParentData {
  id: string;
  name: string;
  imageUrl: string;
  verified: boolean;
  address: string;
  childrenInfo: string;
  school: string;
  sharedWith: string;
  successfulRides: number;
}

export function ParentProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data
  const parentsData: Record<string, ParentData> = {
    "1": {
      id: "1",
      name: "Sophie R.",
      imageUrl: sophieImage,
      verified: true,
      address: "58, Oliviers Street, 2000 Neuchâtel",
      childrenInfo: "Mother of 2 children (Louis, Emma)",
      school: "École ISN",
      sharedWith: "Charlotte",
      successfulRides: 3,
    },
    "2": {
      id: "2",
      name: "Marie L.",
      imageUrl: "https://images.unsplash.com/photo-1624013599822-1faf520c67d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjB5b3VuZyUyMHdvbWFuJTIwaGFwcHl8ZW58MXx8fHwxNzcyNjM2NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      verified: true,
      address: "12, Station Avenue, 2000 Neuchâtel",
      childrenInfo: "Mother of 1 child (Tom)",
      school: "École ISN",
      sharedWith: "Charlotte",
      successfulRides: 5,
    },
    "3": {
      id: "3",
      name: "Jean D.",
      imageUrl: "https://images.unsplash.com/photo-1560328055-e938bb2ed50a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXRoZXIlMjBtYW4lMjBwYXJlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI2MzY1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      verified: true,
      address: "45, Lake Road, 2000 Neuchâtel",
      childrenInfo: "Father of 2 children (Sophie, Marc)",
      school: "École ISN",
      sharedWith: "Charlotte",
      successfulRides: 7,
    },
  };

  const parent = parentsData[id || "1"];

  if (!parent) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex items-center justify-center">
        <p>Parent non trouvé</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 pb-20">
      <Header />
      
      <main className="max-w-md mx-auto">
        {/* Page Header */}
        <div className="bg-white px-6 py-4 flex items-center gap-4 border-b border-gray-200">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="text-xl font-semibold">Request a Ride</h1>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Profile Title */}
          <h2 className="text-purple-700 font-semibold">Profile of {parent.name}</h2>

          {/* Profile Card */}
          <div className="bg-purple-100 rounded-3xl p-6">
            {/* Avatar and Name */}
            <div className="flex items-start gap-4 mb-6">
              {/* Avatar with Verified Badge */}
              <div className="relative flex-shrink-0">
                <ImageWithFallback
                  src={parent.imageUrl}
                  alt={parent.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-purple-200"
                />
                {parent.verified && (
                  <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-2 border-4 border-purple-100">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                )}
              </div>

              {/* Name and Status */}
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{parent.name}</h3>
                <div className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  <span className="text-white">✓</span>
                  <span>Parent vérifié</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                  <MapPin size={16} className="text-red-500" />
                  <span>{parent.address}</span>
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="mb-6">
              <h4 className="text-purple-700 font-semibold mb-3">Information</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>{parent.childrenInfo}</p>
                <p>École: <span className="font-semibold">{parent.school}</span></p>
                <p>Painting class with: <span className="font-semibold">{parent.sharedWith}</span></p>
              </div>
            </div>

            {/* Trust and Security Section */}
            <div>
              <h4 className="text-purple-700 font-semibold mb-3">Confiance et sécurité</h4>
              
              {/* Verified Badge */}
              <button className="w-full bg-white rounded-2xl px-4 py-3 flex items-center justify-between mb-3 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <span className="font-medium text-gray-900">Parent vérifié</span>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </button>

              {/* Successful Rides */}
              <button className="w-full bg-white rounded-2xl px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                    <ThumbsUp size={20} className="text-purple-700" />
                  </div>
                  <span className="font-medium text-gray-900">{parent.successfulRides} trajets réussis</span>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={() => navigate("/request-confirmation")}
            className="w-full bg-indigo-900 hover:bg-indigo-800 text-white rounded-2xl px-6 py-4 font-semibold text-lg shadow-lg transition-all"
          >
            Choose {parent.name}?
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
