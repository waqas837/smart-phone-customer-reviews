"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="bg-white shadow-lg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center h-auto py-4 sm:h-28 md:h-16">
          <div className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
            <span className="text-2xl sm:text-xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
              MyMobiles
            </span>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-end">
            <form
              onSubmit={handleSearch}
              className="relative flex items-center w-full max-w-md"
            >
              <input
                type="text"
                placeholder="Search phones..."
                className={`w-full bg-gray-100 rounded-full py-2 pr-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-300 ease-in-out`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="button"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
