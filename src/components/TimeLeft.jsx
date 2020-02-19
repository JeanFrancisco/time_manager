import React, { Fragment } from 'react';
import { calculateRemainingClass } from '../helpers';

const TimeLeft = ({ project_lifetime, remaining_time }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Project Lifetime: { project_lifetime }
            </div>

            <div className ={ "alert " + calculateRemainingClass(project_lifetime, remaining_time) }>
                Project Remaining Time: { remaining_time }
            </div>
        </Fragment>
    );
}

export default TimeLeft;