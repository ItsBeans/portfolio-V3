"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './components/theme-provider';

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full py-4 px-8 flex justify-end space-x-8 font-bold text-sm">
      <Link
        href="/"
        className={`hover:text-black dark:hover:text-white ${
          pathname === '/' 
            ? 'text-black dark:text-white' 
            : 'text-gray-400 dark:text-gray-300'
        }`}
      >
        welcome
      </Link>
      <Link
        href="/projects"
        className={`hover:text-black dark:hover:text-white ${
          pathname === '/projects' 
            ? 'text-black dark:text-white' 
            : 'text-gray-400 dark:text-gray-300'
        }`}
      >
        projects 
      </Link>
      <Link
        href="/reading-list"
        className={`hover:text-black dark:hover:text-white ${
          pathname === '/reading-list' 
            ? 'text-black dark:text-white' 
            : 'text-gray-400 dark:text-gray-300'
        }`}
      >
        books 
      </Link>
      <Link
        href="/food"
        className={`hover:text-black dark:hover:text-white ${
          pathname === '/food' 
            ? 'text-black dark:text-white' 
            : 'text-gray-400 dark:text-gray-300'
        }`}
      >
        food 
      </Link>
      
      {/* Theme toggle button with icons */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
      </button>
    </header>
  );
}

// Sun icon for light mode
function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

// Moon icon for dark mode
function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}