/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import s from './ItemComponent.module.css';
import Images from './Images';
import CustomDate from '../../data/model/CustomDate';
import GLOBAL_CONST from '../../constants/globalConstant';

const ItemComponent = ({ item }) => {
    const customDate = new CustomDate(item.date).getNumberDate();
    return (
        <article className={s.itemContainer}>
            <h2 className={s.itemTitle}>
                <cite>{item.get('title')}</cite>
            </h2>
            <Images srcList={item.getSMPath()} alt={item.getAlt()} />
            <figcaption>
                <time dateTime={item.get('date')} className={s.noWrap}>
                    {customDate}
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

ItemComponent.PropTypes = {
    item: PropTypes.object.isRequired,
};
export default ItemComponent;