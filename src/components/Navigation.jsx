import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'intersection-observer'; // IntersectionObserver 폴리필

import style from './Navigation.module.css';

function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 여부 상태 추가

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      let scrollToPosition = section.offsetTop - 15; // 기본적으로 15px만큼 위로 올림

      // 'home' 섹션일 경우 위치를 더 밑으로 내려줌
      if (sectionId === 'home') {
        scrollToPosition = section.offsetTop - 140; // home만 100px 내려가게
      }

      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 화면에 보일 때 activeSection 업데이트
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 섹션이 50% 이상 보일 때 활성화
      }
    );

    sections.forEach((section) => observer.observe(section)); // 각 섹션을 관찰

    // 스크롤 핸들러
    const handleScroll = () => {
      if (isScrolling) return; // 스크롤 중이면 함수 종료 (throttle)
      setIsScrolling(true); // 스크롤 시작

      let closestSection = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(
          rect.top + rect.height / 2 - window.innerHeight / 2
        ); // 화면 중앙과 섹션 중앙의 거리

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section; // 가장 가까운 섹션 찾기
        }
      });

      if (closestSection) {
        setActiveSection(closestSection.id); // 가장 가까운 섹션을 활성화
      }

      setTimeout(() => setIsScrolling(false), 100); // 100ms 후 스크롤 끝났다고 설정 (throttle)
    };

    window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너 추가

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // 컴포넌트 언마운트 시 관찰 해제
      window.removeEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너 제거
    };
  }, [isScrolling]); // isScrolling 상태를 의존성 배열에 추가하여 스크롤 이벤트 최적화

  return (
    <div className={style.Navigation}>
      <NavLink
        to="#home"
        onClick={() => scrollToSection('home')}
        className={activeSection === 'home' ? style.active : ''}
      >
        HOME
      </NavLink>
      <NavLink
        to="#introduce"
        onClick={() => scrollToSection('introduce')}
        className={activeSection === 'introduce' ? style.active : ''}
      >
        INTRODUCE
      </NavLink>
      <NavLink
        to="#about"
        onClick={() => scrollToSection('about')}
        className={activeSection === 'about' ? style.active : ''}
      >
        ABOUT
      </NavLink>
      <NavLink
        to="#project"
        onClick={() => scrollToSection('project')}
        className={activeSection === 'project' ? style.active : ''}
      >
        PROJECT
      </NavLink>
    </div>
  );
}

export default Navigation;
