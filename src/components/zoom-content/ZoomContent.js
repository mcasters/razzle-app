import React from 'react';
import PropTypes from 'prop-types';

import s from './ZoomContent.module.css';

function ZoomContent({ children, selectedItem, imageIndex }) {
    return (
        <div className={s.container}>
            {children}
            {selectedItem !== null && (
                <img
                    className={s.image}
                    src={selectedItem.getPath()[imageIndex]}
                    alt={selectedItem.getAlt()}
                />
            )}
        </div>
    );
}

ZoomContent.propTypes = {
    children: PropTypes.node,
    selectedItem: PropTypes.object,
    imageIndex: PropTypes.number,
};

export default ZoomContent;
