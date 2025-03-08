"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

const socialLinks = [
  {
    id: "linkedin",
    label: "My Profile",
    url: "https://www.linkedin.com/in/anh-tri-pham-12576a1a9",
    icon: <FaLinkedin />,
  },
  {
    id: "github",
    label: "My Repo",
    url: "https://github.com/pAnhTri",
    icon: <FaGithub />,
  },
  {
    id: "email",
    label: "E-Mail Me",
    url: "mailto:anhtp5@uci.edu",
    icon: <FaEnvelope />,
  },
  {
    id: "phone",
    label: "Call Me",
    url: "tel:+14086096660",
    icon: <FaPhoneAlt />,
  },
];

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 shadow-lg">
      {/* Standard Navbar (Visible on medium/large screens) */}
      <nav className="hidden sm:flex justify-center items-center w-full h-[10vh] p-3 backdrop-blur-md bg-white/10">
        {/* Section Links */}
        {sections.map((section) => (
          <Link
            key={section.id}
            href={section.id === "about" ? "/" : `/#${section.id}`}
            className="text-white px-4 py-2 rounded-md hover:bg-white/20 hover:scale-105 transition-transform duration-200"
          >
            {section.label}
          </Link>
        ))}

        {/* Social Links with Text */}
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-transform duration-200"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </nav>

      {/* Collapsed Menu for Small Screens */}
      <div className="sm:hidden absolute left-1 z-50 flex flex-col items-start gap-2">
        {/* Hamburger / Close Button */}
        <button
          className="w-12 h-12 rounded-full flex items-center justify-center text-blue-600 text-2xl bg-white/90 shadow-md shadow-blue-300 hover:scale-105 transition-transform duration-200"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <FaTimes /> : <FaBars />}
        </button>

        {/* Expanded Menu (Flow Down Animation) */}
        <div
          className={`flex flex-col items-start pl-2 gap-2 overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Section Links - Expanded with Rounded Rectangle */}
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.id === "about" ? "/" : `/#${section.id}`}
              className="w-28 h-10 bg-white/90 text-blue-600 rounded-xl flex items-center justify-start px-4 shadow-md shadow-blue-300 hover:scale-105 transition-transform duration-200"
              onClick={() => setIsExpanded(false)}
            >
              {section.label}
            </Link>
          ))}

          {/* Social Links as Circle Icons Only */}
          <div className="flex gap-2 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/90 text-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-300 hover:scale-110 transition-transform duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
