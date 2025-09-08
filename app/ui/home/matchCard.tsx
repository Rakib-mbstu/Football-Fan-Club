export default function MatchCard({ match }: { match: any }) {
    const { teams, goals, fixture } = match;
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center space-y-2 text-white">
            <div className="flex justify-between w-full">
                <div className="flex items-center space-x-2">
                    <img src={teams.home.logo} alt={teams.home.name} className="w-8 h-8" />
                    <span>{teams.home.name}</span>
                </div>
                <div className="text-lg font-bold">
                    {goals.home ?? '-'} : {goals.away ?? '-'}
                </div>
                <div className="flex items-center space-x-2">
                    <span>{teams.away.name}</span>
                    <img src={teams.away.logo} alt={teams.away.name} className="w-8 h-8" />
                </div>
            </div>
            <div className="text-sm text-gray-400">
                {new Date(fixture.date).toLocaleString('en-GB', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                })}
            </div>
            <div className="text-sm">{fixture.status.long}</div>
        </div>
    );
}