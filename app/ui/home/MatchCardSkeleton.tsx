export default function MatchCardSkeleton() {
  return (
    <div className="bg-gray-800 p-3 rounded-lg shadow-md text-white w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg animate-pulse">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-8 h-8 bg-gray-700 rounded" />
          <div className="h-4 w-20 bg-gray-700 rounded" />
        </div>
        <div className="h-6 w-12 bg-gray-700 rounded" />
        <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
          <div className="h-4 w-20 bg-gray-700 rounded" />
          <div className="w-8 h-8 bg-gray-700 rounded" />
        </div>
      </div>
      <div className="space-y-1 text-center">
        <div className="h-4 w-24 bg-gray-700 rounded mx-auto" />
        <div className="h-4 w-16 bg-gray-700 rounded mx-auto" />
        <div className="h-4 w-20 bg-gray-700 rounded mx-auto" />
      </div>
    </div>
  );
}
