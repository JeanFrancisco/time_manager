import React, { Fragment, useState } from 'react';
import Error from './Error';

const StartForm = ({ setLifetime, updateRemainingTime, updateRenderInitialForm }) => {
    // set the local state
    const [time, updateTime] = useState('');
    const [error, setError] = useState('')

    const establishTime = e => {
        updateTime( e.target.value );
    }

    const settingTime = e => {
        e.preventDefault();

        // validation rules...
        if(! /(\s*\d+[\.\d+]?[d|h|m]\s*)+/.test(time) ) {
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
                <p><span>*</span>This input accepts the following time units: </p>
                <ul style={{ listStyle: 'none' }}>
                    <li>m - minutes</li>
                    <li>h - hours</li>
                    <li>d - days</li>
                </ul>

                <input className="u-full-width"
                    type="text"
                    pattern="(\s*\d+[\.\d+]?[d|h|m]\s*)+"
                    placeholder="Enter your general project lifetime. Example 2d 23h 43m"
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