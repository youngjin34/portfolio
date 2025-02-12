import React, { useEffect, useState } from 'react';
import style from './Project.module.css';
import { motion } from 'framer-motion';

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
    planning:
      'React로 동적이고 인터랙티브한 웹사이트를 구현하여 KOKEETEA의 주요 서비스를 온라인에서 제공하기 위함.',
    developmentPeriod: '2025년 01월 - 2025년 02월',
    details: [
      {
        title: 'Axios를 이용한 서버와의 데이터 통신',
        troubleshooting:
          'API 호출 시 간헐적으로 발생하는 404 오류를 디버깅하는 데 어려움이 있었습니다. 네트워크 요청을 확인하고, API 엔드포인트를 다시 설정하여 문제를 해결했습니다.',
        subDetails:
          'API 호출 시 발생하는 오류를 해결하기 위해 엔드포인트를 재구성하고, 요청을 안정화시켰습니다.',
      },
      {
        title: '장바구니 실시간 업데이트 문제 해결',
        troubleshooting:
          '장바구니에 담은 항목이 헤더에서 실시간으로 반영되지 않는 문제를 해결했습니다. Context API를 활용하여 전역 상태를 관리하도록 수정했습니다.',
        subDetails:
          'Context API를 사용하여 장바구니의 상태를 전역으로 관리하고, 장바구니 수량이 실시간으로 업데이트되도록 했습니다.',
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
        title: '메뉴 주문 및 장바구니 기능 구현',
        subDetails:
          '사용자가 원하는 메뉴를 장바구니에 담고 주문을 확정하면 서버로 주문 정보를 전송하는 기능을 추가했습니다.',
      },
      {
        title: '커피 메뉴 옵션 선택 및 서버 전송 오류 해결',
        troubleshooting:
          '커피 메뉴에 여러 옵션이 있을 때, 한 번에 서버로 전달할 때 오류가 발생했습니다. 이 문제를 해결하기 위해 각 옵션을 배열로 처리하고, 각 옵션의 선택된 값을 객체 형태로 묶어서 서버로 전송했습니다. 서버에서 이를 처리할 수 있도록 데이터 구조를 맞추었고, 옵션 선택 시 전송하는 데이터를 적절히 포맷팅하여 오류를 해결했습니다.',
        subDetails: '',
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
    planning:
      '반려동물 관리 시스템의 효율적인 관리 페이지를 제공하여 사용자와 관리자가 편리하게 시스템을 운영할 수 있도록 하기 위함.',
    developmentPeriod: '2023년 10월 - 2023년 12월',
    details: [
      {
        title: 'Spring Boot 기반 서버와의 통신 (RESTful API)',
        troubleshooting:
          '데이터 전송 속도가 느려졌던 원인을 추적한 결과, 불필요한 데이터 호출이 원인이었으며, 이를 최소화하여 최적화했습니다.',
        subDetails:
          '불필요한 데이터 호출을 최소화하여 데이터 전송 속도를 개선했습니다.',
      },
      {
        title: 'CentOS 서버 환경 구축',
        troubleshooting:
          'Nginx 설정 오류를 수정하여 CentOS 환경에서 안정적인 배포를 진행했습니다.',
        subDetails: 'Nginx 설정을 수정하여 안정적인 서버 배포를 진행했습니다.',
      },
      {
        title: '관리 기능: 데이터 조회, 수정, 삭제, 통계 시각화',
        troubleshooting:
          '차트를 로딩할 때 데이터가 비동기적으로 처리되므로 초기 로딩 시 차트가 비어있는 문제가 발생했습니다. 이를 해결하기 위해 차트를 렌더링하기 전에 데이터가 모두 로딩될 때까지 기다리도록 개선했습니다. 또한, 다양한 브라우저에서 차트가 깨지거나 비정상적으로 표시되는 문제를 해결하기 위해, `Highcharts`의 최신 버전을 적용하고 호환성 문제를 해결했습니다.',
        subDetails:
          'Highcharts를 사용하여 다양한 그래프를 활용한 통계 시각화 기능을 구현했습니다. 데이터 시각화에서 발생할 수 있는 문제들을 해결하고, 관리자 페이지에서 실시간 데이터를 기반으로 다양한 차트를 표시할 수 있습니다.',
      },
      {
        title: '펫 정보 관리 기능',
        subDetails:
          '사용자 피드백을 반영하여 UI를 간소화하고 버튼 배치를 조정했습니다.',
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
    planning:
      '개인적인 글쓰기와 콘텐츠 공유를 위해 간편하고 직관적인 블로그 시스템을 구현하고자 함.',
    developmentPeriod: '2024년 04월 - 2024년 04월',
    details: [
      {
        title: 'React에서 동적 포스트 작성 시 데이터 상태 동기화',
        troubleshooting:
          'useEffect를 활용해 상태 업데이트가 올바르게 반영되도록 수정하여 문제를 해결했습니다.',
        subDetails:
          'useEffect를 사용하여 동적 데이터를 안정적으로 관리하고, 상태 업데이트를 개선했습니다.',
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
    planning:
      '영화에 대한 정보와 피드백을 공유하는 공간을 제공하여 사용자들이 영화에 대해 의견을 나눌 수 있도록 하기 위함.',
    developmentPeriod: '2024년 09월 - 2024년 10월',
    details: [
      {
        title: '로그인 및 회원가입 기능',
        troubleshooting:
          'PHP 세션과 데이터베이스를 이용한 사용자 인증 및 관리 기능을 구현하면서, 세션 관리와 보안에 문제가 있었지만 이를 해결하기 위해 세션 타임아웃 관리 및 암호화 방식을 강화했습니다.',
        subDetails:
          'PHP 세션과 데이터베이스를 사용하여 안전한 사용자 인증 시스템을 구현했습니다.',
      },
      {
        title: '영화 좋아요 기능 및 My Page 구현',
        subDetails:
          '영화를 좋아요 버튼을 클릭하여 My Page에서 확인할 수 있도록 했습니다.',
      },
      {
        title: '영화 리뷰 및 댓글 작성 기능',
        subDetails:
          '영화 상세 페이지에서 리뷰와 댓글을 작성하고 관리할 수 있도록 했습니다.',
      },
      {
        title: '영화 상세 페이지 구현',
        subDetails:
          '영화의 제목, 개요, 평점 등 정보를 상세히 보여주는 페이지를 구현했습니다.',
      },
    ],
    techStack: ['jQuery', 'PHP', 'Apache', 'MySQL'],
    deploymentUrl: 'http://www.guro-movie.com',
    githubUrl: 'https://github.com/youngjin34/movie_project',
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
    document.body.style.overflow = 'hidden'; // 모달이 열리면 스크롤 막기
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // 모달이 닫히면 스크롤 복원
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc); // 클릭한 이미지 URL을 상태에 저장
  };

  const closeImageModal = () => {
    setSelectedImage(null); // 이미지를 닫는 함수
  };

  // 컴포넌트가 언마운트 될 때 스크롤을 다시 활성화
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'; // 언마운트 시 스크롤 복원
    };
  }, []);

  return (
    <div className={style.Project}>
      {/* Header Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        PROJECT
      </motion.h1>

      <div className={style.project_container}>
        {projectData.map((project, index) => (
          <div className={style.project_card_wrapper} key={index}>
            <motion.figure
              className={style.project_card}
              onClick={() => openModal(project)} // 클릭 시 모달 열기
              whileHover={{ scale: 1.05 }} // 호버 시 크기 확대
              transition={{ duration: 0.2 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className={style.project_img}
              />
            </motion.figure>

            {/* 기획의도 및 개발기간 추가 */}
            <div className={style.project_details}>
              <div className={style.project_name}>{project.name}</div>
              <p className={style.project_description}>{project.planning}</p>
              <p className={style.project_duration}>
                {project.developmentPeriod}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <motion.div
          className={style.modal_overlay}
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={style.modal_content}
            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 방지
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className={style.modal_container}>
              {/* 왼쪽 영역: 이미지 또는 비디오 */}
              <div className={style.modal_left}>
                {/* 프로젝트 비디오 표시 */}
                {selectedProject.video &&
                  Array.isArray(selectedProject.video) && (
                    <div className={style.video_gallery}>
                      {selectedProject.video.map((videoSrc, idx) => (
                        <motion.video
                          key={idx}
                          controls
                          className={style.project_video}
                          autoPlay
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <source src={videoSrc} type="video/mp4" />
                          Your browser does not support the video tag.
                        </motion.video>
                      ))}
                    </div>
                  )}

                {/* 두 번째 프로젝트 이미지 슬라이드 */}
                {selectedProject.blogImages && (
                  <div className={style.image_gallery}>
                    {selectedProject.blogImages.map((img, idx) => (
                      <motion.img
                        key={idx}
                        src={img}
                        alt={`Blog image ${idx + 1}`}
                        className={style.gallery_image}
                        onClick={() => handleImageClick(img)}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                    ))}
                  </div>
                )}

                {/* 클릭된 이미지를 크게 표시 */}
                {selectedImage && (
                  <motion.div
                    className={style.image_modal}
                    onClick={closeImageModal}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={selectedImage}
                      alt="Enlarged"
                      className={style.enlarged_image}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className={style.close_image_button}
                    >
                      닫기
                    </button>
                  </motion.div>
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
                <h4>내가 맡은 역할 & 구현한 기능</h4>
                {selectedProject.details && (
                  <div className={style.details_container}>
                    {selectedProject.details.map((detail, idx) => (
                      <div key={idx} className={style.detail_card}>
                        <div>
                          <p className={style.detail_title}>
                            <span className={style.detail_icon}>✔ </span>
                            {detail.title}
                          </p>

                          {detail.troubleshooting && (
                            <p className={style.troubleshooting}>
                              <strong>Troubleshooting:</strong>{' '}
                              {detail.troubleshooting}
                            </p>
                          )}

                          {detail.role && (
                            <p className={style.role}>
                              <strong>My Role:</strong> {detail.role}
                            </p>
                          )}

                          {detail.subDetails && (
                            <p className={style.sub_details}>
                              <strong>Details:</strong> {detail.subDetails}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <motion.button
                  onClick={closeModal}
                  className={style.close_button}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  닫기
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Project;
