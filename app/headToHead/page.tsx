"use client";

import Link from "next/link";
import { useState } from "react";
import MatchCard from "../ui/home/matchCard";
import FootballComparison from "./another";

export default function Page() {
  const teams = [
    {
      id: 1,
      name: "Manchester United",
      logo: "https://via.placeholder.com/32?text=MU",
    },
    {
      id: 2,
      name: "Liverpool",
      logo: "https://via.placeholder.com/32?text=LIV",
    },
    { id: 3, name: "Arsenal", logo: "https://via.placeholder.com/32?text=ARS" },
    { id: 4, name: "Chelsea", logo: "https://via.placeholder.com/32?text=CHE" },
    {
      id: 5,
      name: "Manchester City",
      logo: "https://via.placeholder.com/32?text=MCI",
    },
  ];
  const players = [
    { id: 1, name: "Bruno Fernandes", team: "Manchester United" },
    { id: 2, name: "Mohamed Salah", team: "Liverpool" },
    { id: 3, name: "Bukayo Saka", team: "Arsenal" },
    { id: 4, name: "Cole Palmer", team: "Chelsea" },
    { id: 5, name: "Erling Haaland", team: "Manchester City" },
  ];
  const teamH2HSummary = {
    team1: { name: "Manchester United", wins: 1, goals: 5 },
    team2: { name: "Liverpool", wins: 2, goals: 9 },
    draws: 2,
  };
  const playerH2HMatches = [
    {
      id: 1,
      teams: {
        home: {
          name: "Manchester United",
          logo: "https://via.placeholder.com/32?text=MU",
        },
        away: {
          name: "Liverpool",
          logo: "https://via.placeholder.com/32?text=LIV",
        },
      },
      goals: { home: 2, away: 1 },
      playerStats: [
        { name: "Bruno Fernandes", goals: 1, assists: 0 },
        { name: "Mohamed Salah", goals: 0, assists: 1 },
      ],
      fixture: {
        date: "2025-04-20T15:00:00Z",
        status: { long: "Match Finished" },
        venue: "Old Trafford",
        competition: "Premier League",
      },
    },
    {
      id: 2,
      teams: {
        home: {
          name: "Liverpool",
          logo: "https://via.placeholder.com/32?text=LIV",
        },
        away: {
          name: "Manchester United",
          logo: "https://via.placeholder.com/32?text=MU",
        },
      },
      goals: { home: 3, away: 0 },
      playerStats: [
        { name: "Bruno Fernandes", goals: 0, assists: 0 },
        { name: "Mohamed Salah", goals: 2, assists: 0 },
      ],
      fixture: {
        date: "2024-12-15T16:30:00Z",
        status: { long: "Match Finished" },
        venue: "Anfield",
        competition: "Premier League",
      },
    },
    {
      id: 3,
      teams: {
        home: {
          name: "Manchester United",
          logo: "https://via.placeholder.com/32?text=MU",
        },
        away: {
          name: "Liverpool",
          logo: "https://via.placeholder.com/32?text=LIV",
        },
      },
      goals: { home: 1, away: 1 },
      playerStats: [
        { name: "Bruno Fernandes", goals: 0, assists: 1 },
        { name: "Mohamed Salah", goals: 1, assists: 0 },
      ],
      fixture: {
        date: "2024-08-10T12:30:00Z",
        status: { long: "Match Finished" },
        venue: "Old Trafford",
        competition: "Premier League",
      },
    },
    {
      id: 4,
      teams: {
        home: {
          name: "Liverpool",
          logo: "https://via.placeholder.com/32?text=LIV",
        },
        away: {
          name: "Manchester United",
          logo: "https://via.placeholder.com/32?text=MU",
        },
      },
      goals: { home: 2, away: 2 },
      playerStats: [
        { name: "Bruno Fernandes", goals: 1, assists: 1 },
        { name: "Mohamed Salah", goals: 1, assists: 0 },
      ],
      fixture: {
        date: "2024-03-05T20:00:00Z",
        status: { long: "Match Finished" },
        venue: "Anfield",
        competition: "Premier League",
      },
    },
    {
      id: 5,
      teams: {
        home: {
          name: "Manchester United",
          logo: "https://via.placeholder.com/32?text=MU",
        },
        away: {
          name: "Liverpool",
          logo: "https://via.placeholder.com/32?text=LIV",
        },
      },
      goals: { home: 0, away: 3 },
      playerStats: [
        { name: "Bruno Fernandes", goals: 0, assists: 0 },
        { name: "Mohamed Salah", goals: 1, assists: 1 },
      ],
      fixture: {
        date: "2023-11-01T15:00:00Z",
        status: { long: "Match Finished" },
        venue: "Old Trafford",
        competition: "Premier League",
      },
    },
  ];
  const teamH2HMatches = [
    {
      id: 1,
      teams: {
        home: {
          name: "Manchester United",
          logo: "https://via.placeholder.com/32?text=MU",
        },
        away: {
          name: "Liverpool",
          logo: "https://via.placeholder.com/32?text=LIV",
        },
      },
      goals: { home: 2, away: 1 },
      fixture: {
        date: "2025-04-20T15:00:00Z",
        status: { long: "Match Finished" },
        venue: "Old Trafford",
        competition: "Premier League",
      },
    },
    {
      id: 2,
      teams: {
        home: {
          name: "Liverpool",
          logo: "https://via.placeholder.com/32?text=LIV",
        },
        away: {
          name: "Manchester United",
          logo: "https://via.placeholder.com/32?text=MU",
        },
      },
      goals: { home: 3, away: 0 },
      fixture: {
        date: "2024-12-15T16:30:00Z",
        status: { long: "Match Finished" },
        venue: "Anfield",
        competition: "Premier League",
      },
    },
    {
      id: 3,
      teams: {
        home: {
          name: "Manchester United",
          logo: "https://via.placeholder.com/32?text=MU",
        },
        away: {
          name: "Liverpool",
          logo: "https://via.placeholder.com/32?text=LIV",
        },
      },
      goals: { home: 1, away: 1 },
      fixture: {
        date: "2024-08-10T12:30:00Z",
        status: { long: "Match Finished" },
        venue: "Old Trafford",
        competition: "Premier League",
      },
    },
    {
      id: 4,
      teams: {
        home: {
          name: "Liverpool",
          logo: "https://via.placeholder.com/32?text=LIV",
        },
        away: {
          name: "Manchester United",
          logo: "https://via.placeholder.com/32?text=MU",
        },
      },
      goals: { home: 2, away: 2 },
      fixture: {
        date: "2024-03-05T20:00:00Z",
        status: { long: "Match Finished" },
        venue: "Anfield",
        competition: "Premier League",
      },
    },
    {
      id: 5,
      teams: {
        home: {
          name: "Manchester United",
          logo: "https://via.placeholder.com/32?text=MU",
        },
        away: {
          name: "Liverpool",
          logo: "https://via.placeholder.com/32?text=LIV",
        },
      },
      goals: { home: 0, away: 3 },
      fixture: {
        date: "2023-11-01T15:00:00Z",
        status: { long: "Match Finished" },
        venue: "Old Trafford",
        competition: "Premier League",
      },
    },
  ];
  const playerH2HSummary = {
    player1: { name: "Bruno Fernandes", goals: 2, assists: 2, matches: 5 },
    player2: { name: "Mohamed Salah", goals: 5, assists: 2, matches: 5 },
  };
  const [team1, setTeam1] = useState(teams[0].id);
  const [team2, setTeam2] = useState(teams[1].id);
  const [player1, setPlayer1] = useState(players[0].id);
  const [player2, setPlayer2] = useState(players[1].id);

  // Placeholder: Update this to filter matches based on selected teams
  const selectedTeam1 = teams.find((t) => t.id === team1)?.name;
  const selectedTeam2 = teams.find((t) => t.id === team2)?.name;
  const selectedPlayer1 = players.find((p) => p.id === player1)?.name;
  const selectedPlayer2 = players.find((p) => p.id === player2)?.name;

  function PlayerMatchCard({ match }: { match: any }) {
    const { teams, goals, fixture, playerStats } = match;
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center space-y-2 text-white">
        <div className="flex justify-between w-full">
          <div className="flex items-center space-x-2">
            <img
              src={teams.home.logo}
              alt={teams.home.name}
              className="w-8 h-8"
            />
            <span>{teams.home.name}</span>
          </div>
          <div className="text-lg font-bold">
            {goals.home} : {goals.away}
          </div>
          <div className="flex items-center space-x-2">
            <span>{teams.away.name}</span>
            <img
              src={teams.away.logo}
              alt={teams.away.name}
              className="w-8 h-8"
            />
          </div>
        </div>
        <div className="text-sm text-gray-400">
          {new Date(fixture.date).toLocaleString("en-GB", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </div>
        <div className="text-sm">{fixture.status.long}</div>
        <div className="text-sm hidden sm:block">{fixture.venue}</div>
        <div className="text-sm hidden sm:block">{fixture.competition}</div>
        <div className="grid grid-cols-2 gap-2 w-full">
          {playerStats.map((player: any) => (
            <div
              key={player.name}
              className="text-sm"
            >
              <strong>{player.name}:</strong> {player.goals} goal
              {player.goals !== 1 ? "s" : ""}, {player.assists} assist
              {player.assists !== 1 ? "s" : ""}
            </div>
          ))}
        </div>
      </div>
    );
  }
  function PlayerH2HSummary({ summary }: { summary: any }) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-bold mb-4">Player Head-to-Head Summary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p>
              <strong>{summary.player1.name}:</strong>
            </p>
            <p>Goals: {summary.player1.goals}</p>
            <p>Assists: {summary.player1.assists}</p>
            <p>Matches: {summary.player1.matches}</p>
          </div>
          <div>
            <p>
              <strong>{summary.player2.name}:</strong>
            </p>
            <p>Goals: {summary.player2.goals}</p>
            <p>Assists: {summary.player2.assists}</p>
            <p>Matches: {summary.player2.matches}</p>
          </div>
        </div>
      </div>
    );
  }
  function TeamH2HSummary({ summary }: { summary: any }) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-bold mb-4">Team Head-to-Head Summary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p>
              <strong>{summary.team1.name} Wins:</strong> {summary.team1.wins}
            </p>
            <p>
              <strong>{summary.team1.name} Goals:</strong> {summary.team1.goals}
            </p>
          </div>
          <div>
            <p>
              <strong>Draws:</strong> {summary.draws}
            </p>
          </div>
          <div>
            <p>
              <strong>{summary.team2.name} Wins:</strong> {summary.team2.wins}
            </p>
            <p>
              <strong>{summary.team2.name} Goals:</strong> {summary.team2.goals}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    // <div>
    //   {/* Hero Section */}
    //   <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center">
    //     <div className="container mx-auto">
    //       <h1 className="text-5xl font-extrabold mb-4">Head-to-Head Stats</h1>
    //       <p className="text-xl mb-6">
    //         Compare your favorite Premier League teams and players!
    //       </p>
    //       <Link
    //         href="/"
    //         className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
    //       >
    //         Back to Home
    //       </Link>
    //     </div>
    //   </section>

    //   {/* Team H2H Section */}
    //   <section className="py-10">
    //     <div className="container mx-auto">
    //       <h2 className="text-3xl font-bold mb-4 text-center">
    //         Team Head-to-Head
    //       </h2>
    //       {/* Team Selection Form */}
    //       <div className="mb-8">
    //         <div className="flex flex-col sm:flex-row justify-center gap-4">
    //           <select
    //             value={team1}
    //             onChange={(e) => setTeam1(Number(e.target.value))}
    //             className="bg-gray-700 text-white p-2 rounded-lg"
    //           >
    //             {teams.map((team) => (
    //               <option
    //                 key={team.id}
    //                 value={team.id}
    //               >
    //                 {team.name}
    //               </option>
    //             ))}
    //           </select>
    //           <span className="text-xl font-bold self-center">vs</span>
    //           <select
    //             value={team2}
    //             onChange={(e) => setTeam2(Number(e.target.value))}
    //             className="bg-gray-700 text-white p-2 rounded-lg"
    //           >
    //             {teams.map((team) => (
    //               <option
    //                 key={team.id}
    //                 value={team.id}
    //               >
    //                 {team.name}
    //               </option>
    //             ))}
    //           </select>
    //         </div>
    //       </div>

    //       {/* Team H2H Summary */}
    //       <TeamH2HSummary
    //         summary={{
    //           ...teamH2HSummary,
    //           team1: { ...teamH2HSummary.team1, name: selectedTeam1 },
    //           team2: { ...teamH2HSummary.team2, name: selectedTeam2 },
    //         }}
    //       />

    //       {/* Team H2H Matches */}
    //       <h3 className="text-2xl font-bold mb-6 text-center">
    //         Recent Team Encounters
    //       </h3>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //         {teamH2HMatches.map((match) => (
    //           <MatchCard
    //             key={match.id}
    //             match={match}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Player H2H Section */}
    //   <section className="py-10 bg-gray-800">
    //     <div className="container mx-auto">
    //       <h2 className="text-3xl font-bold mb-4 text-center">
    //         Player Head-to-Head
    //       </h2>
    //       {/* Player Selection Form */}
    //       <div className="mb-8">
    //         <div className="flex flex-col sm:flex-row justify-center gap-4">
    //           <select
    //             value={player1}
    //             onChange={(e) => setPlayer1(Number(e.target.value))}
    //             className="bg-gray-700 text-white p-2 rounded-lg"
    //           >
    //             {players.map((player) => (
    //               <option
    //                 key={player.id}
    //                 value={player.id}
    //               >
    //                 {player.name} ({player.team})
    //               </option>
    //             ))}
    //           </select>
    //           <span className="text-xl font-bold self-center">vs</span>
    //           <select
    //             value={player2}
    //             onChange={(e) => setPlayer2(Number(e.target.value))}
    //             className="bg-gray-700 text-white p-2 rounded-lg"
    //           >
    //             {players.map((player) => (
    //               <option
    //                 key={player.id}
    //                 value={player.id}
    //               >
    //                 {player.name} ({player.team})
    //               </option>
    //             ))}
    //           </select>
    //         </div>
    //       </div>

    //       {/* Player H2H Summary */}
    //       <PlayerH2HSummary
    //         summary={{
    //           ...playerH2HSummary,
    //           player1: { ...playerH2HSummary.player1, name: selectedPlayer1 },
    //           player2: { ...playerH2HSummary.player2, name: selectedPlayer2 },
    //         }}
    //       />

    //       {/* Player H2H Matches */}
    //       <h3 className="text-2xl font-bold mb-6 text-center">
    //         Recent Matches with Both Players
    //       </h3>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //         {playerH2HMatches.map((match) => (
    //           <PlayerMatchCard
    //             key={match.id}
    //             match={match}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div>
      <FootballComparison />
    </div>
  );
}
