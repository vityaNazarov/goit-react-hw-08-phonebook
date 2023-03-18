import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'redux/auth/auth-selectors';

import { logout } from 'redux/auth/auth-operations';

import css from './navbar-user.module.css';

// import css from './navbar-user.module.scss'

const NavBarUserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {email}{' '}
      <button className={css.btnLogout} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default NavBarUserMenu;
