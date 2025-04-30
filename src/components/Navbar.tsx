'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        ZeroCoolHub
      </Link>
      <div className="md:hidden">
        <Menu className="w-6 h-6" />
      </div>
    </nav>
  );
}
