import React, { useState } from 'react';
import ShortID from 'shortid';
import Error from './Error';

const TaskForm = ({ addTask }) => {
    const [task_desc, setTaskDescription] = useState('');
    const [task_time, setTaskTime] = useState(0);
    const [error, setError] = useState('');

    const handleFormTask = e => {
        e.preventDefault();

        // Validation..
        if(isNaN(task_time) || task_time <= 0 || task_desc.trim() === '') {
            setError('Please verify that you was enter valid data');
            return;
        }

        setError('');
        let task = {
            id: ShortID.generate(),
            task_desc,
            task_time,
        }

        addTask(task);

        setTaskDescription('');
        setTaskTime(0);
    }

    const handleTaskTime = e => {
        if( isNaN( parseInt(e.target.value) ) ) {
            setError('Please enter a numeric value for the estimated time');
            return;
        }

        setError('');
        setTaskTime( parseInt(e.target.value) );
    }

    return (
        <form onSubmit = { handleFormTask } >
            { error === '' ? null : ( <Error error = { error }/> ) }

            <h2>Add a New Project Task</h2>

            <div className="field">
                <label htmlFor="">Task Description</label>

                <input className="u-full-width"
                    placeholder="Example: Do my homework"
                    type="text"
                    name=""
                    id=""
                    value = { task_desc }
                    onChange = { e => setTaskDescription(e.target.value) }
                />
            </div>

            <div className="field">
                <label htmlFor="">Estimated Time</label>

                <input className="u-full-width"
                    type="number"
                    value = { task_time }
                    onChange = { handleTaskTime }
                />
            </div>

            <input className="button-primary u-full-width"
                type="submit"
                value="Agree"
            />
        </form>
    );
}

export default TaskForm;