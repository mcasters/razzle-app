import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../react.svg';
import './Home.css';
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
    // console.log(req.url);
    //console.log(match);
    // console.log(history);
    // console.log(location);
    console.log(ctx);
};

export default Home;
