import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile background */}
        <div className="sm:hidden">
          <Image
            src="/images/tm-mobile.jpg"
            alt="Football background mobile"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Desktop background */}
        <div className="hidden sm:block">
          <Image
            src="/images/tm.jpg"
            alt="Football background desktop"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-purple-600/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
          Welcome to Football Fan Hub
        </h1>
        <p className="text-lg sm:text-2xl mb-6">
          Your go-to place for Premier League updates, stats, and more!
        </p>
        <Link
          href="/favorites"
          className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
}
