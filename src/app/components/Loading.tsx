export function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="text-gray-600 font-medium">Chargement...</p>
      </div>
    </div>
  );
}
