import React from 'react';
import PropTypes from 'prop-types';

import s from './ZoomContent.module.css';

function ZoomContent({ children, onImageChange }) {
    return (
        <div className={s.container}>
            {children}
            <img ref={onImageChange} className={s.image} src="" alt="" />
        </div>
    );
}

ZoomContent.propTypes = {
    children: PropTypes.node,
    onImageChange: PropTypes.func.isRequired,
};

export default ZoomContent;
