import { motion } from 'framer-motion';
import style from './Introduce.module.css';

function Introduce() {
  return (
    <div className={style.Introduce}>
      <motion.h1
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        INTRODUCE
      </motion.h1>

      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        안녕하세요! <br /> 저는 웹 개발에 대한 열정을 가지고 끊임없이 성장하고
        있는 프론트엔드 개발자 <strong>서영진</strong>입니다.
      </motion.h2>

      <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        "공부를 즐기는 개발자"라는 모토 아래, 저는 항상 새로운 기술을 배우고, 더
        나은 개발자가 되기 위해 노력하고 있습니다. 웹 개발에 대한 흥미는 어렸을
        때부터 시작되었고, 그 관심은 시간이 지날수록 깊어져 지금의 제 직업을
        선택하게 되었습니다.
      </motion.p>

      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        저는 <strong>React</strong>, <strong>JavaScript</strong>,{' '}
        <strong>HTML</strong>, <strong>CSS</strong>를 주로 사용하여 웹
        애플리케이션을 개발하고 있습니다. 그동안 다양한 프로젝트에 참여하며,
        사용자 경험(UX)과 인터페이스(UI)의 중요성을 깨달았고, 이를 바탕으로
        기능성뿐만 아니라 사용자의 만족도까지 고려한 개발을 목표로 하고
        있습니다.
      </motion.p>

      <motion.h3
        initial={{ rotate: -20, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        📚 배운 것과 더 배우고 싶은 것
      </motion.h3>

      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        저는 개발에 있어서 중요한 것은
        <strong>"끊임없이 배우고 도전하는 것"</strong>
        이라고 생각합니다. 새로운 라이브러리나 프레임워크를 학습하고, 다양한
        문제를 해결하면서 성장하는 과정을 즐깁니다. 앞으로도{' '}
        <strong>TypeScript</strong>, <strong>NextJS</strong>,
        <strong> 웹 성능 최적화</strong>, <strong>CI/CD</strong>와 같은 분야에
        대해 더 깊이 공부할 계획입니다.
      </motion.p>

      <motion.h3
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        💬 나의 목표
      </motion.h3>

      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        저는 팀워크와 소통을 중요하게 생각하며, 항상 다른 개발자들과 협력하며
        서로 배우고 성장하는 환경을 선호합니다. 개발자로서 끊임없이 성장하고 더
        나은 서비스를 만들기 위해 도전을 두려워하지 않으며, 항상 새로운 기술을
        탐구하고 이를 실제 프로젝트에 적용하여 세상에 가치를 더하는 일을 하고
        싶습니다.
      </motion.p>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        🌱 자신에게 주는 한 마디
      </motion.h3>

      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        “배우는 것이 즐거운 삶을 만든다.” 저는 공부를 단순히 필수적인 과제가
        아니라, 즐기면서 할 수 있는 기회로 여깁니다. 매일 새로운 것을 배우고 그
        과정을 통해 더 나은 개발자가 되어가는 것이 저에게는 가장 큰 기쁨입니다.
      </motion.p>
    </div>
  );
}

export default Introduce;
