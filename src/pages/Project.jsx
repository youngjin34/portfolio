import React, { useState } from 'react';
import style from './Project.module.css';

const projectData = [
  {
    name: 'KOKEETEA MAIN WEB',
    image: '/images/kokeetea_main.png',
    blogImages: [
      '/images/kokeetea_main.png',
      '/images/kokeetea_main_1.png',
      '/images/kokeetea_main_2.png',
      '/images/kokeetea_main_3.png',
      '/images/kokeetea_main_menu.png',
    ],
    description:
      'React를 이용해 구현된 KOKEETEA의 메인 웹사이트입니다. Axios를 사용해 서버와 데이터를 처리하고, AWT를 활용하여 다양한 기능을 제공합니다. RESTful API 기반으로 서버와의 연동을 통해 동적 웹사이트를 구축했습니다.',
    details: [
      'React로 구현된 KOKEETEA 메인 웹사이트',
      'Axios를 이용한 서버와의 데이터 통신',
      'AWT를 활용한 UI 구현 및 다양한 관리 기능',
      'RESTful API 기반 서버와 연동',
      '로그인 및 회원가입 기능 구현',
      '메뉴 주문 기능 제공',
      '관리자가 공지사항을 등록하고 관리할 수 있는 기능',
      '사용자가 문의사항을 등록할 수 있는 기능',
      '서버와의 연동을 통한 CRUD 기능 구현',
    ],
    techStack: ['React', 'Axios', 'AWT', 'RESTful API'],
  },
  {
    name: '멍멍케어',
    image: '/images/admin_web.jpg',
    video: '/video/admin_web.mp4',
    description:
      'React로 구현된 반려동물 관리 시스템의 관리자 페이지입니다. 서버는 Spring Boot와 CentOS를 이용해 RESTful API를 제공하며, AWT를 활용하여 다양한 관리 기능을 제공합니다.',
    details: [
      'React를 이용한 관리자 페이지 구현',
      'Spring Boot 기반 서버와의 통신 (RESTful API)',
      'CentOS 서버 환경 구축',
      'AWT를 활용한 UI 구현 및 데이터 처리',
      '관리 기능: 데이터 조회, 수정, 삭제, 통계 시각화',
      '펫 정보 관리 기능',
      '사용자 문의 답변 기능',
      '앱 다운로드 링크 제공',
    ],
    techStack: [
      'React',
      'Spring Boot',
      'CentOS',
      'AWT',
      'RESTful API',
      'Axios',
    ],
  },
  {
    name: '개인 블로그',
    image: '/images/blog.png',
    blogImages: [
      '/images/blog_1.png',
      '/images/blog_2.png',
      '/images/blog_3.png',
      '/images/blog_4.png',
    ],
    description:
      'React를 이용해 제작된 개인 블로그 프로젝트입니다. Firebase를 통해 서버리스 환경에서 데이터를 관리하며, Netlify를 이용한 배포를 완료했습니다.',
    details: [
      'React를 이용한 블로그 포스트 작성 및 렌더링',
      'Firebase Hosting 및 Firestore를 사용한 데이터 관리',
      'Netlify를 활용한 빠른 배포 및 CI/CD',
    ],
    techStack: ['React', 'Firebase', 'Netlify'], // 기술 스택 추가
  },
];

function Project() {
  const [selectedProject, setSelectedProject] = useState(null); // 선택된 프로젝트 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  // 모달 열기 함수
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className={style.Project}>
      {/* Header Section */}
      <div className={style.display}>
        <h2>PROJECT</h2>
        <div className={style.line}></div>
      </div>

      {/* Project Container */}
      <div className={style.project_container}>
        {projectData.map((project, index) => (
          <div className={style.project_list}>
            <figure
              key={index}
              className={style.project_card}
              onClick={() => openModal(project)} // 클릭 시 모달 열기
            >
              <img
                src={project.image}
                alt={project.name}
                className={style.project_img}
              />
            </figure>
            {project.name}
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className={style.modal_overlay} onClick={closeModal}>
          <div
            className={style.modal_content}
            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 방지
          >
            <h3>{selectedProject.name}</h3>
            <p className={style.description}>{selectedProject.description}</p>

            {/* 첫 번째 프로젝트 비디오 표시 */}
            {selectedProject.video && (
              <video controls className={style.project_video} autoPlay>
                <source src={selectedProject.video} type="video/mp4" />
              </video>
            )}

            {/* 두 번째 프로젝트 이미지 슬라이드 */}
            {selectedProject.blogImages && (
              <div className={style.image_gallery}>
                {selectedProject.blogImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Blog image ${idx + 1}`}
                    className={style.gallery_image}
                  />
                ))}
              </div>
            )}

            {/* 기술 스택 추가 */}
            {selectedProject.techStack && (
              <div className={style.tech_stack_container}>
                <h4>기술 스택</h4>
                <ul className={style.tech_stack_list}>
                  {selectedProject.techStack.map((tech, idx) => (
                    <li key={idx} className={style.tech_stack_item}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 프로젝트 상세 설명 */}
            {selectedProject.details && (
              <div className={style.details_container}>
                {selectedProject.details.map((detail, idx) => (
                  <div key={idx} className={style.detail_card}>
                    <span className={style.detail_icon}>✔</span>
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
            )}

            <button onClick={closeModal} className={style.close_button}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
