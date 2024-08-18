import Image from "next/image";
import Link from "next/link";

function getPhoneDetails(id) {
  // In a real application, this would be an API call or database query
  const phones = [
    {
      id: 1,
      name: "iPhone 13 Pro",
      brand: "Apple",
      price: 999,
      image: "/phone4.jpg",
      description:
        "The iPhone 13 Pro features a Pro camera system with new Wide, Ultra Wide, and Telephoto cameras, all powered by the A15 Bionic chip.",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      brand: "Samsung",
      price: 799,
      image: "/phone4.jpg",
      description:
        "The Samsung Galaxy S21 boasts a powerful processor, 5G capabilities, and a versatile camera system for stunning photos and videos.",
    },
    {
      id: 3,
      name: "Google Pixel 6",
      brand: "Google",
      price: 599,
      image: "/phone4.jpg",
      description:
        "The Google Pixel 6 offers advanced AI features, a custom-built Tensor chip, and an impressive camera that captures true-to-life photos.",
    },
    {
      id: 4,
      name: "OnePlus 9 Pro",
      brand: "OnePlus",
      price: 969,
      image: "/phone4.jpg",
      description:
        "The OnePlus 9 Pro delivers lightning-fast performance, a fluid 120Hz display, and a Hasselblad camera for mobile for professional-grade photos.",
    },
  ];
  return phones.find((phone) => phone.id === parseInt(id));
}

export default function PhoneDetails({ id }) {
  console.log("id", id);
  // return
  const phone = getPhoneDetails(id);

  if (!phone) {
    return <div>Phone not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          &larr; Back to all phones
        </Link>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative h-64 w-full md:w-96">
                <Image
                  src={phone.image}
                  alt={phone.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {phone.name}
              </h1>
              <p className="text-gray-600 mb-4">Brand: {phone.brand}</p>
              <p className="text-green-600 font-bold text-2xl mb-4">
                ${phone.price}
              </p>
              <p className="text-gray-700">{phone.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let phoneId = context.params.id;
  return { props: { id: phoneId } };
}
