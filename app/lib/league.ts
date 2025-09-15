// Function to fetch current season standings for top 5 European leagues
async function fetchTop5Leagues() {
  // Define the top 5 leagues with their respective competition IDs
  const leagues = [
    { name: 'Premier League', id: 'PL' },
    { name: 'La Liga', id: 'PD' },
    { name: 'Bundesliga', id: 'BL1' },
    { name: 'Serie A', id: 'SA' },
    { name: 'Ligue 1', id: 'FL1' },
  ];

  // Base URL for Football-Data.org API
  const BASE_URL = 'http://api.football-data.org/v4/competitions';
  const API_TOKEN = process.env.FOOTBALL_DATA_API_TOKEN;

  if (!API_TOKEN) {
    throw new Error('API token is missing. Please set FOOTBALL_DATA_API_TOKEN in .env.local');
  }

  // Function to fetch standings for a single league
  console.log(`Fetching standings for`);
  async function fetchLeagueStandings(leagueId: string|number, leagueName: string|number) {
    try {
      const response = await fetch(`${BASE_URL}/${leagueId}/standings`, {
        headers: { 'X-Auth-Token': API_TOKEN },
        next: { revalidate : 24*60*60}
      });
      if (!response.ok) {
        if (response.status === 403) {
          console.warn(`Access to ${leagueName} (${leagueId}) is restricted. Likely not available in free tier.`);
          return null;
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching standings for ${leagueName} (${leagueId}):`, error.message);
      return null;
    }
  }
  
  const standingsData = [];
  for (const league of leagues) {
    const data = await fetchLeagueStandings(league.id, league.name);
    if (data) {
      standingsData.push({
        league: league.name,
        season: data.filters.season || 'Unknown',
        emblem: data.competition?.emblem,
        standings: data.standings[0].table, 
      });
    }
  }

  if (standingsData.length === 0) {
    throw new Error('No data retrieved for any league. Check API token or subscription plan.');
  }

  return standingsData;
}

export default fetchTop5Leagues;