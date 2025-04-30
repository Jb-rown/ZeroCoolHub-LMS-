'use client';

import Link from 'next/link';
import { LayoutDashboard, Users, BookOpen, Trophy, User } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-50 p-5 shadow hidden md:block">
      <ul className="space-y-4">
        <li><Link href="/dashboard" className="flex items-center gap-2 hover:text-blue-600"><LayoutDashboard /> Dashboard</Link></li>
        <li><Link href="/classes" className="flex items-center gap-2 hover:text-blue-600"><BookOpen /> Classes</Link></li>
        <li><Link href="/leaderboard" className="flex items-center gap-2 hover:text-blue-600"><Trophy /> Leaderboard</Link></li>
        <li><Link href="/profile" className="flex items-center gap-2 hover:text-blue-600"><User /> Profile</Link></li>
      </ul>
    </aside>
  );
}
