import React from 'react';
import PropTypes from 'prop-types';

const Images = ({ srcList, alt, handleImageChange }) => {
    const imageChange = (src) => () => {
        handleImageChange(src, alt);
    };

    return srcList.map((src) => (
        <button key={src} onClick={imageChange(src)}>
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
