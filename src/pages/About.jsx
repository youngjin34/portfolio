import { Link } from "react-router-dom";
import style from "./About.module.css";

function About() {
  return (
    <div className={style.About}>
      <div className={`${style.padding} `}>
        <div className={`${style.display}`}>
          <h2>CONTACT</h2>
          <div className={`${style.line}`}></div>
        </div>
        <div className={style.content}>
          • Email | epik35@naver.com
          <br />
          • Kakao | epik35@naver.com
          <br />
          • Phone | 010-7632-7186
          <br />• Github |
          <Link to="https://github.com/youngjin34" className={style.github}>
            https://github.com/youngjin34
          </Link>
        </div>
      </div>

      <div className={`${style.padding} `}>
        <div className={`${style.display}`}>
          <h2>EDUCATION</h2>
          <div className={`${style.line}`}></div>
        </div>
        <div className={style.content}>
          • 가천대학교 컴퓨터공학과 <br />• 장애인 디지털 아카데미
        </div>
      </div>

      <div className={`${style.padding} `}>
        <div className={`${style.display}`}>
          <h2>STACK</h2>
          <div className={`${style.line}`}></div>
        </div>
        <h4>FRONT END</h4>
        <div className={style.content}>
          • Html5/Css3 <br />
          • JavaScript <br />
          • React <br />
        </div>
        <h4>BACK END</h4>
        <div className={style.content}>
          • SpringBoot <br />
          • MariaDB <br />
        </div>
      </div>

      <div className={`${style.padding} `}>
        <div className={`${style.display}`}>
          <h2>Collaboration & Tools</h2>
          <div className={`${style.line}`}></div>
        </div>
        <div className={style.content}>
          • Slack <br />
          • VS Code
          <br />
          • Git, Github
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
