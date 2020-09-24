import React from 'react';
import PropTypes from 'prop-types';

import s from './ItemComponent.module.css';
import Images from './Images';
import Caption from './Caption';

const ItemComponent = ({ item, handleImageChange }) => {
    const handleSelectedImage = (index) => {
        handleImageChange(item, index);
    };

    return (
        <article className={s.itemContainer}>
            <h2 className={s.itemTitle}>
                <cite>{item.get('title')}</cite>
            </h2>
            <Images
                srcList={item.getSMPath()}
                alt={item.getAlt()}
                onSelected={handleSelectedImage}
            />
            <Caption item={item} />
        </article>
    );
};

ItemComponent.propTypes = {
    item: PropTypes.object.isRequired,
    handleImageChange: PropTypes.func.isRequired,
};
export default ItemComponent;
