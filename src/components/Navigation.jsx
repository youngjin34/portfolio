import { Link } from "react-router-dom";
import style from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={style.Navigation}>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/project">PROJECT</Link>
    </div>
  );
}

export default Navigation;
