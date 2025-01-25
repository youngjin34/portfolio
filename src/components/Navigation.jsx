import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

function Navigation() {
  return (
    <div className={style.Navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? `${style.active}` : '')}
      >
        HOME
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? `${style.active}` : '')}
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/project"
        className={({ isActive }) => (isActive ? `${style.active}` : '')}
      >
        PROJECT
      </NavLink>
    </div>
  );
}

export default Navigation;
