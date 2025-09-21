import HeadToHeadClient from "./HeadToHeadClient";
import fetchLeague from "./../lib/league";

function convertToTeamData(jsonData) {
  const teamData = {};

  // Process each league
  jsonData.forEach((league) => {
    const leagueName = league.league;

    league.standings.forEach((team) => {
      const teamName = team.team.name;
      const shortName = team.team.shortName;

      // Convert form string to array (reverse to get chronological order)
      // Handle cases where form might be empty or have fewer than 5 results
      const formArray = team.form ? team.form.split(",").reverse() : [];

      // Calculate points per game
      const ppg = team.playedGames > 0 ? team.points / team.playedGames : 0;

      // Calculate average goals per game
      const avgGoals =
        team.playedGames > 0 ? team.goalsFor / team.playedGames : 0;
      const avgGoalsScored = avgGoals;

      teamData[shortName] = {
        logo: team.team.crest || "",
        country: leagueName,
        ppg: parseFloat(ppg.toFixed(2)),
        lastFive: formArray,
        stats: {
          gamesPlayed: team.playedGames,
          wins: team.won,
          draws: team.draw,
          losses: team.lost,
          position: team.position,
          pointsPerGame: parseFloat(ppg.toFixed(2)),
          avgGoals: parseFloat(avgGoals.toFixed(2)),
          avgGoalsScored: parseFloat(avgGoalsScored.toFixed(2)),
        },
      };
    });
  });

  return teamData;
}

export default async function page() {
  const leagueData = await fetchLeague();
  const teamData = leagueData ? convertToTeamData(leagueData) : {};

  return <HeadToHeadClient teamData={teamData} />;
}
