import React from 'react';
import PropTypes from 'prop-types';

import ITEM_CONST from '../constants/itemConstant';
import s from './ItemTab.module.css';
import { Link } from 'react-router-dom';

const ItemTab = ({ selectedQuery }) => {
    return (
        <ul>
            {ITEM_CONST.PAINTING.YEARS.map((year, index) => {
                const queryLink = ITEM_CONST.PAINTING.QUERIES[index];
                const url = `/peintures${queryLink}`;
                const isSelected = queryLink === selectedQuery;
                return (
                    <li
                        key={year}
                        className={`${s.tab} ${isSelected ? s.selected : ''}`}
                    >
                        <Link to={url}>{year}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

ItemTab.propTypes = {
    selectedQuery: PropTypes.string,
};

export default ItemTab;
