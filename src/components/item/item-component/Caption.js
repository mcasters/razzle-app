import React from 'react';
import PropTypes from 'prop-types';

import s from './Caption.module.css';
import GLOBAL_CONST from '../../../constants/globalConstant';
import CustomDate from '../../../data/model/CustomDate';

const Caption = ({ item }) => {
    const date = new CustomDate(item.get('date'));

    return (
        <>
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
        </>
    );
};

Caption.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Caption;
