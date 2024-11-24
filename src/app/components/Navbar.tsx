"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="py-2">
      <nav className="flex justify-between items-center py-2 bg-gray-50 px-4">
      
        <Image
          src="/Images/Cookpal 1.svg"
          alt="Cookpal Logo"
          width={100}
          height={50}
          priority
        />

        
        <form
          onSubmit={(e) => e.preventDefault()}
          className="hidden sm:flex items-center space-x-2"
        >
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
            className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
            aria-label="Submit search"
          >
            Search
          </button>
        </form>

       
        <button
          onClick={toggleMenu}
          className="sm:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

       
        <div className="hidden sm:flex items-center space-x-12">
          <Link href="/" className="text-green-500 font-bold">
            Home
          </Link>
          <Link href="/components/explore" className="hover:text-green-500 hover:font-bold">
            Explore
          </Link>
          <Link href="/components/help" className="hover:text-green-500 hover:font-bold">
            Help
          </Link>
          <Image
            src="/Profile.svg"
            alt="Profile"
            width={32}
            height={32}
            className="h-8 w-8 rounded-md hover:font-bold"
          />
        </div>

       
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-50 shadow-lg sm:hidden">
            <div className="flex flex-col items-start space-y-2 px-4 py-4">
              <Link
                href="/"
                className="text-green-500 font-bold"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/components/explore"
                className="hover:text-green-500 hover:font-bold"
                onClick={() => setMenuOpen(false)}
              >
                Explore
              </Link>
              <Link
                href="/components/help"
                className="hover:text-green-500 hover:font-bold"
                onClick={() => setMenuOpen(false)}
              >
                Help
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
