"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Image from 'next/image';


export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      alert("Please enter a search term.");
      return;
    }
   
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="py-2">
      <nav className="flex flex-wrap justify-between items-center py-2 bg-gray-50">
       
        <div className="flex items-center space-x-8">
        <Image
        src="/Images/Cookpal 1.svg" 
        alt="Cookpal Logo"
        width={100} 
        height={50}
        priority 
        />
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
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
        </div>

       
        <div className="flex items-center space-x-12">
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
      </nav>
    </div>
  );
}
