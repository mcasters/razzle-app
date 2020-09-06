import React from 'react';
import logo from '../react.svg';
import '../Home.css';
import {Link} from 'react-router-dom';
import {mySql} from "../data/mysql";
import CustomDate from "../data/model/CustomDate";
import Painting from "../data/model/Painting";
import ITEM_CONST from "../constants/itemConstant";

const Home = ({itemList}) => {

    return (
        <div className="Home">
            <div className="Home-header">
                <img src={logo} className="Home-logo" alt="logo"/>
                <h2>Welcome to After.js</h2>
            </div>
            <p className="Home-intro">
                To get started, edit <code>src/Home.js</code> or{' '}
                <code>src/About.js</code>and save to reload.
            </p>
            <Link to="/about">About -></Link>
            {itemList.map((row) => {
                const date = new CustomDate();
                const item = new Painting(row);
                console.log(item.getSMPath());
                return (
                    <>
                        <p>{row.title}</p>
                        <p>{date.getLongStringDate()}</p>
                        <img src={item.getSMPath()}/>
                    </>);
            })}
        </div>
    );
}

Home.getInitialProps = async ({req, res, match, history, location, ...ctx}) => {
    const tab = await mySql();
    return {itemList: tab[0]};
}

export default Home;
