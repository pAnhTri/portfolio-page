import { socialMediaLinks } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaJs, FaNodeJs, FaReact, FaCss3, FaHtml5 } from "react-icons/fa";
import {
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";

const techStack = [
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express", icon: <SiExpress />, color: "#000000" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },
];

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16">
      {/* Bio and Image 1/2 + 1/2*/}
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
          Hi, I&apos;m <span className="text-blue-600">Anh Tri</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-blue-700 mb-6">
          Full Stack Engineer
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Do you want to build elegant, efficient, and user-friendly software?
          I&apos;m here to help you. With expertise in modern web technologies,
          I solve problems that make a difference. My diverse background in
          legal, retail, and tech fields gives me a unique perspective on
          software development: a{" "}
          <span className="font-semibold">User Centric</span> one. My goal is to
          continue growing as an engineer while contributing to meaningful
          projects.
        </p>

        {/* Tech Stack Scrollable Display */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-blue-800 mb-3">
            Techs I love:
          </h3>
          <div className="relative p-2">
            {/* Gradient indicators for scroll */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Scrollable container */}
            <div className="flex overflow-x-auto pb-2">
              <div className="flex space-x-6 px-8">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center min-w-max"
                  >
                    <div
                      className="text-3xl mb-1"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </div>
                    <span className="text-xs text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <Link
            href={socialMediaLinks.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            aria-label="GitHub Profile"
          >
            {socialMediaLinks.github.icon}
          </Link>
          <Link
            href={socialMediaLinks.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-colors"
            aria-label="LinkedIn Profile"
          >
            {socialMediaLinks.linkedin.icon}
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {/* Image Container */}
        <div className="relative rounded-full size-64 md:size-80 overflow-hidden ring-2 ring-blue-900 shadow-xl">
          <Image
            src="/Hero/profile.jpeg"
            alt="Me"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
