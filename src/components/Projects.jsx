import React, { useState } from "react";
import { motion } from "framer-motion";
import uninventoryImage from "../assets/Uninventory.jpg";
import viaticosImage from "../assets/Viaticos.jpg";

const projects = [
  {
    title: "Inventory Management System",
    description:
      "Inventory management system with product registration, update and deletion features.",
    image: uninventoryImage,
    technologies: ["React", "C#", "MySQL", ".NET"],
    link: "https://github.com/refmcris/uninventory.app"
  },
  {
    title: "Viaticos App",
    description:
      "Expense management application with real-time collaboration features.",
    image: viaticosImage,
    technologies: ["Java", ".Net", "SQLite"],
    link: "https://github.com/yourusername/taskapp",
    demo: "https://taskapp-demo.com"
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#adadad]">
            Featured Projects
          </h2>
          <p className="text-xl text-text-secondary">
            Some of my most recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="shadow-md bg-dark-accent/30 rounded-xl border border-dark-accent/60 overflow-hidden max-w-mm w-full">
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    opacity={0.5}
                    className="w-full h-full object-cover"
                  />
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center p-6"
                    >
                      <div className="text-center">
                        <p className="text-text-secondary mb-4">
                          {project.description}
                        </p>
                        <div className="flex justify-center space-x-4">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-accent text-white rounded-full hover:bg-dark-accent transition-colors"
                          >
                            Demo
                          </a>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-dark-accent text-white rounded-full hover:bg-accent transition-colors"
                          >
                            Code
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#adadad]">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#393939] rounded-full text-sm text-[#ebebeb]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
