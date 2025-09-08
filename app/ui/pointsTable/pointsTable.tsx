"use client";
import { standings } from "@/app/data/data";
export default function PointsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="p-3">Pos</th>
            <th className="p-3">Team</th>
            <th className="p-3">P</th>
            <th className="p-3 hidden sm:table-cell">W</th>
            <th className="p-3 hidden sm:table-cell">D</th>
            <th className="p-3 hidden sm:table-cell">L</th>
            <th className="p-3 hidden sm:table-cell">GF</th>
            <th className="p-3 hidden sm:table-cell">GA</th>
            <th className="p-3 hidden sm:table-cell">GD</th>
            <th className="p-3">Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team) => (
            <tr
              key={team.rank}
              className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600"
            >
              <td className="p-3">{team.rank}</td>
              <td className="p-3 flex items-center space-x-2">
                <img
                  src={team.team.logo}
                  alt={team.team.name}
                  className="w-6 h-6"
                />
                <span>{team.team.name}</span>
              </td>
              <td className="p-3">{team.played}</td>
              <td className="p-3 hidden sm:table-cell">{team.wins}</td>
              <td className="p-3 hidden sm:table-cell">{team.draws}</td>
              <td className="p-3 hidden sm:table-cell">{team.losses}</td>
              <td className="p-3 hidden sm:table-cell">{team.goalsFor}</td>
              <td className="p-3 hidden sm:table-cell">{team.goalsAgainst}</td>
              <td className="p-3 hidden sm:table-cell">
                {team.goalDifference}
              </td>
              <td className="p-3 font-bold">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
