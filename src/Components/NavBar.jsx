import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="position-relative bg-gradient-to-br from-[#1a0b2e] via -[#2d1b4e] via-[#4d376d] to-[#7b5ba6] shadow-xl sticky top-0 z-50">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-800/20 animate-pulse"></div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 backdrop-blur-lg bg-white/5"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with modern styling */}
          <div className="group">
            <h2 className="text-4xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent hover:from-purple-200 hover:via-white hover:to-purple-100 transition-all duration-500 cursor-pointer tracking-tight">
              Rishit
              <span className="text-purple-300 group-hover:text-white transition-colors duration-500">
                {" "}
                Kabra
              </span>
            </h2>
            {/* Underline animation */}
            <div className="h-1 bg-gradient-to-r from-purple-400 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
          </div>

          {/* Desktop Navigation menu */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-1 bg-black/20 rounded-2xl p-1.5 backdrop-blur-sm border border-white/10">
              <li>
                <Link
                  to="/"
                  className="group relative block px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="group relative block px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Education</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="group relative block px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Projects</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="group relative block px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4d376d] backdrop-blur-lg border-t border-white/10 shadow-2xl">
            <div className="px-6 py-4 space-y-2">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="block px-6 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/25 border border-transparent hover:border-white/20"
              >
                Home
              </Link>
              <Link
                to="/education"
                onClick={closeMobileMenu}
                className="block px-6 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/25 border border-transparent hover:border-white/20"
              >
                Education
              </Link>
              <Link
                to="/projects"
                onClick={closeMobileMenu}
                className="block px-6 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/25 border border-transparent hover:border-white/20"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="block px-6 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/25 border border-transparent hover:border-white/20"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
    </nav>
  );
}
