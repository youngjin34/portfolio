import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "intersection-observer";
import style from "./Navigation.module.css";

function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("[id]"); // ID를 가진 모든 섹션을 선택

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, // 뷰포트를 기준으로 감지
        threshold: 0.6, // 60% 이상 보일 때 활성화
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      let scrollToPosition = section.offsetTop - 15;

      if (sectionId === "home") {
        scrollToPosition = section.offsetTop - 140;
      }

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
    }
  };

  return (
    <div className={style.Navigation}>
      <NavLink
        to="#home"
        onClick={() => scrollToSection("home")}
        className={activeSection === "home" ? style.active : ""}
      >
        HOME
      </NavLink>
      <NavLink
        to="#introduce"
        onClick={() => scrollToSection("introduce")}
        className={activeSection === "introduce" ? style.active : ""}
      >
        INTRODUCE
      </NavLink>
      <NavLink
        to="#about"
        onClick={() => scrollToSection("about")}
        className={activeSection === "about" ? style.active : ""}
      >
        ABOUT
      </NavLink>
      <NavLink
        to="#project"
        onClick={() => scrollToSection("project")}
        className={activeSection === "project" ? style.active : ""}
      >
        PROJECT
      </NavLink>
    </div>
  );
}

export default Navigation;
