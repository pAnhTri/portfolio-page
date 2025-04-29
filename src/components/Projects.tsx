"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiChevronDown,
  FiGithub,
  FiExternalLink,
  FiX,
} from "react-icons/fi";
import {
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiSupabase,
  SiGraphql,
} from "react-icons/si";
import {
  FaReact,
  FaAws,
  FaCss3,
  FaDocker,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

// Map of tech stack icons with their colors
const techIcons: Record<string, { icon: React.ReactNode; color: string }> = {
  React: { icon: <FaReact />, color: "#61DAFB" },
  Next: { icon: <SiNextdotjs />, color: "#000000" },
  JavaScript: { icon: <FaJs />, color: "#F7DF1E" },
  TypeScript: { icon: <SiTypescript />, color: "#3178C6" },
  HTML: { icon: <FaHtml5 />, color: "#E34F26" },
  CSS: { icon: <FaCss3 />, color: "#1572B6" },
  Tailwind: { icon: <SiTailwindcss />, color: "#06B6D4" },
  Node: { icon: <FaNodeJs />, color: "#339933" },
  Python: { icon: <FaPython />, color: "#3776AB" },
  MongoDB: { icon: <SiMongodb />, color: "#47A248" },
  PostgreSQL: { icon: <SiPostgresql />, color: "#4169E1" },
  Firebase: { icon: <SiFirebase />, color: "#FFCA28" },
  AWS: { icon: <FaAws />, color: "#FF9900" },
  Docker: { icon: <FaDocker />, color: "#2496ED" },
  Supabase: { icon: <SiSupabase />, color: "#000000" },
  Express: { icon: <FaNodeJs />, color: "#339933" },
  GraphQL: { icon: <SiGraphql />, color: "#E10098" },
};

const projects = [
  {
    id: 1,
    title: "Will You Be My Boba",
    description:
      "A community-powered app that enables boba enthusiasts to discover their perfect drink and where to find them.",
    images: [
      "/Projects/wybmb-main-page.png",
      "/Projects/wybmb-add-boba.png",
      "/Projects/wybmb-about-page.png",
      "/Projects/wybmb-about-developers.png",
    ],
    techStack: [
      "React",
      "Next",
      "MongoDB",
      "TypeScript",
      "Tailwind",
      "Supabase",
    ],
    features: [
      "Community-driven database of bobas and where to find them",
      "Randomized flavor recommendation guaranteed to always show one drink",
      "Locate boba shops my distance on interactive map",
      "User authentication and profile management",
      "User reviews and ratings",
    ],
    impact: [
      "Helped users discover new boba shops and flavors",
      "Reduce indecisiveness when choosing a boba shop",
      "Encouraged users to try new boba shops and flavors",
    ],
    repoUrl: "https://github.com/pAnhTri/will-you-be-my-boba",
    demoUrl: "https://will-you-be-my-boba.vercel.app/",
  },
  {
    id: 2,
    title: "TiMag",
    description:
      "A consolidated platform for a hoteliers needs when it comes to managing their room rental services in combination with AirBnb.",
    images: [
      "/Projects/timag-main-page.png",
      "/Projects/timag-login-page.png",
      "/Projects/timag-about.png",
    ],
    techStack: [
      "React",
      "Node",
      "MongoDB",
      "Express",
      "GraphQL",
      "TypeScript",
      "Tailwind",
      "AWS",
    ],
    features: [
      "JWT tokens with role-based access control ensure data protection and user privacy",
      "Real-time calendar synchronization with AirBnB's API reduces booking conflicts",
      "GraphQL API endpoints with optimized queries reduce server response time",
      "Scalable MongoDB database architecture with efficient indexing, handling hundreds of daily queries",
      "Integrated comprehensive guest communication system with automated notifications and response tracking",
      "Real-time analytics dashboard with data visualization and performance metrics",
    ],

    impact: [
      "Increased revenue by 66-100% through improved booking efficiency and reduced errors",
      "Achieved near-zero booking mistakes within months of implementation, significantly reducing operational costs",
      "Improved customer retention by 10% through streamlined booking processes and enhanced user experience",
      "Streamlined operations by automating 90% of manual booking processes",
    ],
    repoUrl: "https://github.com/pAnhTri/3rd-air-champion",
    demoUrl: "http://3rd-air-champion.s3-website.us-east-2.amazonaws.com",
  },
];

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<
    Record<number, number>
  >({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<number | null>(null);
  const [techStackOpen, setTechStackOpen] = useState<Record<number, boolean>>(
    {}
  );

  // Initialize current image index for each project
  useState(() => {
    const initialImageIndices: Record<number, number> = {};
    projects.forEach((project) => {
      initialImageIndices[project.id] = 0;
    });
    setCurrentImageIndex(initialImageIndices);
  });

  // Handle image navigation
  const nextImage = (projectId: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const project = projects.find((p) => p.id === projectId);
    if (!project) return;

    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % project.images.length,
    }));
  };

  const prevImage = (projectId: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const project = projects.find((p) => p.id === projectId);
    if (!project) return;

    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]:
        (prev[projectId] - 1 + project.images.length) % project.images.length,
    }));
  };

  // Handle modal
  const openModal = (projectId: number, imageIndex: number) => {
    setModalProject(projectId);
    setModalImage(imageIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProject(null);
    setModalImage(null);
  };

  // Toggle tech stack visibility
  const toggleTechStack = (projectId: number) => {
    setTechStackOpen((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card bg-white rounded-xl overflow-hidden shadow-lg"
        >
          {/* Image Carousel */}
          <div
            className="relative h-64 cursor-pointer"
            onClick={() =>
              openModal(project.id, currentImageIndex[project.id] || 0)
            }
          >
            <Image
              src={project.images[currentImageIndex[project.id] || 0]}
              alt={project.title}
              fill
              className="object-cover"
            />

            {/* Navigation Arrows */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              onClick={(e) => prevImage(project.id, e)}
              aria-label="Previous image"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              onClick={(e) => nextImage(project.id, e)}
              aria-label="Next image"
            >
              <FiChevronRight size={20} />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
              {project.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === (currentImageIndex[project.id] || 0)
                      ? "bg-white"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-2 text-center">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* Tech Stack */}
            <div className="mb-4">
              <button
                className="flex items-center text-blue-700 font-medium mb-2"
                onClick={() => toggleTechStack(project.id)}
                aria-expanded={techStackOpen[project.id]}
              >
                Tech Stack
                {techStackOpen[project.id] ? (
                  <FiChevronUp className="ml-2" />
                ) : (
                  <FiChevronDown className="ml-2" />
                )}
              </button>

              {techStackOpen[project.id] && (
                <div className="flex flex-wrap gap-3 py-2">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="tech-stack-icon flex flex-col items-center"
                      title={tech}
                    >
                      <div
                        className="text-2xl"
                        style={{ color: techIcons[tech]?.color }}
                      >
                        {techIcons[tech]?.icon}
                      </div>
                      <span className="text-xs mt-1">{tech}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Features and Impact */}
            <div className="mb-6">
              <h4 className="font-semibold text-blue-700 mb-2">
                Key Features & Impact
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {project.features.slice(0, 3).map((feature, index) => (
                  <li key={`feature-${index}`}>{feature}</li>
                ))}
                {project.impact.slice(0, 2).map((impact, index) => (
                  <li key={`impact-${index}`} className="font-medium">
                    {impact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <FiGithub className="mr-2" /> Repository
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 border border-blue-800 text-blue-800 rounded-md hover:bg-blue-50 transition-colors"
                >
                  <FiExternalLink className="mr-2" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Fullscreen Image Modal */}
      {modalOpen && modalProject !== null && modalImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50"
            aria-label="Close modal"
          >
            <FiX size={24} />
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={
                projects.find((p) => p.id === modalProject)?.images[
                  modalImage
                ] || ""
              }
              alt="Project image"
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] w-auto mx-auto"
            />

            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                if (modalProject !== null) {
                  const project = projects.find((p) => p.id === modalProject);
                  if (project) {
                    const newIndex =
                      (modalImage - 1 + project.images.length) %
                      project.images.length;
                    setModalImage(newIndex);
                  }
                }
              }}
              aria-label="Previous image"
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                if (modalProject !== null) {
                  const project = projects.find((p) => p.id === modalProject);
                  if (project) {
                    const newIndex = (modalImage + 1) % project.images.length;
                    setModalImage(newIndex);
                  }
                }
              }}
              aria-label="Next image"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
