import React from 'react';

const Images = ({ srcList, alt }) => {
    return srcList.map((src) => <img key={src} src={src} alt={alt} />);
};

export default Images;
