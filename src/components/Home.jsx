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
  FaDatabase,
  FaEnvelope
} from "react-icons/fa";

import { useTechSlider } from "../hooks/useTechSlider";
import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import LetterGlitch from "../blocks/Backgrounds/LetterGlitch/LetterGlitch";

export const Home = () => {
  return (
    <section
      id="home"
      className="py-20 md:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 p-10">
          <h1 className="text-3xl md:text-5xl font-bold ">
            <span className="block text-text-secondary mb-2">Hi, I'm</span>
            <span className="block">
              <SplitText text="Cristian Martinez" />
            </span>
          </h1>
          <p className="text-text-primary dark:text-text-light text-lg md:text-xl leading-relaxed">
            Developer Full Stack specialized in creating exceptional web
            experiences. Passionate about{" "}
            <ShinyText text="Clean Code" className="text-cyan-600" speed={4} />{" "}
            and innovation.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/cristian-martinez-40a203270"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-dark-accent text-white bg-dark-accent  rounded-lg transition-colors font-semibold"
            >
              Contact Me
            </a>
          </div>
          <div className="flex space-x-4 text-[#dfdfdf]">
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
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=cristianmartineztez@gmail.com&su=Portfolio Cristian&tf=cm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaEnvelope className="w-6 h-6 hover:scale-105 hover:shadow-xl transition-all duration-300" />
            </a>
          </div>
        </div>

        <div className="relative w-full p-8">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={true}
            smooth={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};
