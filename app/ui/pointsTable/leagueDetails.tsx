export default function LeagueDetails({
  leagueDetails,
}: {
  leagueDetails: any;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-4">
        {leagueDetails.name} {leagueDetails.season}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p>
            <strong>Total Matches Played:</strong> {leagueDetails.totalMatches}
          </p>
          <p>
            <strong>Top Goal Scorer:</strong> {leagueDetails.topGoalScorer.name}{" "}
            ({leagueDetails.topGoalScorer.team},{" "}
            {leagueDetails.topGoalScorer.goals} goals)
          </p>
        </div>
        <div>
          <p>
            <strong>Top Assist Provider:</strong>{" "}
            {leagueDetails.topAssistProvider.name} (
            {leagueDetails.topAssistProvider.team},{" "}
            {leagueDetails.topAssistProvider.assists} assists)
          </p>
          <p>
            <strong>Top Clean Sheet Team:</strong>{" "}
            {leagueDetails.topCleanSheetTeam.name} (
            {leagueDetails.topCleanSheetTeam.cleanSheets} clean sheets)
          </p>
        </div>
      </div>
    </div>
  );
}
