'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='h-[80px] bg-gray-200 dark:bg-gray-950 sticky top-0 z-20'>
      <div className='container mx-auto h-full flex items-center justify-between px-4'>
        <Link href="/" className='font-bold text-xl'>
          STC
        </Link>
        <div className='flex gap-6'>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
