import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiAmazonec2,
  SiAmazons3,
  SiExpress,
  SiGraphql,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

export const projectData = [
  // TiMag
  {
    images: ["/TiMagAbout.png", "/TiMagLogin.png", "/TiMagMainScreen.png"],
    title: "TiMag",
    description:
      "A MERN stack application designed to streamline room rental operations with a centralized live calendar, AirBnB integration, and an intuitive user interface.",
    features: [
      "Ensure User Security through JWT",
      "Centralized Live Calendar for Streamlined Bookings",
      "Seamless Synchronization with AirBnB's Calendar",
      "Simple API Endpoints Configured with GraphQL",
      "Automated Booking Management for Improved Accuracy",
      "Scalable Database Design Ensuring Quick Queries",
      "User-Friendly Interface with Quick Action Buttons",
      "Dynamic Calendar Views for Enhanced Visibility",
      "Easy Buttons for Guest Communication",
      "Simple but Effective Analytics Dashboard",
    ],
    tech: [
      { icon: <FaReact />, label: "React", color: "#61DAFB" },
      { icon: <FaNodeJs />, label: "Node.js", color: "#3C873A" },
      { icon: <SiMongodb />, label: "MongoDB", color: "#4DB33D" },
      { icon: <SiExpress />, label: "Express", color: "#000000" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS", color: "#38BDF8" },
      { icon: <SiGraphql />, label: "GraphQL", color: "#E535AB" },
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
    ],
    links: {
      demo: "http://3rd-air-champion.s3-website.us-east-2.amazonaws.com",
      git: "https://github.com/pAnhTri/3rd-air-champion",
    },
  },

  //GES - Lot U
  {
    images: ["/LotUMainScreen.png", "/LotURoutes.png", "/LotUOperations.png"],
    title: "GES - Lot U",
    description:
      "A TypeScript, React, and Next.js application designed to streamline UCI Guest and Event Services' parking stall tracking process. By consolidating counts into a centralized interface with real-time updates and haptic feedback, the app improved accuracy and reduced reporting time from 1 - 2 hours to 45 - 90 minutes.",
    features: [
      "Centralized Tracking for Parking Stall Counts",
      "Real-Time Ppdates for Improved Accuracy",
      "Start and End Time Logging for Efficient Reporting",
      "Consolidated View of All Stall Data in One Interface",
      "Automated Total Count Display to Prevent Miscounts",
      "Haptic Feedback for Responsive User Interactions",
      "Streamlined Reporting Process, Reducing Time Spent by up to 50%",
      "Built with TypeScript, React, Next.js, and Tailwind CSS for Performance and Scalability",
    ],
    tech: [
      { icon: <FaReact />, label: "React", color: "#61DAFB" },
      { icon: <FaNodeJs />, label: "Node.js", color: "#3C873A" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS", color: "#38BDF8" },
    ],
    links: {
      demo: "https://ges-lot-u-web.vercel.app",
      git: "https://github.com/pAnhTri/ges-lot-u-web",
    },
  },

  //CalorieCounter
  {
    images: [
      "/CalorieCounterMainScreen.png",
      "/CalorieCounterMainScreenFilled.png",
      "/CalorieCounterAddUser.png",
      "/CalorieCounterSearch.png",
      "/CalorieCounterFoodTracking.png",
    ],
    title: "CalorieCounter",
    description:
      "A Vite, React, and Bootstrap app designed as a simple yet effective alternative to lifestyle trackers like MyFitnessPal. It allows users to set calorie and macro goals, track their food intake, and search the FDC API for nutritional values, offering quick goal adjustments for maintaining, gaining, or losing weight.",
    features: [
      "User Account Storage with PostgreSQL Integration",
      "Calorie and Macro goal Tracking with Customizable Settings",
      "Quick Goal Adjustment Buttons for Maintaining, Gaining, or Losing Weight",
      "Search Modal for Accessing Nutritional Data from the FDC API",
      "Food Tracking Functionality to Log and Manage Daily Intake",
      "Simple and intuitive UI for Easy Navigation",
      "Built with Vite, React, TypeScript, and Bootstrap for Simplicity",
    ],
    tech: [
      { icon: <FaReact />, label: "React", color: "#61DAFB" },
      { icon: <FaNodeJs />, label: "Node.js", color: "#3C873A" },
      { icon: <FaBootstrap />, label: "Bootstrap", color: "#7952B3" },
      { icon: <SiPostgresql />, label: "PostgreSQL", color: "#336791" },
    ],
    links: {
      demo: "https://caloriecounter.pages.dev",
      git: "https://github.com/pAnhTri/CalorieCounter",
    },
  },
];
