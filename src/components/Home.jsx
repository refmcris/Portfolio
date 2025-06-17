import React, { useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3,
  FaPython,
  FaJava,
  FaDatabase
} from "react-icons/fa";

import { DiPostgresql, DiMysql, DiMsqlServer } from "react-icons/di";

import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiDotnet,
  SiSpringboot
} from "react-icons/si";
import { useTechSlider } from "../hooks/useTechSlider";
import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import LetterGlitch from "../blocks/Backgrounds/LetterGlitch/LetterGlitch";

export const Home = () => {
  const technologies = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#38BDF8" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#3C873A" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
    { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
    { icon: <FaCss3 />, name: "CSS", color: "#1572B6" },
    { icon: <FaPython />, name: "Python", color: "#3776AB" },
    { icon: <FaJava />, name: "Java", color: "#007396" },
    { icon: <DiMysql />, name: "MySQL", color: "#4479A1" },
    { icon: <SiDotnet />, name: ".NET", color: "#512BD4" },
    { icon: <SiSpringboot />, name: "SpringBoot", color: "#6DB33F" },
    { icon: <DiMsqlServer />, name: "SQL Server", color: "#CC2927" },
    { icon: <DiPostgresql />, name: "PostgreSQL", color: "#336791" }
  ];
  const { sliderRef } = useTechSlider(technologies);

  return (
    <section id="home" className="py-20 md:py-16 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 p-10">
          <h1 className="text-3xl md:text-5xl font-bold ">
            <span className="block text-text-secondary mb-2">Hi, I'm</span>
            <span className="block">
              <SplitText text="Cristian Martinez" />
            </span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
            Developer Full Stack specialized in creating exceptional web
            experiences. Passionate about{" "}
            <ShinyText text="Clean Code" className="text-cyan-600" speed={4} />{" "}
            and innovation.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-black via-dark-accent to-dark-accent text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300   focus:ring-2 focus:ring-accent"
            >
              Contact Me
            </a>
          </div>
          <div className="flex space-x-4 text-text-secondary">
            <a
              href="https://github.com/refmcris"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaGithub className="w-6 h-6 hover:scale-105 hover:shadow-xl transition-all duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/cristian-martinez-40a203270"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaLinkedin className="w-6 h-6 hover:scale-105 hover:shadow-xl transition-all duration-300" />
            </a>
          </div>
        </div>

        <div className="relative w-full p-8">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark z-10" />
        </div>
      </div>
    </section>
  );
};
