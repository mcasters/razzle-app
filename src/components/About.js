import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import { CONTENT_URL } from '../data/api/urls';
import CONST from '../constants/content';
import { TITLE } from '../constants/meta';

const About = ({ content }) => {
    return (
        <article>
            <h1>{TITLE.PRESENTATION}</h1>
            <img
                src={`${CONST.CONTENT_IMAGE_PATH}/${CONST.PRESENTATION_IMAGE_TITLE}.jpg`}
                alt={CONST.PRESENTATION_IMAGE_ALT}
            />
            <div>{content.text}</div>
        </article>
    );
};

About.getInitialProps = async () => {
    try {
        const res = await fetch(`${CONTENT_URL}?keycontent=presentation`);
        const content = await res.json();
        return { content };
    } catch (error) {
        if (error.response.status === 404) return { statusCode: 404 };
        return { error };
    }
};

About.propTypes = {
    content: PropTypes.string,
};

export default About;
