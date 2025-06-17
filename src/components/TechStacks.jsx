import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiCplusplus,
} from "react-icons/si";
import { ArchitectureGroupAWSCloudlogoDark } from "aws-react-icons";

const TechStack = () => {
  const techStack = [
    { icon: <FaHtml5 size={50} />, name: "HTML", color: "text-orange-500" },
    { icon: <FaCss3Alt size={50} />, name: "CSS", color: "text-blue-500" },
    {
      icon: <SiTailwindcss size={50} />,
      name: "Tailwind CSS",
      color: "text-cyan-400",
    },
    { icon: <FaJs size={50} />, name: "JavaScript", color: "text-yellow-500" },
    {
      icon: <SiTypescript size={50} />,
      name: "TypeScript",
      color: "text-blue-400",
    },
    { icon: <FaReact size={50} />, name: "React.js", color: "text-cyan-500" },
    { icon: <SiNextdotjs size={50} />, name: "Next.js", color: "text-white" },
    { icon: <SiRedux size={50} />, name: "Redux", color: "text-purple-500" },
    { icon: <FaNodeJs size={50} />, name: "Node.js", color: "text-green-500" },
    {
      icon: <SiExpress size={50} />,
      name: "Express.js",
      color: "text-gray-500",
    },
    { icon: <SiMongodb size={50} />, name: "MongoDB", color: "text-green-700" },
    { icon: <FaDatabase size={50} />, name: "SQL", color: "text-red-500" },
    {
      icon: <ArchitectureGroupAWSCloudlogoDark size={50} />,
      name: "AWS",
      color: "text-yellow-600",
    },
    { icon: <FaGitAlt size={50} />, name: "Git", color: "text-orange-600" },
    { icon: <FaGithub size={50} />, name: "GitHub", color: "text-white" },
    { icon: <SiCplusplus size={50} />, name: "C++", color: "text-blue-600" },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 p-8">
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center relative group"
        >
          <div
            className={`animate-float transition-transform transform cursor-pointer group-hover:scale-110 ${tech.color}`}
          >
            {tech.icon}
          </div>
          <div className="opacity-0 group-hover:opacity-100 absolute bottom-[-20px] text-blue-400 text-xs transition-opacity">
            {tech.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
