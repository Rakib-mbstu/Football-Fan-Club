import Link from "next/link";

export default function Nav() {
  const isLoggedIn = false; // Replace with actual auth logic later
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Football Fan Hub
        </Link>
        <div className="space-x-4">
          <Link
            href="/pointsTable"
            className="hover:text-blue-400"
          >
            Points Table
          </Link>
          <Link
            href="/headToHead"
            className="hover:text-blue-400"
          >
            Head to Head (stats)
          </Link>
          <Link
            href="/favorites"
            className="hover:text-blue-400"
          >
            Favorites
          </Link>
          {isLoggedIn ? (
            <button className="hover:text-blue-400">Logout</button>
          ) : (
            <Link
              href="/login"
              className="hover:text-blue-400"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
