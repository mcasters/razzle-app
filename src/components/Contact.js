import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

import { CONTENT_URL } from '../data/api/urls';
import { TITLE } from '../constants/meta';
import CONTENT from '../constants/content';

const Contact = ({ address, phone, email }) => {
    return (
        <article>
            <h1>{TITLE.CONTACT}</h1>
            <div>{address}</div>
            <div>{phone}</div>
            <div>{email}</div>
        </article>
    );
};

Contact.getInitialProps = async () => {
    try {
        const resAddress = await fetch(
            `${CONTENT_URL}?keycontent=${CONTENT.KEY.CONTACT_ADDRESS}`
        );
        const resPhone = await fetch(
            `${CONTENT_URL}?keycontent=${CONTENT.KEY.CONTACT_PHONE}`
        );
        const resEmail = await fetch(
            `${CONTENT_URL}?keycontent=${CONTENT.KEY.CONTACT_EMAIL}`
        );
        const jsonAddress = await resAddress.json();
        const jsonPhone = await resPhone.json();
        const jsonEmail = await resEmail.json();
        return {
            address: jsonAddress.text,
            phone: jsonPhone.text,
            email: jsonEmail.text,
        };
    } catch (error) {
        if (error.response.status === 404) return { statusCode: 404 };
        return { error };
    }
};

Contact.propTypes = {
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
};

export default Contact;
