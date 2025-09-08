import LeagueDetails from "../ui/pointsTable/leagueDetails";
import PointsTable from "../ui/pointsTable/pointsTable";

export default function LeaguePage() {
  // Simulate session for login/logout (no real auth for now)
  const isLoggedIn = false; // Replace with actual auth logic later
  const leagueDetails = {
    name: "Premier League",
    season: 2025,
    totalMatches: 60, // Example: total matches played so far
    topGoalScorer: {
      name: "Erling Haaland",
      team: "Manchester City",
      goals: 12,
    },
    topAssistProvider: {
      name: "Kevin De Bruyne",
      team: "Manchester City",
      assists: 8,
    },
    topCleanSheetTeam: { name: "Arsenal", cleanSheets: 4 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-10">
        <div className="container mx-auto">
          <LeagueDetails leagueDetails={leagueDetails} />
          <h2 className="text-3xl font-bold mb-6 text-center">
            {leagueDetails.season} Premier League Table
          </h2>
          <PointsTable />
        </div>
      </section>
    </div>
  );
}
