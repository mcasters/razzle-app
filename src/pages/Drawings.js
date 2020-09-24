import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import ITEM_CONST from '../constants/itemConstant';
import { DRAWING_URL } from '../data/api/urls';
import ContentWithoutTab from '../components/layout/item/content-without-tab/ContentWithoutTab';

const Drawings = ({ list }) => {
    return (
        <>
            <h1 className="hidden">{ITEM_CONST.DRAWING.TITLE}</h1>
            <ContentWithoutTab list={list} itemKey={ITEM_CONST.DRAWING.KEY} />
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
