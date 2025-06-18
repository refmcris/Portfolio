import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
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

const sections = [
  {
    title: "Web Development",
    content: (
      <p>
        I build responsive and interactive web applications using modern
        frameworks like React and Tailwind CSS, focusing on user experience and
        performance.
      </p>
    )
  },
  {
    title: "Backend Development",
    content: (
      <p>
        I design and implement scalable backend systems with Node.js,
        SpringBoot, and .NET, creating robust RESTful APIs and integrating with
        various databases.
      </p>
    )
  }
];

const technologies = [
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#38BDF8" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#3C873A" },
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

const WhatIDo = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { sliderRef } = useTechSlider(technologies);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-3xl mx-auto my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#adadad] mb-8 text-center">
        What I Do
      </h2>
      <div className="space-y-4">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="border border-dark-accent rounded-lg shadow-md bg-dark-accent/30"
          >
            <button
              className="w-full text-left px-6 py-4 font-semibold text-lg flex justify-between items-center focus:outline-none text-[#adadad]"
              onClick={() => toggle(idx)}
            >
              {section.title}
              <span className="ml-2 text-xl">
                {openIndex === idx ? "-" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4 text-text-secondary animate-fade-in">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full mt-10">
        <div
          className="relative w-full p-4 bg-dark-accent/20 rounded-2xl shadow-lg backdrop-blur-md"
          style={{ opacity: 0.77 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none rounded-2xl" />
          <div className="relative overflow-hidden w-full">
            <div className="flex" ref={sliderRef}>
              {technologies.concat(technologies).map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 w-[100px] mx-6"
                >
                  <div className="text-4xl" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <span className="text-text-secondary text-sm">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
