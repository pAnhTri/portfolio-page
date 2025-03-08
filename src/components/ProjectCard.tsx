"use client";

import { JSX, useState } from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
  FaGithub,
} from "react-icons/fa";

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  features: string[];
  tech: { icon: JSX.Element; label: string; color: string }[];
  links: {
    demo: string | null;
    git: string;
  };
}

const ProjectCard = ({
  images,
  title,
  description,
  features,
  tech,
  links,
}: ProjectCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="h-full w-full bg-white drop-shadow-md p-4 rounded-lg border border-gray-200 flex flex-col gap-4">
      {/* Screenshot Slideshow with Full Gallery PhotoProvider */}
      <PhotoProvider>
        <div className="relative w-full h-56 rounded-md overflow-hidden border border-gray-300">
          {/* Full Gallery Inside PhotoProvider */}
          {images.map((image, index) => (
            <PhotoView key={index} src={image}>
              {index === currentIndex ? (
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md cursor-pointer"
                />
              ) : (
                // Placeholder text when condition is false
                <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500 text-lg font-bold">
                  Slide {index + 1}
                </div>
              )}
            </PhotoView>
          ))}

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                <FaChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                <FaChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </PhotoProvider>

      {/* Title & Tech Stack */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full gap-2">
        <p className="font-bold text-lg">{title}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {(showAllTech ? tech : tech.slice(0, 5)).map((techItem, index) => (
            <div
              key={index}
              className="flex items-center"
              title={techItem.label}
            >
              <div className="flex flex-col items-center text-center">
                <div style={{ color: techItem.color }}>{techItem.icon}</div>
                <p className="text-xs mt-1">{techItem.label}</p>
              </div>
            </div>
          ))}

          {/* "Show More/Less" Button for Tech Stack */}
          {tech.length > 5 && (
            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className="flex items-center gap-1 text-blue-500 text-sm hover:underline cursor-pointer"
            >
              {showAllTech ? "Collapse" : "Show More"}
              {showAllTech ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text">{description}</p>

      {/* Features Section */}
      <button
        className="flex items-center gap-2 text-blue-500 hover:underline cursor-pointer"
        onClick={() => setShowFeatures(!showFeatures)}
      >
        {showFeatures ? "Collapse Features" : "Show Features"}
        {showFeatures ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {showFeatures && (
        <ul className="list-disc pl-5 space-y-1 text-sm">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}

      {/* Links */}
      <div className="flex gap-2">
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Live Demo
          </a>
        )}

        <a
          href={links.git}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
        >
          <FaGithub className="h-5 w-5" />
          Show Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
