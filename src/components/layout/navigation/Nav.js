import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import s from './Nav.module.css';
import logo from './logo-45.png';
import useScroll from '../../hooks/useScroll';
import { MENU, ROUTES } from '../../../constants/paths';

const Nav = () => {
    const scrollY = useScroll();
    let location = useLocation();

    return (
        <nav className={s.nav}>
            {MENU.map(({ PATH, NAME }) => {
                if (PATH === ROUTES.HOME)
                    return (
                        <Link key={PATH} to={PATH} className={s.homeLink}>
                            <h1
                                className={
                                    scrollY === 0
                                        ? `${s.stickyTitle} ${s.title}`
                                        : `${s.title}`
                                }
                            >
                                Marion Casters
                            </h1>
                            <img
                                src={logo}
                                alt="logo"
                                className={
                                    scrollY > 0
                                        ? `${s.logoSticky} ${s.logo}`
                                        : `${s.logo}`
                                }
                            />
                        </Link>
                    );
                return (
                    <Link
                        key={PATH}
                        to={PATH}
                        className={
                            location.pathname === PATH
                                ? `${s.link} ${s.active}`
                                : `${s.link}`
                        }
                    >
                        {NAME}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
