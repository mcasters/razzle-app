import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
import TabContent from './TabContent';
import ZoomContent from '../../../item/zoom-content/ZoomContent';
import useImageToZoom from '../../../hooks/useImageToZoom';

const ContentWithTab = ({ list, query }) => {
    const [item, index, handleImageChange] = useImageToZoom();

    return (
        <>
            <TabContent
                list={list}
                query={query}
                handleImageChange={handleImageChange}
            />
            <ZoomContent selectedItem={item} imageIndex={index}>
                <Tab selectedQuery={query} />
            </ZoomContent>
        </>
    );
};

ContentWithTab.propTypes = {
    list: PropTypes.array,
    query: PropTypes.string,
};

export default ContentWithTab;
