"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ClientSearch({ initialPhones }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [phones, setPhones] = useState(initialPhones);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = initialPhones.filter((phone) =>
      phone.name.toLowerCase().includes(term.toLowerCase())
    );
    setPhones(filtered);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search phones..."
        className="w-full mb-6 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 border border-gray-300"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {phones.map((phone) => (
          <Link href={`/phones/${phone.id}`} key={phone.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="relative h-48">
                <Image
                  src={phone.image}
                  alt={phone.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {phone.name}
                </h3>
                <p className="text-gray-600 mb-2">Brand: {phone.brand}</p>
                <p className="text-green-600 font-bold text-lg">
                  ${phone.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
