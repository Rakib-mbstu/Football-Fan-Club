type Team = {
  id: number;
  name: string;
  shortName?: string;
  tla?: string;
  crest: string;
};

type Score = {
  winner?: string;
  duration?: string;
  fullTime: { home: number; away: number };
  halfTime?: { home: number; away: number };
};

type Competition = {
  id: number;
  name: string;
  code?: string;
  type?: string;
  emblem?: string;
};

type Match = {
  id: number;
  utcDate: string;
  status: string;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  competition: Competition;
};

export default function MatchCard({ match }: { match: Match }) {
  const { homeTeam, awayTeam, score, utcDate, status, competition } = match;

  // Use shortName or tla for mobile, full name for larger screens
  const getTeamName = (team: Team) => {
    return team.shortName || team.tla || team.name;
  };

  return (
    <div className="bg-gray-800 p-3 rounded-lg shadow-md text-white w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg">
      {/* Teams and Score Row */}
      <div className="flex items-center justify-between gap-2 mb-3">
        {/* Home Team */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <img
            src={homeTeam.crest}
            alt={homeTeam.name}
            className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
          />
          <span className="text-sm sm:text-base truncate sm:hidden">
            {getTeamName(homeTeam)}
          </span>
          <span className="text-sm sm:text-base truncate hidden sm:block">
            {homeTeam.name}
          </span>
        </div>

        {/* Score */}
        <div className="text-lg sm:text-xl font-bold px-2 flex-shrink-0">
          {score?.fullTime?.home ?? "-"} : {score?.fullTime?.away ?? "-"}
        </div>

        {/* Away Team */}
        <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
          <span className="text-sm sm:text-base truncate sm:hidden">
            {getTeamName(awayTeam)}
          </span>
          <span className="text-sm sm:text-base truncate hidden sm:block">
            {awayTeam.name}
          </span>
          <img
            src={awayTeam.crest}
            alt={awayTeam.name}
            className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
          />
        </div>
      </div>

      {/* Match Details */}
      <div className="space-y-1 text-center">
        <div className="text-xs sm:text-sm text-gray-400">
          {new Date(utcDate).toLocaleString("en-GB", {
            dateStyle: "short",
            timeStyle: "short",
          })}
        </div>
        <div className="text-xs sm:text-sm font-medium">{status}</div>
        {competition?.name && (
          <div className="text-xs text-blue-300 truncate">
            {competition.name}
          </div>
        )}
      </div>
    </div>
  );
}
