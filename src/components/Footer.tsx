"use client";

import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center w-full p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm shadow-lg">
      {/* Contact Info */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full sm:w-auto border-b sm:border-b-0 sm:border-r border-white pb-4 sm:pb-0 sm:pr-6">
        <h3 className="font-bold text-md text-white tracking-wide">
          Contact Me
        </h3>

        {/* Contact Details */}
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center justify-center gap-2">
            <FaPhoneAlt />
            <a
              href="tel:+14086096660"
              className="hover:underline transition-opacity duration-200 opacity-90 hover:opacity-100"
            >
              408-609-6660
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaEnvelope />
            <a
              href="mailto:anhtp5@uci.edu"
              className="hover:underline transition-opacity duration-200 opacity-90 hover:opacity-100"
            >
              anhtp5@uci.edu
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-4 mt-2">
          <a
            href="https://www.linkedin.com/in/anh-tri-pham-12576a1a9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-blue-300 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/pAnhTri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-blue-300 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto py-4 sm:py-0 sm:pl-6">
        <h3 className="font-bold text-md text-white tracking-wide">
          Quick Links
        </h3>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="hover:underline border-r border-white pr-2 transition-opacity duration-200 opacity-90 hover:opacity-100"
          >
            About
          </Link>

          <Link
            href="/#projects"
            className="hover:underline transition-opacity duration-200 opacity-90 hover:opacity-100"
          >
            Projects
          </Link>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="w-full text-center text-xs pt-4 sm:pt-0 border-t sm:border-t-0 sm:pl-6 opacity-80">
        <p>
          © {new Date().getFullYear()} Anh Tri Pham. All Rights Reserved. This
          website utilizes open-source software under the MIT License.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
