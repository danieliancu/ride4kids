import { Bell, User } from "lucide-react";
import { Link, useNavigate } from "react-router";

interface HeaderProps {
  showNotification?: boolean;
}

export function Header({ showNotification = true }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-40">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold text-indigo-900">Ride4Kids</h1>
        </Link>
        <div className="flex items-center gap-4">
          {showNotification && (
            <button 
              onClick={() => navigate("/notifications")}
              className="relative"
            >
              <Bell size={24} className="text-indigo-800" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full" />
            </button>
          )}
          <Link to="/profile">
            <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center">
              <User size={18} className="text-white" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}