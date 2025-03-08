import { techStack } from "@/utils/techStack";
import Image from "next/image";
import { useState } from "react";

const ProfessionalSummary = () => {
  const [showMore, setShowMore] = useState(false);

  // Control how many items to show initially
  const visibleTechStack = showMore ? techStack : techStack.slice(0, 5);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full p-2 bg-white drop-shadow-md rounded-lg border border-gray-200">
      <div className="flex items-center sm:border-r sm:border-black sm:pr-4">
        <div className="w-[20vw] h-[20vw] max-h-[250px] min-h-[80px] max-w-[250px] min-w-[80px] rounded-full overflow-hidden">
          <Image
            src="/ProfessionalPortrait.jpeg"
            width={400}
            height={400}
            alt="Professional Portrait"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Professional Summary / Tech Stack */}
      <div className="sm:pl-4 flex flex-col gap-y-4">
        {/* Professional Summary */}
        <div>
          <p className="border-b border-black">Hi! I&apos;m Anh Tri</p>
          <p>
            A <span className="font-bold text-lg">Full-Stack Engineer</span>{" "}
            with a unique blend of legal, retail, and tech experience. I bring a
            user-centric approach to software development. Solving problems, no
            matter how big or small, is what I do best. I am eager to apply this
            diverse experience in dynamic and challenging roles.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <p className="text-sm">Techs I use:</p>
          <div className="flex flex-wrap gap-4 mt-2">
            {visibleTechStack.map((tech) => (
              <div
                key={tech.label}
                className="flex flex-col items-center text-center"
              >
                <div className="text-2xl" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <p className="text-xs mt-1">{tech.label}</p>
              </div>
            ))}
          </div>

          {/* Show More/Show Less Button */}
          {techStack.length > 5 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-2 text-blue-500 text-xs hover:underline cursor-pointer"
            >
              {showMore ? "Show Less" : "Show More..."}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSummary;
