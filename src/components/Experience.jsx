import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Technology",
      company: "Univalle",
      period: "2022 - 2025",
      description:
        "Comprehensive study of software development methodologies, programming languages, and modern development practices. Focused on full-stack development, database design, and software architecture principles.",
      type: "grade"
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Freelance",
      period: "2024 - Present",
      description:
        "Design and development of scalable, high-performance web applications using React for the frontend and Django and C#.NET for the backend, ensuring efficient integration and a smooth, optimized user experience.",
      type: "work"
    },
    {
      title: "Full Stack Developer",
      company: "Lean Solutions Group",
      period: "2025 - Present",
      description:
        "Web application development using React, TypeScript, and C# with .NET. Collaboration in implementing new features and performance improvements.",
      type: "work"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#adadad] mb-12">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-dark-accent/40 rounded-full" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-center md:gap-8`}
              >
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-dark-accent flex items-center justify-center">
                  {exp.type === "work" ? (
                    <FaBriefcase className="text-[#adadad]" />
                  ) : (
                    <FaGraduationCap className="text-[#adadad]" />
                  )}
                </div>

                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                  }`}
                >
                  <div className="shadow-md bg-dark-accent/30 p-6 rounded-xl shadow-lg border border-dark-accent/60">
                    <h3 className="text-xl font-semibold text-[#adadad] mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-text-secondary mb-2">
                      {exp.company} | {exp.period}
                    </p>
                    <p className="text-text-secondary">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
