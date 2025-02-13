import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./App.module.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Introduce from "./pages/Introduce";

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <Header />
      <div className={style.App}>
        <div id="home" className={style.section}>
          <Home />
        </div>
        <div id="introduce" className={style.section}>
          <Introduce />
        </div>
        <div id="about" className={style.section}>
          <About />
        </div>
        <div id="project" className={style.section}>
          <Project />
        </div>
      </div>

      {/* 최상단으로 가는 버튼 */}
      <button
        className={`${style.scrollToTopButton} ${
          showScrollToTop ? style.show : ""
        }`}
        onClick={scrollToTop}
      >
        ↑ Top
      </button>
    </Router>
  );
}

export default App;
