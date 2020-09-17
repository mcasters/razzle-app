import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { Link } from 'react-router-dom';

import ITEM_CONST from '../constants/itemConstant';
import Item from '../data/model/Item';
import ItemComponent from './item/ItemComponent';
import { PAINTING_URL } from '../data/api/urls';
import useQuery from './hooks/useQuery';
import useSelectedTab from './hooks/useSelectedTab';
import s from './paintings.css';

const paintingIndexTab = [
    '?part=0&year=2017',
    '?part=1&year=2018',
    '?part=2&year=2018',
    '?part=0&year=2019',
];

const Paintings = ({ list, location }) => {
    let query = useQuery();
    let tab = useSelectedTab(paintingIndexTab.indexOf(location.search));

    return (
        <>
            <ul>
                <li className={`${s.tab} button`}>
                    <Link to={'/peintures?part=0&year=2017'}>2017</Link>
                </li>
                <li>
                    <Link to={'/peintures?part=1&year=2018'}>2018a</Link>
                </li>
                <li>
                    <Link to={'/peintures?part=2&year=2018'}>2018b</Link>
                </li>
                <li>
                    <Link to={'/peintures?part=0&year=2019'}>2019</Link>
                </li>
            </ul>
            <h1>{query.get('year')}</h1>
            {list.map((row) => {
                const item = new Item(row, ITEM_CONST.PAINTING.KEY);
                return <ItemComponent key={row.id} item={item} />;
            })}
        </>
    );
};

Paintings.getInitialProps = async ({ location }) => {
    const apiQuery = location.search || '?part=0&year=2017';
    try {
        const res = await fetch(`${PAINTING_URL}${apiQuery}`);
        const list = await res.json();
        return { list, location };
    } catch (error) {
        if (error.response.status === 404) return { statusCode: 404 };
        return { error };
    }
};

Paintings.propTypes = {
    list: PropTypes.object,
    location: PropTypes.object,
};

export default Paintings;
