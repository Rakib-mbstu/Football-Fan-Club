import fetchTop5Leagues from "../lib/league";
import LeagueDetails from "../ui/pointsTable/leagueDetails";
import PointsTable from "../ui/pointsTable/pointsTable";

export default async function LeaguePage() {
  const leaguesDetails = await fetchTop5Leagues();

  const isLoggedIn = false; // Replace with actual auth logic later

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-10">
        {leaguesDetails.map((league) => {
          const leagueDetails = {
            name: league.league,
            season: league.season,
            emblem: league.emblem,
            totalMatches:
              league.standings.reduce(
                (sum: number, team: any) => sum + team.playedGames,
                0
              ) / 2,
            topGoalScorer: {
              name: "Harry Kane",
              team: "Tottenham Hotspur",
              goals: 22,
            },
            topAssistProvider: {
              name: "Kevin De Bruyne",
              team: "Manchester City",
              assists: 18,
            },
            topCleanSheetTeam: { name: "Manchester City", cleanSheets: 18 },
          };
          const pointsTableData = league.standings;
          return (
            <div
              className="container mx-auto"
              key={league.league}
            >
              <LeagueDetails leagueDetails={leagueDetails} />
              <h2 className="text-3xl font-bold mb-6 text-center">
                {leagueDetails.season} {leagueDetails.name} Table
              </h2>
              <PointsTable standing={pointsTableData} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
