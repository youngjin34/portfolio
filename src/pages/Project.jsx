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
      {
        title: 'React로 구현된 KOKEETEA 메인 웹사이트',
        subDetails:
          'React를 사용하여 인터랙티브한 웹 애플리케이션을 개발했습니다.',
      },
      {
        title: 'Axios를 이용한 서버와의 데이터 통신',
        subDetails:
          'API 호출 시 간헐적으로 발생하는 404 오류를 디버깅하는 데 어려움이 있었지만, 네트워크 요청을 캡처하고 API 엔드포인트를 다시 설정하여 문제를 해결했습니다',
      },
      {
        title: 'AWT를 활용한 UI 구현 및 다양한 관리 기능',
        subDetails:
          'AWT를 사용해 관리 기능과 사용자 친화적인 UI를 구현했습니다.',
      },
      {
        title: 'RESTful API 기반 서버와 연동',
        subDetails: 'API 호출을 통해 서버와 동적 연동을 구축했습니다.',
      },
      {
        title: '로그인 및 회원가입 기능 구현',
        subDetails: 'JWT를 활용하여 보안성을 높인 인증 기능을 구현했습니다.',
      },
      {
        title: '메뉴 주문 기능 제공',
        subDetails: '사용자가 메뉴를 주문할 수 있는 기능을 추가했습니다.',
      },
      {
        title: '관리자가 공지사항을 등록하고 관리할 수 있는 기능',
        subDetails: '관리자는 공지사항을 생성, 수정, 삭제할 수 있습니다.',
      },
      {
        title: '사용자가 문의사항을 등록할 수 있는 기능',
        subDetails:
          '사용자가 문의를 등록하면 관리자가 이를 확인할 수 있습니다.',
      },
      {
        title: '서버와의 연동을 통한 CRUD 기능 구현',
        subDetails:
          '데이터 생성, 읽기, 업데이트, 삭제를 지원하는 CRUD API를 구현했습니다.',
      },
    ],
    techStack: ['React', 'Axios', 'AWT', 'RESTful API'],
    githubUrl: 'https://github.com/youngjin34/kokeetea-main',
  },
  {
    name: '멍멍케어',
    image: '/images/admin_web.jpg',
    video: ['/video/admin_web.mp4', '/video/admin_app.mp4'],
    description:
      'React로 구현된 반려동물 관리 시스템의 관리자 페이지입니다. 서버는 Spring Boot와 CentOS를 이용해 RESTful API를 제공하며, AWT를 활용하여 다양한 관리 기능을 제공합니다.',
    details: [
      {
        title: 'React를 이용한 관리자 페이지 구현',
        subDetails:
          'Material-UI 라이브러리를 사용하여 직관적이고 간단한 UI를 설계했습니다.',
      },
      {
        title: 'Spring Boot 기반 서버와의 통신 (RESTful API)',
        subDetails:
          '데이터 전송 속도가 느려졌던 원인을 추적한 결과, 불필요한 데이터 호출이 원인이었으며, 이를 최소화하여 최적화헀다.',
      },
      {
        title: 'CentOS 서버 환경 구축',
        subDetails:
          'Nginx 설정 오류를 수정하여 CentOS 환경에서 안정적인 배포를 진행했습니다.',
      },
      {
        title: 'AWT를 활용한 UI 구현 및 데이터 처리',
        subDetails:
          'React의 가상 DOM을 활용해 대량의 데이터 렌더링 성능을 최적화했습니다.',
      },
      {
        title: '관리 기능: 데이터 조회, 수정, 삭제, 통계 시각화',
        subDetails:
          'Chart.js를 사용하여 다양한 그래프를 활용한 통계 시각화 기능을 구현했습니다.',
      },
      {
        title: '펫 정보 관리 기능',
        subDetails:
          '사용자 피드백을 반영하여 UI를 간소화하고 버튼 배치를 조정했습니다.',
      },
      {
        title: '사용자 문의 답변 기능',
        subDetails:
          'WebSocket 최적화를 통해 실시간 문의 답변 기능을 안정적으로 제공했습니다.',
      },
      {
        title: '앱 다운로드 링크 제공',
        subDetails:
          '링크 검증 로직을 추가하여 잘못된 다운로드 링크 문제를 해결했습니다.',
      },
    ],
    techStack: [
      'React',
      'Spring Boot',
      'CentOS',
      'AWT',
      'RESTful API',
      'Axios',
    ],
    githubUrl: 'https://github.com/dogcareproject/FrontEnd',
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
      {
        title: 'React를 이용한 블로그 포스트 작성 및 렌더링',
        subDetails:
          '동적 포스트 작성 중 데이터 상태 동기화 문제를 겪었으나, useEffect를 활용해 안정적으로 해결했습니다.',
      },
      {
        title: 'Firebase Hosting 및 Firestore를 사용한 데이터 관리',
        subDetails:
          'Firestore를 사용해 서버리스 환경에서 데이터를 관리하며 Firebase Hosting으로 배포를 완료했습니다.',
      },
      {
        title: 'Netlify를 활용한 빠른 배포 및 CI/CD',
        subDetails:
          'Netlify를 통해 CI/CD 파이프라인을 구축하고 빠른 배포를 가능하게 했습니다.',
      },
    ],
    techStack: ['React', 'Firebase', 'Netlify'],
    deploymentUrl: 'https://idensblog.netlify.app/',
    githubUrl: 'https://github.com/youngjin34/blog',
  },
  {
    name: '영화 소개 페이지',
    image: '/images/guro_movie_1.png',
    blogImages: [
      '/images/guro_movie_1.png',
      '/images/guro_movie_2.png',
      '/images/guro_movie_3.png',
      '/images/guro_movie_4.png',
    ],
    description:
      'jQuery와 PHP를 사용하여 Ubuntu에 Apache 웹 서버를 구축하고 구현한 영화 소개 페이지입니다. 사용자 로그인, 회원가입 기능이 제공되며, 영화 리스트를 조회하고 각 영화의 상세 정보를 볼 수 있습니다. 좋아요와 댓글 기능을 통해 영화에 대한 피드백을 남길 수 있습니다. 마이페이지에서는 내가 좋아요를 누른 영화들을 확인할 수 있습니다.',
    details: [
      {
        title: 'jQuery와 PHP를 이용하여 영화 소개 페이지 구현',
        subDetails: 'jQuery와 PHP를 사용하여 동적 웹 페이지를 개발했습니다.',
      },
      {
        title: 'Ubuntu 서버 환경에서 Apache 웹 서버 구축',
        subDetails:
          'Ubuntu와 Apache를 활용하여 서버 환경을 안정적으로 구성했습니다.',
      },
      {
        title: '로그인 및 회원가입 기능 제공',
        subDetails:
          'PHP 세션과 데이터베이스를 이용한 사용자 인증 및 관리 기능을 추가했습니다.',
      },
      {
        title: '영화 리스트와 상세보기 기능 제공',
        subDetails:
          '영화 데이터를 조회하고 상세 페이지를 볼 수 있는 기능을 구현했습니다.',
      },
      {
        title: '영화에 대한 좋아요 및 댓글 기능 구현',
        subDetails:
          '사용자가 좋아요를 누르거나 댓글을 작성할 수 있는 기능을 추가했습니다.',
      },
      {
        title: '마이페이지에서 내가 좋아요를 누른 영화 목록 확인 가능',
        subDetails:
          '마이페이지에서 사용자가 좋아요를 누른 영화 목록을 확인할 수 있도록 구현했습니다.',
      },
    ],
    techStack: ['jQuery', 'PHP', 'Apache', 'MySQL'],
    deploymentUrl: 'http://210.117.212.88/',
    githubUrl: 'https://github.com/youngjin34/jquery-php-movie',
  },
];

