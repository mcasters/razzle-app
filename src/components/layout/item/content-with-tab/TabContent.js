import React from 'react';
import PropTypes from 'prop-types';

import Item from '../../../../data/model/Item';
import ITEM_CONST from '../../../../constants/itemConstant';
import ItemComponent from '../../../item/item-component/ItemComponent';

const TabContent = ({ list, query, handleImageChange }) => {
    const titleYear = query.split('=')[2];

    return (
        <>
            <h1 className="hidden">{titleYear}</h1>
            {list.map((row) => {
                const item = new Item(row, ITEM_CONST.PAINTING.KEY);
                return (
                    <ItemComponent
                        key={row.id}
                        item={item}
                        handleImageChange={handleImageChange}
                    />
                );
            })}
        </>
    );
};

TabContent.propTypes = {
    list: PropTypes.array,
    query: PropTypes.string,
    handleImageChange: PropTypes.func.isRequired,
};

export default TabContent;
