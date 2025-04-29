import { socialMediaLinks } from "@/lib/utils";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#hero" className="text-2xl font-bold">
              That&apos;s Me
            </Link>
            <p className="mt-2 text-blue-200 max-w-md">
              Building innovative software solutions with modern technologies.
              Let&apos;s create something amazing together.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href={socialMediaLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub size={20} />
              </Link>
              <Link
                href={socialMediaLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={20} />
              </Link>

              <Link
                href={`mailto:anhtp5@uci.edu`}
                className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Email Me"
              >
                <FiMail size={20} />
              </Link>
            </div>
            <p className="text-blue-200">
              &copy; {currentYear} Anh Tri Pham. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
