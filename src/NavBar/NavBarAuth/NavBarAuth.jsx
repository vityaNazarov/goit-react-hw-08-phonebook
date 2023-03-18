import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

import { BsArrowLeft } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import css from './navbar-auth.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const NavBarAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const goBack = () => navigate(from);

  return (
    <div className={css.menu}>
      <div className={css.buttonBack}>
        <button className={css.btnBack} onClick={goBack} type="submit">
          <IconContext.Provider
            value={{
              color: 'black',
              size: 14,
            }}
          >
            <BsArrowLeft className={css.btnArrow} />
          </IconContext.Provider>
        </button>
      </div>
      <div>
        <NavLink className={getClassName} to="/register" state={{ from }}>
          Register
        </NavLink>
        <NavLink className={getClassName} to="/login" state={{ from }}>
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default NavBarAuth;
