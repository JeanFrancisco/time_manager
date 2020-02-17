import React, { Fragment, useState } from 'react';

const StartForm = () => {
    // set the local state
    const [time, updateTime] = useState(0);
    const [error, setError] = useState('')

    const establishTime = e => {
        updateTime( parseInt(e.target.value) );
    }

    const settingTime = e => {
        e.preventDefault();

        if(time <= 0 || isNaN(time) ) {
            setError('Your project lifetime has not a valid numeric value');
            return;
        }

        setError('');
    }

    return (
        <Fragment>
            <h2>Let's Go to Start a New Project</h2>
            
            { (error !== '') ? <div className="alert alert-danger error"> { error } </div> : null }

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