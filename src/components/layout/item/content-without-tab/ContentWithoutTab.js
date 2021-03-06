import React from 'react';
import PropTypes from 'prop-types';

import ZoomContent from '../../../item/zoom-content/ZoomContent';
import useImageToZoom from '../../../hooks/useImageToZoom';
import Item from '../../../../data/model/Item';
import ItemComponent from '../../../item/item-component/ItemComponent';
import s from './ContentWithoutTab.module.css';

const ContentWithoutTab = ({ list, itemKey }) => {
    const [item, index, handleImageChange] = useImageToZoom();

    return (
        <>
            <div className={s.itemsContainer}>
                {list.map((row) => {
                    const item = new Item(row, itemKey);
                    return (
                        <ItemComponent
                            key={row.id}
                            item={item}
                            handleImageChange={handleImageChange}
                        />
                    );
                })}
            </div>
            <ZoomContent selectedItem={item} imageIndex={index} />
        </>
    );
};

ContentWithoutTab.propTypes = {
    list: PropTypes.array,
    itemKey: PropTypes.string,
};

export default ContentWithoutTab;
