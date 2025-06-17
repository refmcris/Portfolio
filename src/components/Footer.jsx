import React from "react";
import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="py-12 mt-20 bg-black/80 backdrop-blur-md rounded-t-2xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">
              Build With
            </h3>
            <div className="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors">
              <FaReact className="text-xl" />
              <span>React</span>
            </div>
            <div className="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors">
              <SiTailwindcss className="text-xl" />
              <span>Tailwind CSS</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">
              Follow me
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/refmcris"
                className="text-text-secondary hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl hover:scale-105 hover:shadow-xl transition-all duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/cristian-martinez-40a203270"
                className="text-text-secondary hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:scale-105 hover:shadow-xl transition-all duration-300" />
              </a>
            </div>
          </div>
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-md">
              <iframe
                src="https://spotify-recently-played-readme.vercel.app/api?user=8vy0noi4uhn3ozbpzqkize9dz&count=1&width=300"
                className="w-full h-32"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-accent text-center">
          <p className="text-text-secondary">
            &copy; {new Date().getFullYear()} Cristian Martinez. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
