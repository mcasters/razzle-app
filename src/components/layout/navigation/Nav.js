import React from 'react';
import { Link } from 'react-router-dom';

import s from './Nav.module.css';
import logo from './logo-45.png';
import useScroll from '../../hooks/useScroll';

const Nav = () => {
    const scrollY = useScroll();
    return (
        <nav className={s.nav}>
            <Link to="/" className={s.homeLink}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
                        scrollY > 0 ? `${s.logoSticky} ${s.logo}` : `${s.logo}`
                    }
                />
            </Link>{' '}
            <Link to="/presentation" className={s.link}>
                Présentation
            </Link>{' '}
            <Link to="/peintures" className={s.link}>
                Peintures
            </Link>{' '}
            <Link to="/sculptures" className={s.link}>
                Sculptures
            </Link>{' '}
            <Link to="/dessins" className={s.link}>
                Dessins
            </Link>{' '}
            <Link to="/contact" className={s.link}>
                Contact
            </Link>
        </nav>
    );
};

export default Nav;
