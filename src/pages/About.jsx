import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import style from './About.module.css';

function SkillGauge({ percentage, text }) {
  return (
    <motion.div
      className={style.gauge}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor:
            percentage > 70
              ? '#4caf50'
              : percentage > 40
              ? '#ff9800'
              : '#f44336',
          textColor: '#000',
          trailColor: '#eee',
          backgroundColor: '#fff',
        })}
      />
      <p>{text}</p>
    </motion.div>
  );
}

function About() {
  return (
    <div className={style.About}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ABOUT
      </motion.h1>
      <motion.div
        className={`${style.padding}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className={`${style.display}`}>
          <h2>EDUCATION</h2>
          <div className={`${style.line}`}></div>
        </div>
        <div className={style.content}>
          • 가천대학교 컴퓨터공학과 <br />• 장애인 디지털 아카데미(Full-Stack
          과정)
        </div>
      </motion.div>

      <motion.div
        className={`${style.padding}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className={`${style.display}`}>
          <h2>STACK</h2>
          <div className={`${style.line}`}></div>
        </div>

        <div className={style.stack_container}>
          <div>
            <h4>FRONT END</h4>
            <div className={style.skillContainer}>
              {[
                { name: 'HTML5/CSS3', percentage: 80 },
                { name: 'JavaScript', percentage: 60 },
                { name: 'React', percentage: 50 },
              ].map((skill, index) => (
                <SkillGauge
                  key={index}
                  percentage={skill.percentage}
                  text={skill.name}
                />
              ))}
            </div>
          </div>

          <div>
            <h4>BACK END</h4>
            <div className={style.skillContainer}>
              {[
                { name: 'SpringBoot', percentage: 30 },
                { name: 'MariaDB', percentage: 50 },
              ].map((skill, index) => (
                <SkillGauge
                  key={index}
                  percentage={skill.percentage}
                  text={skill.name}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={`${style.padding}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className={`${style.display}`}>
          <h2>Collaboration & Tools</h2>
          <div className={`${style.line}`}></div>
        </div>
        <div className={style.content}>
          • Slack <br />
          • VS Code, IntelliJ <br />
          • Git, Github <br />• Figma
        </div>
      </motion.div>
    </div>
  );
}

export default About;
