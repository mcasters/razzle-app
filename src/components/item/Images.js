import React from 'react';
import PropTypes from 'prop-types';

import s from './Images.module.css';

const Images = ({ srcList, alt, handleImageChange }) => {
    const imageChange = (src) => () => {
        handleImageChange({ src, alt });
    };

    return srcList.map((src) => (
        <button key={src} onClick={imageChange(src)} className={s.imageButton}>
            <img src={src} alt={alt} />)
        </button>
    ));
};

Images.prototype = {
    srcList: PropTypes.array,
    alt: PropTypes.string,
    handleImageChange: PropTypes.func.isRequired,
};

export default Images;
