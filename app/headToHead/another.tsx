import { log } from "node:console";
import { useEffect, useState } from "react";

export default function FootballComparison() {
  const [comparisonType, setComparisonType] = useState("teams");

  // Team state
  const [selectedTeams, setSelectedTeams] = useState({
    teamA: "Real Madrid",
    teamB: "Villarreal",
  });

  // Player state
  const [selectedPlayers, setSelectedPlayers] = useState({
    playerA: "Lionel Messi",
    playerB: "Kylian Mbappé",
  });

  const [activeTab, setActiveTab] = useState("overall");

  const teams = [
    "Real Madrid",
    "Barcelona",
    "Atletico Madrid",
    "Villarreal",
    "Real Sociedad",
    "Athletic Bilbao",
    "Valencia",
    "Sevilla",
  ];

  const players = [
    "Lionel Messi",
    "Kylian Mbappé",
    "Erling Haaland",
    "Vinicius Jr",
    "Kevin De Bruyne",
    "Mohamed Salah",
    "Harry Kane",
    "Pedri",
    "Jude Bellingham",
    "Luka Modrić",
    "Sadio Mané",
    "Bruno Fernandes",
  ];

  const teamData = {
    "Real Madrid": {
      logo: "🏆",
      country: "Spain",
      ppg: 3.0,
      lastFive: ["W", "W", "W", "W", "L"],
      stats: {
        gamesPlayed: 3,
        wins: 3,
        draws: 0,
        losses: 0,
        position: 1,
        pointsPerGame: 3.0,
        avgGoals: 2.33,
        avgGoalsScored: 2.0,
      },
    },
    Villarreal: {
      logo: "🟡",
      country: "Spain",
      ppg: 2.33,
      lastFive: ["D", "W", "W", "L", "W"],
      stats: {
        gamesPlayed: 3,
        wins: 2,
        draws: 1,
        losses: 0,
        position: 3,
        pointsPerGame: 2.33,
        avgGoals: 3.0,
        avgGoalsScored: 2.67,
      },
    },
    Barcelona: {
      logo: "🔵",
      country: "Spain",
      ppg: 2.67,
      lastFive: ["W", "W", "D", "W", "W"],
      stats: {
        gamesPlayed: 3,
        wins: 2,
        draws: 1,
        losses: 0,
        position: 2,
        pointsPerGame: 2.67,
        avgGoals: 2.67,
        avgGoalsScored: 2.33,
      },
    },
  };

  const playerData = {
    "Lionel Messi": {
      flag: "🇦🇷",
      club: "Inter Miami",
      league: "MLS",
      position: "RW",
      age: 37,
      ppg: 2.85,
      lastFive: ["W", "W", "D", "W", "W"],
      stats: {
        gamesPlayed: 14,
        goals: 20,
        assists: 16,
        yellowCards: 2,
        redCards: 0,
        minutesPlayed: 1250,
        goalsPerGame: 1.43,
        assistsPerGame: 1.14,
        shotsPerGame: 4.2,
        passAccuracy: 87.5,
        keyPasses: 3.8,
        dribbles: 4.1,
      },
    },
    "Kylian Mbappé": {
      flag: "🇫🇷",
      club: "Real Madrid",
      league: "La Liga",
      position: "LW",
      age: 25,
      ppg: 2.67,
      lastFive: ["W", "L", "W", "W", "W"],
      stats: {
        gamesPlayed: 12,
        goals: 18,
        assists: 8,
        yellowCards: 1,
        redCards: 0,
        minutesPlayed: 1080,
        goalsPerGame: 1.5,
        assistsPerGame: 0.67,
        shotsPerGame: 5.1,
        passAccuracy: 82.3,
        keyPasses: 2.1,
        dribbles: 3.9,
      },
    },
    "Erling Haaland": {
      flag: "🇳🇴",
      club: "Manchester City",
      league: "Premier League",
      position: "ST",
      age: 24,
      ppg: 2.91,
      lastFive: ["W", "W", "W", "D", "W"],
      stats: {
        gamesPlayed: 11,
        goals: 22,
        assists: 5,
        yellowCards: 3,
        redCards: 0,
        minutesPlayed: 990,
        goalsPerGame: 2.0,
        assistsPerGame: 0.45,
        shotsPerGame: 6.8,
        passAccuracy: 78.9,
        keyPasses: 1.2,
        dribbles: 1.8,
      },
    },
    "Kevin De Bruyne": {
      flag: "🇧🇪",
      club: "Manchester City",
      league: "Premier League",
      position: "CAM",
      age: 33,
      ppg: 2.73,
      lastFive: ["W", "W", "D", "W", "L"],
      stats: {
        gamesPlayed: 13,
        goals: 8,
        assists: 15,
        yellowCards: 4,
        redCards: 0,
        minutesPlayed: 1170,
        goalsPerGame: 0.62,
        assistsPerGame: 1.15,
        shotsPerGame: 3.4,
        passAccuracy: 91.2,
        keyPasses: 4.7,
        dribbles: 2.3,
      },
    },
  };

  const getTeamData = (teamName: string) => {
    return teamData[teamName] || teamData["Real Madrid"];
  };

  const getPlayerData = (playerName) => {
    return playerData[playerName] || playerData["Lionel Messi"];
  };

  const getLastFiveDisplay = (results) => {
    return results.map((result, index) => (
      <span
        key={index}
        className={`inline-block w-3 h-3 sm:w-4 sm:h-4 text-xs font-bold text-center leading-3 sm:leading-4 rounded mr-1 ${
          result === "W"
            ? "bg-green-500 text-white"
            : result === "D"
            ? "bg-yellow-500 text-white"
            : "bg-red-500 text-white"
        }`}
      >
        {result}
      </span>
    ));
  };

  const getPositionColor = (position) => {
    const colors = {
      GK: "bg-yellow-500",
      CB: "bg-blue-500",
      LB: "bg-blue-500",
      RB: "bg-blue-500",
      CDM: "bg-green-500",
      CM: "bg-green-500",
      CAM: "bg-green-500",
      LW: "bg-purple-500",
      RW: "bg-purple-500",
      ST: "bg-red-500",
      CF: "bg-red-500",
    };
    return colors[position] || "bg-gray-500";
  };

  const renderTeamComparison = () => (
    <>
      {/* Team Selection */}
      <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-blue-600 mb-2">
              Team A
            </label>
            <select
              className="w-full p-3 border bg-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              value={selectedTeams.teamA}
              onChange={(e) =>
                setSelectedTeams({ ...selectedTeams, teamA: e.target.value })
              }
            >
              {teams.map((team) => (
                <option
                  key={team}
                  value={team}
                >
                  {team}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-blue-600 mb-2">
              Team B
            </label>
            <select
              className="w-full p-3 bg-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              value={selectedTeams.teamB}
              onChange={(e) =>
                setSelectedTeams({ ...selectedTeams, teamB: e.target.value })
              }
            >
              {teams.map((team) => (
                <option
                  key={team}
                  value={team}
                >
                  {team}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Team Headers */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mb-4 sm:mb-6">
        {/* Team A Header */}
        <div className="bg-slate-800 text-white rounded-lg p-4">
          <div className="flex items-center mb-3">
            <span className="text-xl sm:text-2xl mr-3">
              {getTeamData(selectedTeams.teamA).logo}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm text-gray-300">
                {getTeamData(selectedTeams.teamA).country}
              </div>
              <div className="text-base sm:text-lg font-semibold truncate">
                {selectedTeams.teamA}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-300 text-xs sm:text-sm">PPG</div>
              <div className="text-green-400 font-bold text-base sm:text-lg">
                {getTeamData(selectedTeams.teamA).ppg}
              </div>
            </div>
            <div>
              <div className="text-gray-300 mb-1 text-xs sm:text-sm">
                Last 5
              </div>
              <div className="flex">
                {getLastFiveDisplay(getTeamData(selectedTeams.teamA).lastFive)}
              </div>
            </div>
          </div>

          <div className="flex space-x-2 sm:space-x-4 mt-4 text-xs">
            <button
              className={`px-2 sm:px-3 py-1 rounded text-xs ${
                activeTab === "overall" ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => setActiveTab("overall")}
            >
              Overall
            </button>
            <button
              className={`px-2 sm:px-3 py-1 rounded text-xs ${
                activeTab === "home" ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => setActiveTab("home")}
            >
              Home
            </button>
            <button
              className={`px-2 sm:px-3 py-1 rounded text-xs ${
                activeTab === "away" ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => setActiveTab("away")}
            >
              Away
            </button>
          </div>
        </div>

        {/* Team B Header */}
        <div className="bg-slate-800 text-white rounded-lg p-4">
          <div className="flex items-center mb-3">
            <span className="text-xl sm:text-2xl mr-3">
              {getTeamData(selectedTeams.teamB).logo}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm text-gray-300">
                {getTeamData(selectedTeams.teamB).country}
              </div>
              <div className="text-base sm:text-lg font-semibold truncate">
                {selectedTeams.teamB}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-300 text-xs sm:text-sm">PPG</div>
              <div className="text-green-400 font-bold text-base sm:text-lg">
                {getTeamData(selectedTeams.teamB).ppg}
              </div>
            </div>
            <div>
              <div className="text-gray-300 mb-1 text-xs sm:text-sm">
                Last 5
              </div>
              <div className="flex">
                {getLastFiveDisplay(getTeamData(selectedTeams.teamB).lastFive)}
              </div>
            </div>
          </div>

          <div className="flex space-x-2 sm:space-x-4 mt-4 text-xs">
            <button
              className={`px-2 sm:px-3 py-1 rounded text-xs ${
                activeTab === "overall" ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => setActiveTab("overall")}
            >
              Overall
            </button>
            <button
              className={`px-2 sm:px-3 py-1 rounded text-xs ${
                activeTab === "home" ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => setActiveTab("home")}
            >
              Home
            </button>
            <button
              className={`px-2 sm:px-3 py-1 rounded text-xs ${
                activeTab === "away" ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => setActiveTab("away")}
            >
              Away
            </button>
          </div>
        </div>
      </div>

      {/* Team Stats Comparison */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-3 text-center py-2 sm:py-3 border-b bg-gray-50">
          <div className="text-green-600 font-semibold text-xs sm:text-sm px-2">
            Team Stats
          </div>
          <div className="text-blue-600 font-semibold text-xs sm:text-sm">
            Season Overview
          </div>
          <div className="text-green-600 font-semibold text-xs sm:text-sm px-2">
            Team Stats
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {[
            { key: "gamesPlayed", label: "Games Played" },
            { key: "wins", label: "Wins" },
            { key: "draws", label: "Draws" },
            { key: "losses", label: "Losses" },
            { key: "position", label: "League Position" },
          ].map((stat, index) => (
            <div
              key={stat.key}
              className={`grid grid-cols-3 py-2 sm:py-3 px-2 sm:px-6 ${
                index % 2 === 1 ? "bg-gray-50" : ""
              }`}
            >
              <div className="text-center text-gray-800 font-semibold bg-blue-50 py-1 sm:py-2 rounded text-sm">
                {getTeamData(selectedTeams.teamA).stats[stat.key]}
              </div>
              <div className="text-center text-gray-600 font-medium py-1 sm:py-2 text-xs sm:text-sm px-1">
                {stat.label}
              </div>
              <div className="text-center text-gray-800 font-semibold bg-blue-50 py-1 sm:py-2 rounded text-sm">
                {getTeamData(selectedTeams.teamB).stats[stat.key]}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 text-center py-2 sm:py-3 border-b border-t mt-4 bg-gray-50">
          <div className="text-green-600 font-semibold text-xs sm:text-sm px-2">
            Team Stats
          </div>
          <div className="text-blue-600 font-semibold text-xs sm:text-sm">
            Season AVGs
          </div>
          <div className="text-green-600 font-semibold text-xs sm:text-sm px-2">
            Team Stats
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {[
            { key: "pointsPerGame", label: "Points Per Game" },
            { key: "avgGoals", label: "AVG Goals" },
            { key: "avgGoalsScored", label: "AVG Goals Scored" },
          ].map((stat, index) => (
            <div
              key={stat.key}
              className={`grid grid-cols-3 py-2 sm:py-3 px-2 sm:px-6 ${
                index % 2 === 0 ? "bg-gray-50" : ""
              }`}
            >
              <div className="text-center text-gray-800 font-semibold bg-blue-100 py-1 sm:py-2 rounded text-sm">
                {getTeamData(selectedTeams.teamA).stats[stat.key]}
              </div>
              <div className="text-center text-gray-600 font-medium py-1 sm:py-2 text-xs sm:text-sm px-1">
                {stat.label}
              </div>
              <div className="text-center text-gray-800 font-semibold bg-blue-100 py-1 sm:py-2 rounded text-sm">
                {getTeamData(selectedTeams.teamB).stats[stat.key]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderPlayerComparison = () => (
    <>
      {/* Player Selection */}
      <div className="bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-blue-600 mb-2">
              Player A
            </label>
            <select
              className="w-full p-3 border bg-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              value={selectedPlayers.playerA}
              onChange={(e) =>
                setSelectedPlayers({
                  ...selectedPlayers,
                  playerA: e.target.value,
                })
              }
            >
              {players.map((player) => (
                <option
                  key={player}
                  value={player}
                >
                  {player}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-blue-600 mb-2">
              Player B
            </label>
            <select
              className="w-full p-3 border bg-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              value={selectedPlayers.playerB}
              onChange={(e) =>
                setSelectedPlayers({
                  ...selectedPlayers,
                  playerB: e.target.value,
                })
              }
            >
              {players.map((player) => (
                <option
                  key={player}
                  value={player}
                >
                  {player}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Player Headers */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mb-4 sm:mb-6">
        {/* Player A Header */}
        <div className="bg-slate-800 text-white rounded-lg p-4">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm sm:text-xl font-bold mr-3 flex-shrink-0">
              {selectedPlayers.playerA
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 sm:gap-2 mb-1">
                <span className="text-sm sm:text-lg">
                  {getPlayerData(selectedPlayers.playerA).flag}
                </span>
                <div className="text-xs sm:text-sm text-gray-300 truncate">
                  {getPlayerData(selectedPlayers.playerA).club} •{" "}
                  {getPlayerData(selectedPlayers.playerA).league}
                </div>
              </div>
              <div className="text-base sm:text-lg font-semibold truncate">
                {selectedPlayers.playerA}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`px-1 sm:px-2 py-1 text-xs font-bold rounded text-white ${getPositionColor(
                    getPlayerData(selectedPlayers.playerA).position
                  )}`}
                >
                  {getPlayerData(selectedPlayers.playerA).position}
                </span>
                <span className="text-xs text-gray-300">
                  Age {getPlayerData(selectedPlayers.playerA).age}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-300 text-xs sm:text-sm">Team PPG</div>
              <div className="text-green-400 font-bold text-base sm:text-lg">
                {getPlayerData(selectedPlayers.playerA).ppg}
              </div>
            </div>
            <div>
              <div className="text-gray-300 mb-1 text-xs sm:text-sm">
                Last 5
              </div>
              <div className="flex">
                {getLastFiveDisplay(
                  getPlayerData(selectedPlayers.playerA).lastFive
                )}
              </div>
            </div>
          </div>

          <div className="flex space-x-2 sm:space-x-4 mt-4 text-xs">
            <button
              className={`px-2 sm:px-3 py-1 rounded text-xs ${
                activeTab === "overall" ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => setActiveTab("overall")}
            >
              Overall
            </button>
            <button
              className={`px-2 sm:px-3 py-1 rounded text-xs ${
                activeTab === "home" ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => setActiveTab("home")}
            >
              Home
            </button>
            <button
              className={`px-2 sm:px-3 py-1 rounded text-xs ${
                activeTab === "away" ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => setActiveTab("away")}
            >
              Away
            </button>
          </div>
        </div>

        {/* Player B Header */}
        <div className="bg-slate-800 text-white rounded-lg p-4">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center text-sm sm:text-xl font-bold mr-3 flex-shrink-0">
              {selectedPlayers.playerB
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 sm:gap-2 mb-1">
                <span className="text-sm sm:text-lg">
                  {getPlayerData(selectedPlayers.playerB).flag}
                </span>
                <div className="text-xs sm:text-sm text-gray-300 truncate">
                  {getPlayerData(selectedPlayers.playerB).club} •{" "}
                  {getPlayerData(selectedPlayers.playerB).league}
                </div>
              </div>
              <div className="text-base sm:text-lg font-semibold truncate">
                {selectedPlayers.playerB}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`px-1 sm:px-2 py-1 text-xs font-bold rounded text-white ${getPositionColor(
                    getPlayerData(selectedPlayers.playerB).position
                  )}`}
                >
                  {getPlayerData(selectedPlayers.playerB).position}
                </span>
                <span className="text-xs text-gray-300">
                  Age {getPlayerData(selectedPlayers.playerB).age}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-300 text-xs sm:text-sm">Team PPG</div>
              <div className="text-green-400 font-bold text-base sm:text-lg">
                {getPlayerData(selectedPlayers.playerB).ppg}
              </div>
            </div>
            <div>
              <div className="text-gray-300 mb-1 text-xs sm:text-sm">
                Last 5
              </div>
              <div className="flex">
                {getLastFiveDisplay(
                  getPlayerData(selectedPlayers.playerB).lastFive
                )}
              </div>
            </div>
          </div>

          <div className="flex space-x-2 sm:space-x-4 mt-4 text-xs">
            <button
              className={`px-2 sm:px-3 py-1 rounded text-xs ${
                activeTab === "overall" ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => setActiveTab("overall")}
            >
              Overall
            </button>
            <button
              className={`px-2 sm:px-3 py-1 rounded text-xs ${
                activeTab === "home" ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => setActiveTab("home")}
            >
              Home
            </button>
            <button
              className={`px-2 sm:px-3 py-1 rounded text-xs ${
                activeTab === "away" ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => setActiveTab("away")}
            >
              Away
            </button>
          </div>
        </div>
      </div>

      {/* Player Stats Comparison */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-3 text-center py-2 sm:py-3 border-b bg-gray-50">
          <div className="text-green-600 font-semibold text-xs sm:text-sm px-2">
            Player Stats
          </div>
          <div className="text-blue-600 font-semibold text-xs sm:text-sm">
            Season Overview
          </div>
          <div className="text-green-600 font-semibold text-xs sm:text-sm px-2">
            Player Stats
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {[
            { key: "gamesPlayed", label: "Games Played" },
            { key: "goals", label: "Goals" },
            { key: "assists", label: "Assists" },
            { key: "yellowCards", label: "Yellow Cards" },
            { key: "minutesPlayed", label: "Minutes Played" },
          ].map((stat, index) => (
            <div
              key={stat.key}
              className={`grid grid-cols-3 py-2 sm:py-3 px-2 sm:px-6 ${
                index % 2 === 1 ? "bg-gray-50" : ""
              }`}
            >
              <div className="text-center text-gray-800 font-semibold bg-blue-50 py-1 sm:py-2 rounded text-sm">
                {getPlayerData(selectedPlayers.playerA).stats[stat.key]}
              </div>
              <div className="text-center text-gray-600 font-medium py-1 sm:py-2 text-xs sm:text-sm px-1">
                {stat.label}
              </div>
              <div className="text-center text-gray-800 font-semibold bg-blue-50 py-1 sm:py-2 rounded text-sm">
                {getPlayerData(selectedPlayers.playerB).stats[stat.key]}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 text-center py-2 sm:py-3 border-b border-t mt-4 bg-gray-50">
          <div className="text-green-600 font-semibold text-xs sm:text-sm px-2">
            Player Stats
          </div>
          <div className="text-blue-600 font-semibold text-xs sm:text-sm">
            Performance AVGs
          </div>
          <div className="text-green-600 font-semibold text-xs sm:text-sm px-2">
            Player Stats
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {[
            { key: "goalsPerGame", label: "Goals Per Game" },
            { key: "assistsPerGame", label: "Assists Per Game" },
            { key: "shotsPerGame", label: "Shots Per Game" },
            { key: "passAccuracy", label: "Pass Accuracy", suffix: "%" },
            { key: "keyPasses", label: "Key Passes Per Game" },
            { key: "dribbles", label: "Dribbles Per Game" },
          ].map((stat, index) => (
            <div
              key={stat.key}
              className={`grid grid-cols-3 py-2 sm:py-3 px-2 sm:px-6 ${
                index % 2 === 0 ? "bg-gray-50" : ""
              }`}
            >
              <div className="text-center text-gray-800 font-semibold bg-blue-100 py-1 sm:py-2 rounded text-sm">
                {getPlayerData(selectedPlayers.playerA).stats[stat.key]}
                {stat.suffix || ""}
              </div>
              <div className="text-center text-gray-600 font-medium py-1 sm:py-2 text-xs sm:text-sm px-1">
                {stat.label}
              </div>
              <div className="text-center text-gray-800 font-semibold bg-blue-100 py-1 sm:py-2 rounded text-sm">
                {getPlayerData(selectedPlayers.playerB).stats[stat.key]}
                {stat.suffix || ""}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  useEffect(() => {
    const leagueDoc = async () => await getLeagueInfo(39, 2023);
    leagueDoc();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 shadow-sm border-b border-gray-700 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <h1 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 text-center">
            ⚽ Football Comparison Dashboard
          </h1>

          {/* Toggle Buttons */}
          <div className="flex bg-gray-700 rounded-lg p-1 max-w-xs mx-auto">
            <button
              className={`flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                comparisonType === "teams"
                  ? "bg-gray-900 text-blue-400 shadow-sm"
                  : "text-gray-300 hover:text-blue-400"
              }`}
              onClick={() => setComparisonType("teams")}
            >
              🏆 Teams
            </button>
            <button
              className={`flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                comparisonType === "players"
                  ? "bg-gray-900 text-blue-400 shadow-sm"
                  : "text-gray-300 hover:text-blue-400"
              }`}
              onClick={() => setComparisonType("players")}
            >
              👤 Players
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg font-semibold mb-2 flex items-center text-white">
            <span className="text-blue-400 mr-2">
              {comparisonType === "teams" ? "🏆" : "⚽"}
            </span>
            Select Your {comparisonType === "teams" ? "Teams" : "Players"}
          </h2>
        </div>

        {comparisonType === "teams"
          ? renderTeamComparison()
          : renderPlayerComparison()}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 border-t border-gray-700 mt-8 sm:mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-center text-xs sm:text-sm text-gray-400">
            Compare football teams and players • Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
