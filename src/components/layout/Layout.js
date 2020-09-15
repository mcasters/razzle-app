import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary';

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
            <header>
                <nav>
                    <Link to="/">Home</Link>{' '}
                    <Link to="/about">Présentation</Link>{' '}
                    <Link to="/peintures?part=0&year=2017">Peintures</Link>{' '}
                    <Link to="/sculptures">Sculptures</Link>{' '}
                    <Link to="/dessins">Dessins</Link>{' '}
                </nav>
            </header>

            {children}

            <footer>{'I`m here to stay'}</footer>
        </ErrorBoundary>
    );
}

Layout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Layout;
