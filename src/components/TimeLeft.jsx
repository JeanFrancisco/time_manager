import React, { Fragment } from 'react';

const TimeLeft = ({ project_lifetime, remaining_time }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Project Lifetime: { project_lifetime }
            </div>

            <div className="alert">
                Project Remaining Time: { remaining_time }
            </div>
        </Fragment>
    );
}

export default TimeLeft;