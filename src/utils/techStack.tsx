import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGraphql,
  SiC,
  SiCplusplus,
  SiJsonwebtokens,
  SiAmazonec2,
  SiAmazons3,
} from "react-icons/si";

export const techStack = [
  // Frontend Technologies
  { icon: <FaReact />, label: "React", color: "#61DAFB" }, // React Blue
  { icon: <SiNextdotjs />, label: "Next.js", color: "#000000" }, // Next.js Black
  { icon: <SiTailwindcss />, label: "Tailwind CSS", color: "#38BDF8" }, // Tailwind Blue
  { icon: <FaBootstrap />, label: "Bootstrap", color: "#7952B3" }, // Bootstrap Purple
  { icon: <SiJavascript />, label: "JavaScript", color: "#F7DF1E" }, // JavaScript Yellow
  { icon: <SiTypescript />, label: "TypeScript", color: "#3178C6" }, // TypeScript Blue

  // Backend Technologies
  { icon: <FaNodeJs />, label: "Node.js", color: "#8CC84B" }, // Node.js Green
  { icon: <SiExpress />, label: "Express.js", color: "#444444" }, // Express.js Dark Gray
  { icon: <SiGraphql />, label: "GraphQL", color: "#E535AB" }, // GraphQL Pink

  // Databases
  { icon: <SiMongodb />, label: "MongoDB", color: "#47A248" }, // MongoDB Green
  { icon: <SiPostgresql />, label: "PostgreSQL", color: "#336791" }, // PostgreSQL Blue
  { icon: <SiMysql />, label: "MySQL", color: "#00758F" }, // MySQL Blue

  // Programming Languages
  { icon: <FaPython />, label: "Python", color: "#3776AB" }, // Python Blue
  { icon: <SiC />, label: "C", color: "#A8B9CC" }, // C Blue
  { icon: <SiCplusplus />, label: "C++", color: "#00599C" }, // C++ Blue

  // Tools & Version Control
  { icon: <FaGithub />, label: "GitHub", color: "#181717" }, // GitHub Black
  {
    icon: <SiJsonwebtokens />,
    label: "JWT",
    color: "#000000",
  },
  {
    icon: <SiAmazonec2 />,
    label: "AWS EC2",
    color: "#FF9900",
  },
  {
    icon: <SiAmazons3 />,
    label: "AWS S3",
    color: "#569A31",
  },
];
