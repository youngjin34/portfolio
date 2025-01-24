import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.Home}>
      <div className={style.name}>SEO YOUNGJIN</div>
      <p className={style.content}>
        🚀 끝없는 도전과 성장을 추구하는 서영진입니다! <br />
        <span className={style.bold}>리액트</span>를 중심으로 한 프론트엔드
        개발에 열정을 가지고 있으며,{" "}
        <span className={style.bold}>SpringBoot</span>를 활용해 백엔드와의
        완벽한 통합을 이뤄냅니다. <br />
        <br />
        🎨 또한 <span className={style.bold}>Figma</span>를 활용한 디자인
        작업으로 사용자 중심의 UI/UX를 설계하며, 개발과 디자인의 경계를 넘나드는
        능력을 보유하고 있습니다.
        <br />
        <br />
        💡 "가능성은 도전하는 자의 것"이라는 신념으로 매 순간 성장하며, 창의적인
        아이디어를 코드와 디자인으로 실현하고자 합니다. <br />
      </p>
    </div>
  );
}

export default Home;
