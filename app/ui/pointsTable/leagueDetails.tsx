import Image from "next/image";

export default function LeagueDetails({
  leagueDetails,
}: {
  leagueDetails: any;
}) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-md my-6">
      <Image
        src={leagueDetails.emblem || ""}
        alt={`${leagueDetails.name} logo`}
        width={120}
        height={150}
        className="mb-4 rounded-sm bg-amber-50"
      />
      <h3 className="text-2xl font-bold mb-4">
        {leagueDetails.name} {leagueDetails.season}
      </h3>
      <div className="grid text-center">
        <div>
          <p>
            <strong>Total Matches Played:</strong> {leagueDetails.totalMatches}
          </p>
        </div>
      </div>
    </div>
  );
}
