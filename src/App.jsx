import { BrowserRouter, Route, Routes } from "react-router-dom";
import style from "./App.module.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import ImageSlide from "./components/ImageSlide";
import About from "./pages/About";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={`${style.App}`}>
        <ImageSlide />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
