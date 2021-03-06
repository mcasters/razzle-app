import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ITEM_CONST from '../../../../constants/itemConstant';
import s from './Tab.module.css';

const Tab = ({ selectedQuery }) => {
    return (
        <ul className={s.tabList}>
            {ITEM_CONST.PAINTING.YEARS.map((year, index) => {
                const queryLink = ITEM_CONST.PAINTING.QUERIES[index];
                const url = `/peintures${queryLink}`;
                const isSelected = queryLink === selectedQuery;
                return (
                    <li
                        key={year}
                        className={`${s.tab} ${isSelected ? s.selected : ''}`}
                    >
                        <Link to={url} className={s.tablink}>
                            {year}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

Tab.propTypes = {
    selectedQuery: PropTypes.string,
};

export default Tab;
