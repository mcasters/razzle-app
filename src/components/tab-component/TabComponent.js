import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
import TabContent from './TabContent';
import ZoomContent from '../zoom-content/ZoomContent';

const TabComponent = ({ list, query }) => {
    const [src, setSrc] = useState('');
    const handleImageChange = (src) => {
        setSrc(src);
    };

    const onImageChange = (element) => {
        if (element !== null) element.src = src;
    };

    return (
        <>
            <TabContent
                list={list}
                query={query}
                handleImageChange={handleImageChange}
            />
            <ZoomContent onImageChange={onImageChange}>
                <Tab selectedQuery={query} />
            </ZoomContent>
        </>
    );
};

TabComponent.propTypes = {
    list: PropTypes.array,
    query: PropTypes.string,
};

export default TabComponent;