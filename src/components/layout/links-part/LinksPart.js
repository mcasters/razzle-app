import React from 'react';

import s from './LinksPart.module.css';
import reactLogo from './reactTransparent.png';
import appleLogo from './appleTransparent.png';
import nodeLogo from './nodeJSTransparent.png';

function LinksPart() {
    return (
        <div className={s.container}>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                <img src={nodeLogo} className={s.nodejsLogo} alt="NodeJS" />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                <img src={reactLogo} className={s.reactLogo} alt="React" />
            </a>
            <a href="https://www.apple.com" target="_blank" rel="noreferrer">
                <img src={appleLogo} className={s.appleLogo} alt="Apple" />
            </a>
        </div>
    );
}

export default LinksPart;
