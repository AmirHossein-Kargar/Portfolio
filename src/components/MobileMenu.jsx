import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const handleCloseMenu = () => {
    setMenuOpen(false)
  }
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
        `}
    >
      <button
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        onClick={handleCloseMenu}
        aria-label="Close Menu"
      >
        &times;
      </button>

      <Link
        to="/"
        onClick={handleCloseMenu}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
      >
        Home
      </Link>
      <Link
        to="/about"
        onClick={handleCloseMenu}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
      >
        About
      </Link>
      <Link
        to="/projects"
        onClick={handleCloseMenu}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
      >
        Projects
      </Link>
      <Link
        to="/contact"
        onClick={handleCloseMenu}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
      >
        Contact
      </Link>
    </div>
  );
};