import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);
    const [errorInfo, setErrorInfo] = useState('');

    React.getDerivedStateFromError = () => {
        setHasError(true);
    };

    React.componentDidCatch = (error, errorInfo) => {
        const message = `${error.toString()} : ${errorInfo}`;
        setErrorInfo(message);
    };

    if (hasError) {
        return <h1>Something went wrong : {errorInfo}</h1>;
    }
    return children;
};

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
