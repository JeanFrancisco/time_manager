import React, { Fragment, useState } from 'react';
import Error from './Error';

const StartForm = ({ setLifetime, updateRemainingTime, updateRenderInitialForm }) => {
    // set the local state
    const [time, updateTime] = useState(0);
    const [error, setError] = useState('')

    const establishTime = e => {
        updateTime( parseInt(e.target.value) );
    }

    const settingTime = e => {
        e.preventDefault();

        // validation rules...
        if(time <= 0 || isNaN(time) ) {
            setError('Your project lifetime has not a valid numeric value');
            return;
        }

        // erase error. 'cause already pass the validation rules.
        setError('');

        setLifetime(time);
        updateRemainingTime(time);
        updateRenderInitialForm(false);
    }

    return (
        <Fragment>
            <h2>Let's Go to Start a New Project</h2>
            
            {
                ( error !== '' ) ? <Error error = { error }/> : null
            }

            <form
                onSubmit = { settingTime }
            >
                <label>Your Project Lifetime</label>
                <input className="u-full-width"
                    type="number"
                    placeholder="Enter your general project lifetime"
                    onChange = { establishTime }
                />

                <input className="button-primary u-full-width"
                    type="submit"
                    value="Start to Manage"
                />
            </form>
        </Fragment>
    );
}

export default StartForm;