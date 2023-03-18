import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavBarAuth from './NavBarAuth/NavBarAuth';
import NavBarUserMenu from './NavBarUserMenu/NavBarUserMenu';

import { isUserLogin } from 'redux/auth/auth-selectors';

import css from './nav-bar.module.scss';

const getClassName = ({ isActive }) => {
	const className = isActive ? `${css.link} ${css.active}` : css.link;
	return className;
};

const NavBar = () => {
	const isLogin = useSelector(isUserLogin);

	return (
		<>
			{!isLogin && <NavBarAuth /> ? (
				<ul className={css.menuNavBarAuth}>
					<li>
						<NavBarAuth />
					</li>
				</ul>
			) : (
				<ul className={css.menu}>
					<li className={css.liContacts}>
						<NavLink className={getClassName} to="/important-contacts">
							Important Contacts
						</NavLink>
					</li>
					<li className={css.liPhonebook}>
						<NavLink className={getClassName} to="/contacts">
							Phonebook
						</NavLink>
					</li>
					<li>
						<NavBarUserMenu />
					</li>
				</ul>
			)}
		</>
	);
};

export default NavBar;
