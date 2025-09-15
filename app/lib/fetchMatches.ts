// lib/fetchMatches.js
async function fetchMatches() {
  const leagues = [
    { name: 'Premier League', id: 'PL' },
     { name: 'La Liga', id: 'PD' },
    { name: 'Bundesliga', id: 'BL1' },
    { name: 'Serie A', id: 'SA' },
    { name: 'Ligue 1', id: 'FL1' },
  ];

  const BASE_URL = 'http://api.football-data.org/v4';
  const API_TOKEN = process.env.FOOTBALL_DATA_API_TOKEN;

  if (!API_TOKEN) {
    throw new Error('API token is missing. Please set FOOTBALL_DATA_API_TOKEN in .env.local');
  }

  async function fetchData(endpoint:string, leagueName:string, type:string) {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        headers: { 'X-Auth-Token': API_TOKEN }, 
      });
      if (!response.ok) {
        if (response.status === 403) {
          console.warn(`Access to ${type} for ${leagueName} is restricted. Likely not available in free tier.`);
          return null;
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching ${type} for ${leagueName}:`, error.message);
      return null;
    }
  }

  const matchesData = [];
  for (const league of leagues) {
    const recentMatchesData = await fetchData(
      `competitions/${league.id}/matches?status=FINISHED&limit=5`,
      league.name,
      'recent matches'
    );
    const upcomingFixturesData = await fetchData(
      `competitions/${league.id}/matches?status=SCHEDULED&limit=5`,
      league.name,
      'upcoming fixtures'
    );

    matchesData.push({
      league: league.name,
      recentMatches: recentMatchesData?.matches.slice(0,2) || [],
      upcomingFixtures: upcomingFixturesData?.matches.slice(0,2) || [],
    });
  }

  if (matchesData.every((data) => data.recentMatches.length === 0 && data.upcomingFixtures.length === 0)) {
    throw new Error('No match data retrieved. Check API token or subscription plan.');
  }

  return matchesData;
}

export default fetchMatches;