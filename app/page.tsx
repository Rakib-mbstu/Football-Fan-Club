import Hero from "./ui/home/hero";
import dynamic from "next/dynamic";
import MatchCardSkeleton from "./ui/home/MatchCardSkeleton";

const MatchesServer = dynamic(() => import("./ui/home/MatchesServer"), {
  ssr: true,
  loading: () => (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Recent Matches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <MatchCardSkeleton key={`recent-${idx}`} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Upcoming Fixtures
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <MatchCardSkeleton key={`upcoming-${idx}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  ),
});

export default function Home() {
  return (
    <>
      <Hero />
      <MatchesServer />
    </>
  );
}
