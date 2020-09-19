import React from 'react';
import PropTypes from 'prop-types';

import s from './ZoomContent.module.css';

function ZoomContent({ children, selectedImage }) {
    return (
        <div className={s.container}>
            {children}
            {selectedImage !== null && (
                <img
                    className={s.image}
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                />
            )}
        </div>
    );
}

ZoomContent.propTypes = {
    children: PropTypes.node,
    selectedImage: PropTypes.object,
};

export default ZoomContent;
