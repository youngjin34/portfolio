import { useState } from "react";
import style from "./About.module.css";

function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className={style.About}>
      <div className={`${style.padding}`}>
        <div className={`${style.display}`}>
          <h2>EDUCATION</h2>
          <div className={`${style.line}`}></div>
        </div>
        <div className={style.content}>
          • 가천대학교 컴퓨터공학과 <br />• 장애인 디지털 아카데미(Full-Stack
          과정)
        </div>
      </div>

      <div className={`${style.padding}`}>
        <div className={`${style.display}`}>
          <h2>STACK</h2>
          <div className={`${style.line}`}></div>
        </div>

        <h4>FRONT END</h4>
        <div className={style.skillContainer}>
          {[
            { name: "HTML5/CSS3", width: "90%" },
            { name: "JavaScript", width: "65%" },
            { name: "React", width: "50%" },
          ].map((skill, index) => (
            <div key={index} className={style.skill}>
              <span>{skill.name}</span>
              <div className={style.bar}>
                <div
                  className={style.fill}
                  style={{ width: skill.width }}
                  onMouseEnter={() => setHoveredSkill(skill.width)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {hoveredSkill === skill.width && (
                    <div className={style.tooltip}>{skill.width}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h4>BACK END</h4>
        <div className={style.skillContainer}>
          {[
            { name: "SpringBoot", width: "30%" },
            { name: "MariaDB", width: "50%" },
          ].map((skill, index) => (
            <div key={index} className={style.skill}>
              <span>{skill.name}</span>
              <div className={style.bar}>
                <div
                  className={style.fill}
                  style={{ width: skill.width }}
                  onMouseEnter={() => setHoveredSkill(skill.width)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {hoveredSkill === skill.width && (
                    <div className={style.tooltip}>{skill.width}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${style.padding}`}>
        <div className={`${style.display}`}>
          <h2>Collaboration & Tools</h2>
          <div className={`${style.line}`}></div>
        </div>
        <div className={style.content}>
          • Slack <br />
          • VS Code, IntelliJ <br />
          • Git, Github <br />
        </div>
      </div>
    </div>
  );
}

export default About;
