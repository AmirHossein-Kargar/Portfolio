/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop:blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="font-mono text-xl font-bold text-white group"
          >
            <span className="text-blue-500">Amir</span>{" "}
            <span className="group-hover:tracking-wide transition-all duration-500 ease-in-out">
              Kargar
            </span>
          </Link>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-95"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-95"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-95"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-95"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
