// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mobile Phones Info. All rights
          reserved.
        </p>
        {/* <p className="mt-2">
          <a href="#" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
          {" | "}
          <a href="#" className="text-blue-400 hover:underline">
            Terms of Service
          </a>
        </p> */}
      </div>
    </footer>
  );
}
