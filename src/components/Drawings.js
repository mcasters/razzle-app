import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import ITEM_CONST from '../constants/itemConstant';
import Item from '../data/model/Item';
import ItemComponent from './item/ItemComponent';
import { DRAWING_URL } from '../data/api/urls';

const Drawings = ({ list }) => {
    return (
        <>
            {list.map((row) => {
                const item = new Item(row, ITEM_CONST.DRAWING.KEY);
                return <ItemComponent key={row.id} item={item} />;
            })}
        </>
    );
};

Drawings.getInitialProps = async () => {
    try {
        const res = await fetch(DRAWING_URL);
        const list = await res.json();
        return { list };
    } catch (error) {
        if (error.response.status === 404) return { statusCode: 404 };
        return { error };
    }
};

Drawings.propTypes = {
    list: PropTypes.array,
};

export default Drawings;
