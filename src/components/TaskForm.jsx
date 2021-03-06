import React, { useState } from 'react';
import ShortID from 'shortid';
import Error from './Error';
import { convertTimeNotation } from '../helpers';

const TaskForm = ({ addTask, calculateTimeLeft }) => {
    const [task_desc, setTaskDescription] = useState('');
    const [task_time, setTaskTime] = useState('');
    const [error, setError] = useState('');

    const handleFormTask = e => {
        e.preventDefault();

        // Validation..
        if( !/(\s*\d+[\.\d+]?[d|h|m]\s*)+/.test(task_time) || task_desc.trim() === '') {
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
        setTaskTime('');
    }

    const handleTaskTime = e => {
        let has_error = false;
        if( ! /\d+[\.\d+]?(d|h|m)?/.test(e.target.value) ) {
            has_error = true;
            setError('Please enter a valid value for the estimated time');
        }

        if(! has_error) { // To avoid evaluate the below expressions if an error already exists.
            const current_time_left = calculateTimeLeft('minutes');
            const new_task_time = convertTimeNotation(e.target.value, 'minutes');
            if( current_time_left < new_task_time ) {
                has_error = true;
                setError('Your task could not be added. Because it exceeds the remaining time of the project.');
            }
        }

        if(! has_error) {
            setError('');
            setTaskTime( e.target.value );
        }
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
                <p><span>*</span>This input accepts the same time units:</p>
                <p>d=days, h=hours, m=minutes</p>

                <input className="u-full-width"
                    type="text"
                    placeholder="Enter how long take it will take to complete the task. Example 2d 3h"
                    pattern="(\s*\d+[\.\d+]?[d|h|m]\s*)+"
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