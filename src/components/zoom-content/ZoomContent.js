import React from 'react';
import PropTypes from 'prop-types';

import s from './ZoomContent.module.css';

function ZoomContent({ children, onImageChange }) {
    return (
        <div className={s.container}>
            {children}
            <img ref={onImageChange} src="" className={s.image} />
        </div>
    );
}

ZoomContent.propTypes = {
    children: PropTypes.node,
};

export default ZoomContent;
