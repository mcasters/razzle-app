import React from 'react';
import { Link } from 'react-router-dom';

import s from './Footer.module.css';
import GLOBAL_CONSTANTS from '../../../constants/globalConstant';
import LinksPart from '../links-part/LinksPart';
import { NAMES, ROUTES } from '../../../constants/paths';

export default function Footer() {
    return (
        <footer className="footer">
            <LinksPart />
            <div className={s.container}>
                <span className={s.text}>{GLOBAL_CONSTANTS.COPYRIGHT}</span>
                <Link to={ROUTES.HOME} className={s.link}>
                    {NAMES.HOME}
                </Link>
                <span className={s.dot}>·</span>
                <span className={s.dot}>·</span>
                <Link to={ROUTES.PRIVACY} as={NAMES.PRIVACY} className={s.link}>
                    {NAMES.PRIVACY}
                </Link>
            </div>
        </footer>
    );
}
