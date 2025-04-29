import { FiGithub, FiLinkedin } from "react-icons/fi";

export const socialMediaLinks: Record<
  string,
  { url: string; icon: React.ReactNode }
> = {
  github: {
    url: "https://github.com/pAnhTri",
    icon: <FiGithub className="size-4" />,
  },
  linkedin: {
    url: "https://www.linkedin.com/in/anh-tri-pham-12576a1a9/",
    icon: <FiLinkedin className="size-4" />,
  },
};
