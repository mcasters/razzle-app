import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import ErrorBoundary from '../ErrorBoundary';
import s from './Layout.module.css';
import Nav from './navigation/Nav';

function Layout({ children, title = 'This is the default title' }) {
    return (
        <ErrorBoundary>
            <Helmet>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Helmet>
            <header className={s.header}>
                <Nav />
            </header>
            <main className={s.content}>{children}</main>

            <footer>{'I`m here to stay'}</footer>
        </ErrorBoundary>
    );
}

Layout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Layout;
