'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-6">ZeroCoolHub 🚀</h1>
      <p className="text-xl mb-8">Learn, compete, and grow your coding skills.</p>
      <div className="space-x-4">
        <Link href="/auth/login" className="bg-blue-600 text-white px-6 py-3 rounded-xl">Login</Link>
        <Link href="/auth/register" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl">Register</Link>
      </div>
    </main>
  );
}
