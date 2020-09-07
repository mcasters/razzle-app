import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../react.svg';
import './Home.css';
import { mySql } from '../data/mysql';

const Home = () => {
    return (
        <div className="Home">
            <div className="Home-header">
                <img src={logo} className="Home-logo" alt="logo" />
                <h2>Welcome to After.js</h2>
            </div>
            <p className="Home-intro">
                To get started, edit <code>src/Home.js</code> or{' '}
                <code>src/About.js</code>and save to reload.
            </p>
            <Link to="/about">About -></Link>
        </div>
    );
};

Home.getInitialProps = async ({
    req,
    res,
    match,
    history,
    location,
    ...ctx
}) => {
    try {
        const tab = await mySql();
        return { itemList: tab[0] };
    } catch (error) {
        if (error.response.status === 404) return { statusCode: 404 };
        return { error };
    }
};

export default Home;
