"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-gray-900 text-white">
      <Link href="/" className="text-2xl font-bold text-green-400">
        ZeroCoolHub
      </Link>
      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/classes">Classes</Link>
        <Link href="/community">Community</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
