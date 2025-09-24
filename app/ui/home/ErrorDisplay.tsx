export default function ErrorDisplay() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold mb-4 text-red-500">
        Unable to load matches
      </h2>
      <p className="text-gray-600">
        Please try again later or contact support if the problem persists.
      </p>
    </div>
  );
}
