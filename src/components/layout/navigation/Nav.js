import React from 'react';
import { Link } from 'react-router-dom';

import s from './Nav.module.css';
import logo from './logo-45.png';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <Link to="/">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                    <img src={logo} alt="logo" className={s.logo} />
                </a>
            </Link>{' '}
            <Link to="/presentation">Présentation</Link>{' '}
            <Link to="/peintures">Peintures</Link>{' '}
            <Link to="/sculptures">Sculptures</Link>{' '}
            <Link to="/dessins">Dessins</Link>{' '}
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Nav;
