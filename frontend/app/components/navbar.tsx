"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - Logo and Tabs */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MM Solutions
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link
                href="/features"
                className="text-gray-600 hover:text-blue-600"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-blue-600"
              >
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right side - Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/pages/free-trial"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-500"
            >
              Start Free Trial
            </Link>
            <Link
              href="/book-demo"
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-50"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/features"
              className="block text-gray-600 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-600 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </div>
          {/* Buttons in mobile menu */}
          <div className="px-2 pb-3">
            <Link
              href="/pages/free-trial"
              className="block bg-blue-600 text-white text-center px-3 py-2 rounded-md mb-2"
            >
              Start Free Trial
            </Link>
            <Link
              href="/book-demo"
              className="block border border-blue-600 text-blue-600 text-center px-3 py-2 rounded-md"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
