"use client";

import { cn } from "@/lib/utils/cn";
import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaDatabase,
  FaJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiExpress,
  SiGraphql,
  SiJest,
  SiCplusplus,
} from "react-icons/si";

// Skill categories with their respective skills
const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "TypeScript", icon: <SiTypescript />, level: 95 },
      { name: "HTML5", icon: <FaHtml5 />, level: 95 },
      { name: "JavaScript", icon: <FaJs />, level: 90 },
      { name: "CSS3", icon: <FaCss3 />, level: 90 },
      { name: "React", icon: <FaReact />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
      { name: "Bootstrap", icon: <FaBootstrap />, level: 60 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "TypeScript", icon: <SiTypescript />, level: 95 },
      { name: "C++", icon: <SiCplusplus />, level: 95 },
      { name: "JavaScript", icon: <FaJs />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "GraphQL", icon: <SiGraphql />, level: 85 },
      { name: "Express", icon: <SiExpress />, level: 85 },
      { name: "Node.js", icon: <FaNodeJs />, level: 85 },
      { name: "Python", icon: <FaPython />, level: 80 },
      { name: "Supabase", icon: <SiSupabase />, level: 80 },
      { name: "MongoDB", icon: <SiMongodb />, level: 75 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 70 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <FaDatabase />, level: 90 },
      { name: "AWS", icon: <FaAws />, level: 75 },
      { name: "Jest", icon: <SiJest />, level: 60 },
      { name: "Docker", icon: <FaDocker />, level: 50 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center mb-8">
        {skillCategories.map((category) => (
          <button
            key={category.name}
            className={cn(
              `px-6 py-3 mx-2 mb-2 rounded-full transition-colors `,
              activeCategory === category.name
                ? "bg-blue-700 text-white"
                : "bg-blue-100 text-blue-800 hover:bg-blue-200"
            )}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories
          .find((category) => category.name === activeCategory)
          ?.skills.map((skill) => (
            <div key={skill.name} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <div className="text-2xl mr-3 text-blue-700">{skill.icon}</div>
                <h3 className="font-medium">{skill.name}</h3>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>Beginner</span>
                <span>Advanced</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
