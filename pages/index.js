import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

function getPhones() {
  // In a real application, this would be an API call or database query
  return [
    {
      id: 1,
      name: "iPhone 13 Pro",
      brand: "Apple",
      price: 999,
      image: "/phone4.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      brand: "Samsung",
      price: 799,
      image: "/phone4.jpg",
    },
    {
      id: 3,
      name: "Google Pixel 6",
      brand: "Google",
      price: 599,
      image: "/phone4.jpg",
    },
    {
      id: 4,
      name: "OnePlus 9 Pro",
      brand: "OnePlus",
      price: 969,
      image: "/phone4.jpg",
    },
  ];
}

export default function Home() {
  const phones = getPhones();
  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Featured Phones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {phones.map((phone) => (
            <Link
              href={`/phones/${phone.id}/${slugify(phone.name)}`}
              key={phone.id}
            >
              <div
                key={phone.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
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
      </main>
    </div>
  );
}
