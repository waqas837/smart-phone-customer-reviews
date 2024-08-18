// components/Layout.js
import Navbar from "./Navbar"; // Assuming you have a Navbar component
import Footer from "./Footer"; // Assuming you have a Footer component

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
