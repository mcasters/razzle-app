/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import s from './ItemComponent.module.css';
import Images from './Images';
import CustomDate from '../../data/model/CustomDate';
import GLOBAL_CONST from '../../constants/globalConstant';

const ItemComponent = ({ item, handleImageChange }) => {
    const date = new CustomDate(item.get('date'));
    return (
        <article className={s.itemContainer}>
            <h2 className={s.itemTitle}>
                <cite>{item.get('title')}</cite>
            </h2>
            <Images
                srcList={item.getSMPath()}
                alt={item.getAlt()}
                handleImageChange={handleImageChange}
            />
            <figcaption>
                <time dateTime={date.getNumberDate()} className={s.noWrap}>
                    {date.getNumberDate()}
                </time>
                <span className={s.spacer}> | </span>
                <p className={s.noWrap}>{item.get('technique')}</p>
                <span className={s.spacer}> | </span>
                <p className={s.noWrap}>
                    {item.get('height')} x {item.get('width')}
                    {item.has('length') && ` x ${item.get('length')}`} cm
                </p>
            </figcaption>
            <address className={s.email}>{GLOBAL_CONST.EMAIL}</address>
        </article>
    );
};

ItemComponent.propTypes = {
    item: PropTypes.object.isRequired,
    handleImageChange: PropTypes.func.isRequired,
};
export default ItemComponent;
