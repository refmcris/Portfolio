import { useState, useEffect } from "react";
import "./index.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import WhatIDo from "./components/WhatIDo";
import Squares from "./blocks/Backgrounds/Squares/Squares";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen relative`}>
      <Squares />
      <div className="relative z-10">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Home />
            <WhatIDo />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
