import { Link } from 'react-router-dom';
import ImageSlide from '../components/ImageSlide';
import style from './Home.module.css';
import { motion } from 'framer-motion'; // framer-motion 추가

function Home() {
  return (
    <div className={style.Home}>
      {/* ImageSlide 부분에 애니메이션 추가 */}
      <motion.div
        className={style.imageSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ImageSlide />
      </motion.div>

      <div className={style.textContent}>
        {/* 이름 부분에 애니메이션 추가 */}
        <motion.div
          className={style.name}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          SEO YOUNGJIN
        </motion.div>

        {/* 내용 부분에 애니메이션 추가 */}
        <motion.p
          className={style.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          🚀 끝없는 도전과 성장을 추구하는 서영진입니다! <br />
          <span className={style.bold}>리액트</span>를 중심으로 한 프론트엔드
          개발에 열정을 가지고 있으며,{' '}
          <span className={style.bold}>SpringBoot</span>를 활용해 백엔드와의
          완벽한 통합을 이뤄냅니다. <br />
          <br />
          🎨 또한 <span className={style.bold}>Figma</span>를 활용한 디자인
          작업으로 사용자 중심의 UI/UX를 설계하며, 개발과 디자인의 경계를
          넘나드는 능력을 보유하고 있습니다.
          <br />
          <br />
          💡 "가능성은 도전하는 자의 것"이라는 신념으로 매 순간 성장하며,
          창의적인 아이디어를 코드와 디자인으로 실현하고자 합니다. <br />
        </motion.p>

        {/* CONTACT 부분에 애니메이션 추가 */}
        <motion.div
          className={style.display}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2>CONTACT</h2>
          <div className={`${style.line}`}></div>
        </motion.div>

        <div className={style.content}>
          • Email | epik35@naver.com
          <br />
          • Kakao | epik35@naver.com
          <br />
          • Phone | 010-7632-7186
          <br />• Github |
          <a
            href="https://github.com/youngjin34"
            className={style.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;https://github.com/youngjin34
          </a>{' '}
          <br />• Velog |
          <a
            href="https://velog.io/@epik34/posts"
            className={style.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;https://velog.io/@epik34/posts
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
