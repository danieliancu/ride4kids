import { Home, MessageSquare, User } from "lucide-react";
import { Link, useLocation } from "react-router";

export function BottomNav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom z-50">
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-6">
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 ${
            isActive("/") ? "text-indigo-800" : "text-gray-400"
          }`}
        >
          <Home size={24} fill={isActive("/") ? "currentColor" : "none"} />
        </Link>
        <Link
          to="/messages"
          className={`flex flex-col items-center gap-1 ${
            isActive("/messages") ? "text-indigo-800" : "text-gray-400"
          }`}
        >
          <MessageSquare size={24} fill={isActive("/messages") ? "currentColor" : "none"} />
        </Link>
        <Link
          to="/profile"
          className={`flex flex-col items-center gap-1 ${
            isActive("/profile") ? "text-indigo-800" : "text-gray-400"
          }`}
        >
          <User size={24} fill={isActive("/profile") ? "currentColor" : "none"} />
        </Link>
      </div>
    </nav>
  );
}
