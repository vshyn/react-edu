import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const withLoadingDelay = (WrappedComponent) => (props) => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const timeOut = setTimeout(() => setLoading(false), 2000);
        return () => {
            clearTimeout(timeOut);
        };
    }, []);

    return isLoading ? (
        <ClipLoader loading={isLoading} />
    ) : (
        <WrappedComponent {...props} />
    );
};

export default withLoadingDelay;
