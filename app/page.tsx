"use client";
import Link from "next/link";
import { recentMatches, upcomingFixtures } from "./data/data";
import MatchCard from "./ui/home/matchCard";
import Nav from "./ui/home/nav";
import Hero from "./ui/home/hero";

export default function Home() {
  // Simulate session for login/logout (no real auth for now)
  const isLoggedIn = false; // Replace with actual auth logic later

  return (
    <>
      <Hero />

      {/* Recent Matches */}
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Recent Matches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Fixtures */}
      <section className="py-10 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Upcoming Fixtures
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingFixtures.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