function Project() {
  const [selectedProject, setSelectedProject] = useState(null); // 선택된 프로젝트 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [selectedImage, setSelectedImage] = useState(null); // 클릭한 이미지를 저장

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

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc); // 클릭한 이미지 URL을 상태에 저장
  };

  const closeImageModal = () => {
    setSelectedImage(null); // 이미지를 닫는 함수
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
            <div className={style.modal_container}>
              {/* 왼쪽 영역: 이미지 또는 비디오 */}
              <div className={style.modal_left}>
                {/* 프로젝트 비디오 표시 */}
                {selectedProject.video &&
                  Array.isArray(selectedProject.video) && (
                    <div className={style.video_gallery}>
                      {selectedProject.video.map((videoSrc, idx) => (
                        <video
                          key={idx}
                          controls
                          className={style.project_video}
                          autoPlay
                        >
                          <source src={videoSrc} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ))}
                    </div>
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
                        onClick={() => handleImageClick(img)}
                      />
                    ))}
                  </div>
                )}

                {/* 클릭된 이미지를 크게 표시 */}
                {selectedImage && (
                  <div className={style.image_modal} onClick={closeImageModal}>
                    <img
                      src={selectedImage}
                      alt="Enlarged"
                      className={style.enlarged_image}
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className={style.close_image_button}
                    >
                      닫기
                    </button>
                  </div>
                )}
              </div>

              {/* 오른쪽 영역: 설명 */}
              <div className={style.modal_right}>
                <h3>{selectedProject.name}</h3>
                <p>{selectedProject.description}</p>

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

                <div className={style.link_btn}>
                  {selectedProject.deploymentUrl && (
                    <div className={style.link_container}>
                      <a
                        href={selectedProject.deploymentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.link}
                      >
                        배포된 웹사이트 보기
                      </a>
                    </div>
                  )}

                  {selectedProject.githubUrl && (
                    <div className={style.link_container}>
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.link}
                      >
                        GitHub 코드 보기
                      </a>
                    </div>
                  )}
                </div>

                {/* 프로젝트 상세 설명 */}
                {selectedProject.details && (
                  <div className={style.details_container}>
                    {selectedProject.details.map((detail, idx) => (
                      <div key={idx} className={style.detail_card}>
                        <div>
                          <p className={style.detail_title}>
                            <span className={style.detail_icon}>✔ </span>
                            {detail.title}
                          </p>
                          {detail.subDetails && (
                            <p className={style.sub_details}>
                              {detail.subDetails}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <button onClick={closeModal} className={style.close_button}>
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
