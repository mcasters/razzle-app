import React from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

import logo from '../react.svg';
import './Home.css';
import { CONTENT_URL } from '../data/api/urls';
import CONTENT from '../constants/content';
import { TITLE } from '../constants/meta';

const Home = ({ content }) => {
    return (
        <div className="Home">
            <div className="Home-header">
                <img src={logo} className="Home-logo" alt="logo" />
                <h2>{TITLE.HOME}</h2>
            </div>
            <p>{content}</p>
        </div>
    );
};

Home.getInitialProps = async () => {
    try {
        const res = await fetch(
            `${CONTENT_URL}?keycontent=${CONTENT.KEY.HOME3}`
        );
        const json = await res.json();
        return { content: json.text };
    } catch (error) {
        if (error.response.status === 404) return { statusCode: 404 };
        return { error };
    }
};

Home.propTypes = {
    content: PropTypes.string,
};

export default Home;
