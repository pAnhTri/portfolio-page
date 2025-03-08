import { projectData } from "@/utils/projectData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col w-full items-center p-4 gap-4">
      {/* Projects Header */}
      <h1 className="font-bold text-2xl sm:text-4xl text-center mb-4">
        Projects I&apos;ve Worked On
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            images={project.images}
            description={project.description}
            features={project.features}
            tech={project.tech}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
