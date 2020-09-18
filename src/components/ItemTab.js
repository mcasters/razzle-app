import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import ITEM_CONST from '../constants/itemConstant';
import Item from '../data/model/Item';
import ItemComponent from './item/ItemComponent';
import { PAINTING_URL } from '../data/api/urls';

const ItemTab = ({ list }) => {
    return (
        <>
            {list.map((row) => {
                const item = new Item(row, ITEM_CONST.PAINTING.KEY);
                return <ItemComponent key={row.id} item={item} />;
            })}
        </>
    );
};

ItemTab.getInitialProps = async () => {
    try {
        const res = await fetch(PAINTING_URL);
        const list = await res.json();
        return { list };
    } catch (error) {
        if (error.response.status === 404) return { statusCode: 404 };
        return { error };
    }
};

ItemTab.propTypes = {
    list: PropTypes.array,
};

export default ItemTab;
