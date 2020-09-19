import React from 'react';
import PropTypes from 'prop-types';

import s from './Images.module.css';

const Images = ({ srcList, alt, onSelected }) => {
    const imageChange = (index) => () => {
        onSelected(index);
    };

    return srcList.map((src, index) => (
        <button
            key={src}
            onClick={imageChange(index)}
            className={s.imageButton}
        >
            <img src={src} alt={alt} />)
        </button>
    ));
};

Images.prototype = {
    srcList: PropTypes.array.isRequired,
    alt: PropTypes.string.isRequired,
    onSelected: PropTypes.func.isRequired,
};

export default Images;
