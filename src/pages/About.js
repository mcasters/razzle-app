import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import { CONTENT_URL } from '../data/api/urls';
import CONST from '../constants/content';
import { TITLE } from '../constants/meta';
import CONTENT from '../constants/content';
import s from './About.module.css';

const About = ({ content }) => {
    return (
        <article className={s.container}>
            <h1 className="hidden">{TITLE.PRESENTATION}</h1>
            <img
                src={`${CONST.CONTENT_IMAGE_PATH}/${CONST.PRESENTATION_IMAGE_TITLE}.jpg`}
                alt={CONST.PRESENTATION_IMAGE_ALT}
                className={s.picture}
            />
            <div>{content}</div>
        </article>
    );
};

About.getInitialProps = async () => {
    try {
        const res = await fetch(
            `${CONTENT_URL}?keycontent=${CONTENT.KEY.PRESENTATION}`
        );
        const json = await res.json();
        return { content: json.text };
    } catch (error) {
        if (error.response.status === 404) return { statusCode: 404 };
        return { error };
    }
};

About.propTypes = {
    content: PropTypes.string,
};

export default About;
