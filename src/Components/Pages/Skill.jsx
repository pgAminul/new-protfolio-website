import React, { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaSass,
  FaReact,
  FaNodeJs, // No duplicate
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb, // No duplicate
  SiExpress,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styless
const skillsData = [
  {
    name: "HTML5",
    percentage: 95,
    color: "bg-red-500",
    icon: <FaHtml5 className="text-red-500 text-3xl" />,
    description:
      "With HTML5, I am proficient in structuring web content in a clean and semantic way. This skill enables me to create accessible, SEO-friendly, and responsive web pages, laying the foundation for modern web development.",
  },
  {
    name: "CSS3",
    percentage: 85,
    color: "bg-blue-500",
    icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
    description:
      "My expertise in CSS3 allows me to design visually appealing web interfaces. I can create advanced layouts, animations, and responsive designs that adapt seamlessly to various screen sizes and devices, ensuring optimal user experience.",
  },
  {
    name: "JavaScript",
    percentage: 90,
    color: "bg-yellow-400",
    icon: <FaJs className="text-yellow-400 text-3xl" />,
    description:
      "I have a strong command of JavaScript, enabling me to add dynamic functionality to web pages. From creating interactive user interfaces to implementing complex algorithms, JavaScript is my go-to language for front-end and back-end development.",
  },
  {
    name: "Bootstrap",
    percentage: 80,
    color: "bg-purple-500",
    icon: <FaBootstrap className="text-purple-500 text-3xl" />,
    description:
      "Bootstrap allows me to rapidly prototype and develop responsive web designs. With its pre-designed components and grid system, I can create consistent and professional layouts in a fraction of the time.",
  },
  {
    name: "Tailwind",
    percentage: 80,
    color: "bg-blue-500",
    icon: <SiTailwindcss className="text-blue-500 text-3xl" />,
    description:
      "Tailwind CSS allows me to efficiently build responsive and modern designs with its utility-first approach. Its pre-designed utilities enable me to create consistent layouts quickly while ensuring adaptability across all devices.",
  },
  {
    name: "SCSS",
    percentage: 75,
    color: "bg-pink-400",
    icon: <FaSass className="text-pink-400 text-3xl" />,
    description:
      "SCSS enhances my CSS workflow by introducing variables, mixins, and nesting. With SCSS, I can write more reusable and organized styles, improving project scalability and maintainability.",
  },
  {
    name: "React",
    percentage: 80,
    color: "bg-teal-500",
    icon: <FaReact className="text-teal-500 text-3xl" />,
    description:
      "React is my specialty for building scalable, dynamic web applications. I am skilled in creating reusable components, managing state, and optimizing performance for user-friendly experiences.",
  },
  {
    name: "Redux",
    percentage: 80,
    color: "bg-indigo-500",
    icon: <SiRedux className="text-indigo-500 text-3xl" />,
    description:
      "Redux enables me to manage complex application state effectively. I use it to build robust, predictable, and maintainable applications, ensuring a seamless user experience across components.",
  },
  {
    name: "JWT",
    percentage: 85,
    color: "bg-green-500",
    icon: <SiJsonwebtokens className="text-green-500 text-3xl" />,
    description:
      "JSON Web Tokens (JWT) are an integral part of my backend security skills. I use JWT for secure authentication and authorization in applications, ensuring that sensitive data is transmitted securely.",
  },
  {
    name: "Firebase",
    percentage: 80,
    color: "bg-orange-500",
    icon: <SiFirebase className="text-orange-500 text-3xl" />,
    description:
      "Firebase helps me build real-time, serverless applications with ease. I am proficient in Firebase Authentication, Firestore, and Hosting, which allows me to create scalable and secure applications quickly.",
  },
  {
    name: "Express.js",
    percentage: 85,
    color: "bg-gray-700",
    icon: <SiExpress className="text-white text-3xl" />,
    description:
      "Express.js is my go-to backend framework for building RESTful APIs and server-side applications. With Express, I create efficient, modular, and maintainable backend solutions for web applications.",
  },
  {
    name: "Node.js",
    percentage: 80,
    color: "bg-green-500",
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
    description:
      "Node.js allows me to build scalable and efficient backend applications using JavaScript. I can create fast, non-blocking I/O applications, and develop server-side logic seamlessly with JavaScript.",
  },
  {
    name: "MongoDB",
    percentage: 75,
    color: "bg-green-700",
    icon: <SiMongodb className="text-green-700 text-3xl" />,
    description:
      "MongoDB is my preferred NoSQL database. I use it to store and manage data in JSON-like format, ensuring flexibility and scalability for applications. It integrates seamlessly with Node.js for full-stack JavaScript development.",
  },
];

const SkillBar = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="bg-gradient-to-r from-gray-800 to-zinc-950 py-10"
      id="skill"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-orange-600 to-lime-400 bg-clip-text text-transparent border-b-4 pb-4 w-fit mx-auto">
        My Skills
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-lg p-6 transform hover:-translate-y-2 hover:shadow-xl transition duration-300"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
            data-aos="fade-up" // AOS animation when scrolling into view
          >
            <div className="felx flex-col gap-4 mb-4">
              {skill.icon}
              <h2 className="text-xl font-semibold text-white">{skill.name}</h2>
              <p className="text-gray-300 mt-2 ">{skill.description}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden h-6 relative">
              <div
                className={`h-6 ${skill.color} text-white text-right pr-2 rounded-lg`}
                style={{
                  width: `${hoveredSkill === index ? skill.percentage : 0}%`,
                  transition: "width 0.7s ease-in-out",
                }}
              >
                <span className="absolute left-2 text-xs text-black font-bold transition duration-300">
                  {skill.percentage}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBar;
