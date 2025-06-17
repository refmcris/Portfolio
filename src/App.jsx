import { useState, useEffect } from "react";
import "./index.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

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
    <div className={`min-h-screen ${darkMode ? "bg-dark" : "bg-light"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Home />
          <Experience />
          {/* <Projects /> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
