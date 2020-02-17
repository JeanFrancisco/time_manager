import React from 'react';

const Error = ({ error }) => (
    <div className="alert alert-danger error">
        { error }
    </div>
);

export default Error;