"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
  src="/logo.png"
  alt="Victory International School Logo"
  width={60}
  height={60}
  className="rounded-full"
/>
            
          

          <div>
            <h2 className="text-blue-950 font-bold text-lg md:text-xl">
              Victory International School
            </h2>

            <p className="text-yellow-600 text-sm font-semibold">
              Knowledge is Power
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link href="/" className="hover:text-yellow-600">
            Home
          </Link>

          <Link href="/about" className="hover:text-yellow-600">
            About
          </Link>

          <Link href="/academics" className="hover:text-yellow-600">
            Academics
          </Link>

          <Link href="/admissions" className="hover:text-yellow-600">
            Admissions
          </Link>

          <Link href="/gallery" className="hover:text-yellow-600">
            Gallery
          </Link>

          <Link href="/contact" className="hover:text-yellow-600">
            Contact
          </Link>

          <Link
            href="/admissions"
            className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold"
          >
            Apply Now
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-blue-950"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            About
          </Link>

          <Link
            href="/academics"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Academics
          </Link>

          <Link
            href="/admissions"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Admissions
          </Link>

          <Link
            href="/gallery"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Contact
          </Link>

          <Link
            href="/admissions"
            onClick={() => setMenuOpen(false)}
            className="block mx-6 my-4 text-center bg-yellow-500 hover:bg-yellow-600 py-3 rounded-lg font-semibold"
          >
            Apply Now
          </Link>

        </div>
      )}
    </nav>
  );
}