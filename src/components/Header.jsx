import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className={style.Header}>
      <div className={style.navigation}>
        <Link to="/" className={style.title}>
          SEO YOUNGJIN's PORTFOLIO
        </Link>
        <Navigation />
      </div>
      <hr className={style.hr_1} />
    </div>
  );
}

export default Header;
