import React from 'react';
import PropTypes from 'prop-types';

import { mySql } from '../data/mysql';
import ITEM_CONST from '../constants/itemConstant';
import Item from '../data/model/Item';
import ItemComponent from './item/ItemComponent';

const Sculptures = ({ itemList }) => {
    return (
        <div>
            {itemList.map((row) => {
                const item = new Item(row, ITEM_CONST.PAINTING.KEY);
                return <ItemComponent key={row.id} item={item} />;
            })}
        </div>
    );
};

Sculptures.getInitialProps = async () => {
    try {
        const tab = await mySql();
        return { itemList: tab[0] };
    } catch (error) {
        if (error.response.status === 404) return { statusCode: 404 };
        return { error };
    }
};

Sculptures.propTypes = {
    itemList: PropTypes.array,
};

export default Sculptures;
