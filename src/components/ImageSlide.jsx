import { useState } from "react";
import style from "./ImageSlide.module.css";

const slidesData = [
  {
    title: "HTML/CSS",
    image: "/images/html-css.png",
  },
  {
    title: "JavaScript",
    image: "/images/javascript.png",
  },
  {
    title: "React",
    image: "/images/react.png",
  },
  {
    title: "SpringBoot",
    image: "/images/springboot.png",
  },
];

function ImageSlide() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={`${style.container}`}>
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`${style.slide} ${
            index === activeIndex ? `${style.active}` : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
          onClick={() => handleSlideClick(index)}
        >
          <h3>{slide.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default ImageSlide;
