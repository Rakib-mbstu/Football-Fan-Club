import fetchMatches from "../../lib/fetchMatches";
import MatchCard from "./matchCard";
import ErrorDisplay from "./ErrorDisplay";

export default async function MatchesServer() {
  try {
    let recentMatches: any[] = [];
    let upcomingFixtures: any[] = [];

    const completeFixtures = await fetchMatches();

    if (!completeFixtures || completeFixtures.length === 0) {
      throw new Error("No matches data available");
    }

    completeFixtures.forEach((leagueData) => {
      recentMatches = recentMatches.concat(leagueData.recentMatches);
      upcomingFixtures = upcomingFixtures.concat(leagueData.upcomingFixtures);
    });

    return (
      <>
        <section className="py-10">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Recent Matches
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentMatches &&
                recentMatches.map((match) => {
                  return (
                    <MatchCard
                      key={match.id}
                      match={match}
                    />
                  );
                })}
            </div>
          </div>
        </section>
        <section className="py-10 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Upcoming Fixtures
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingFixtures &&
                upcomingFixtures.map((match) => (
                  <MatchCard
                    key={match.id}
                    match={match}
                  />
                ))}
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching matches:", error);
    return <ErrorDisplay />;
  }
}
