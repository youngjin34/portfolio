import React, { useState } from "react";
import style from "./Project.module.css";

const projectData = [
  {
    name: "멍멍케어",
    image: "/images/admin_web.jpg",
    video: "/video/admin_web.mp4", // 'vido'에서 'video'로 수정
    description: "멍멍케어는 반려동물을 위한 건강 관리 웹 애플리케이션입니다.",
  },
  {
    name: "개인 블로그",
    image: "/images/blog.png",
    blogImages: [
      "/images/blog_1.png",
      "/images/blog_2.png",
      "/images/blog_3.png",
      "/images/blog_4.png",
    ],
    description: "React와 Markdown을 이용해 만든 개인 블로그 프로젝트입니다.",
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
            <p>{selectedProject.description}</p>

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
