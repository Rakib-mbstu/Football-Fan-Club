import Image from "next/image";
export default function PointsTable({ standing }: { standing: any }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="p-3">Pos</th>
            <th className="p-3">Team</th>
            <th className="p-3">Played</th>
            <th className="p-3 hidden sm:table-cell">Win</th>
            <th className="p-3 hidden sm:table-cell">Draw</th>
            <th className="p-3 hidden sm:table-cell">Lose</th>
            <th className="p-3 hidden sm:table-cell">GF</th>
            <th className="p-3 hidden sm:table-cell">GA</th>
            <th className="p-3 hidden sm:table-cell">GD</th>
            <th className="p-3">Pts</th>
          </tr>
        </thead>
        <tbody>
          {standing.map((team) => (
            <tr
              key={team.team.id}
              className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600"
            >
              <td className="p-3">{team.position}</td>
              <td className="p-3 flex items-center space-x-2">
                <Image
                  src={team.team.crest}
                  alt={team.team.name}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span>{team.team.name}</span>
              </td>
              <td className="p-3">{team.playedGames}</td>
              <td className="p-3 hidden sm:table-cell">{team.won}</td>
              <td className="p-3 hidden sm:table-cell">{team.draw}</td>
              <td className="p-3 hidden sm:table-cell">{team.lost}</td>
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
