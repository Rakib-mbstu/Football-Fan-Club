

// Static Data
export const recentMatches = [
    {
        id: 1,
        teams: {
            home: { name: 'Manchester United', logo: 'https://via.placeholder.com/32?text=MU' },
            away: { name: 'Liverpool', logo: 'https://via.placeholder.com/32?text=LIV' },
        },
        goals: { home: 2, away: 1 },
        fixture: { date: '2025-09-01T15:00:00Z', status: { long: 'Match Finished' } },
    },
    {
        id: 2,
        teams: {
            home: { name: 'Arsenal', logo: 'https://via.placeholder.com/32?text=ARS' },
            away: { name: 'Chelsea', logo: 'https://via.placeholder.com/32?text=CHE' },
        },
        goals: { home: 0, away: 0 },
        fixture: { date: '2025-09-02T12:30:00Z', status: { long: 'Match Finished' } },
    },
    {
        id: 3,
        teams: {
            home: { name: 'Manchester City', logo: 'https://via.placeholder.com/32?text=MCI' },
            away: { name: 'Tottenham', logo: 'https://via.placeholder.com/32?text=TOT' },
        },
        goals: { home: 3, away: 2 },
        fixture: { date: '2025-09-03T20:00:00Z', status: { long: 'Match Finished' } },
    },
    {
        id: 4,
        teams: {
            home: { name: 'Everton', logo: 'https://via.placeholder.com/32?text=EVE' },
            away: { name: 'Newcastle', logo: 'https://via.placeholder.com/32?text=NEW' },
        },
        goals: { home: 1, away: 1 },
        fixture: { date: '2025-09-04T15:00:00Z', status: { long: 'Match Finished' } },
    },
    {
        id: 5,
        teams: {
            home: { name: 'Aston Villa', logo: 'https://via.placeholder.com/32?text=AVL' },
            away: { name: 'West Ham', logo: 'https://via.placeholder.com/32?text=WHU' },
        },
        goals: { home: 2, away: 0 },
        fixture: { date: '2025-09-05T18:30:00Z', status: { long: 'Match Finished' } },
    },
];

export const upcomingFixtures = [
    {
        id: 6,
        teams: {
            home: { name: 'Chelsea', logo: 'https://via.placeholder.com/32?text=CHE' },
            away: { name: 'Manchester United', logo: 'https://via.placeholder.com/32?text=MU' },
        },
        goals: { home: null, away: null },
        fixture: { date: '2025-09-10T15:00:00Z', status: { long: 'Not Started' } },
    },
    {
        id: 7,
        teams: {
            home: { name: 'Liverpool', logo: 'https://via.placeholder.com/32?text=LIV' },
            away: { name: 'Arsenal', logo: 'https://via.placeholder.com/32?text=ARS' },
        },
        goals: { home: null, away: null },
        fixture: { date: '2025-09-11T12:30:00Z', status: { long: 'Not Started' } },
    },
    {
        id: 8,
        teams: {
            home: { name: 'Tottenham', logo: 'https://via.placeholder.com/32?text=TOT' },
            away: { name: 'Everton', logo: 'https://via.placeholder.com/32?text=EVE' },
        },
        goals: { home: null, away: null },
        fixture: { date: '2025-09-12T20:00:00Z', status: { long: 'Not Started' } },
    },
    {
        id: 9,
        teams: {
            home: { name: 'Newcastle', logo: 'https://via.placeholder.com/32?text=NEW' },
            away: { name: 'Aston Villa', logo: 'https://via.placeholder.com/32?text=AVL' },
        },
        goals: { home: null, away: null },
        fixture: { date: '2025-09-13T15:00:00Z', status: { long: 'Not Started' } },
    },
    {
        id: 10,
        teams: {
            home: { name: 'West Ham', logo: 'https://via.placeholder.com/32?text=WHU' },
            away: { name: 'Manchester City', logo: 'https://via.placeholder.com/32?text=MCI' },
        },
        goals: { home: null, away: null },
        fixture: { date: '2025-09-14T18:30:00Z', status: { long: 'Not Started' } },
    },
];


// Static Standings Data (Top 5 Premier League Teams, 2025)
export const standings = [
  {
    rank: 1,
    team: { name: 'Manchester City', logo: 'https://via.placeholder.com/32?text=MCI' },
    played: 6,
    wins: 5,
    draws: 1,
    losses: 0,
    goalsFor: 15,
    goalsAgainst: 4,
    goalDifference: 11,
    points: 16,
  },
  {
    rank: 2,
    team: { name: 'Arsenal', logo: 'https://via.placeholder.com/32?text=ARS' },
    played: 6,
    wins: 4,
    draws: 2,
    losses: 0,
    goalsFor: 12,
    goalsAgainst: 5,
    goalDifference: 7,
    points: 14,
  },
  {
    rank: 3,
    team: { name: 'Liverpool', logo: 'https://via.placeholder.com/32?text=LIV' },
    played: 6,
    wins: 3,
    draws: 2,
    losses: 1,
    goalsFor: 10,
    goalsAgainst: 6,
    goalDifference: 4,
    points: 11,
  },
  {
    rank: 4,
    team: { name: 'Chelsea', logo: 'https://via.placeholder.com/32?text=CHE' },
    played: 6,
    wins: 3,
    draws: 1,
    losses: 2,
    goalsFor: 9,
    goalsAgainst: 8,
    goalDifference: 1,
    points: 10,
  },
  {
    rank: 5,
    team: { name: 'Manchester United', logo: 'https://via.placeholder.com/32?text=MU' },
    played: 6,
    wins: 2,
    draws: 2,
    losses: 2,
    goalsFor: 8,
    goalsAgainst: 7,
    goalDifference: 1,
    points: 8,
  },
];


