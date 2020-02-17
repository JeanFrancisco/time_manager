import React from 'react';

const TaskForm = () => {
    return (
        <form>
            <h2>Add a New Project Task</h2>

            <div className="field">
                <label htmlFor="">Task Description</label>

                <input className="u-full-width"
                    placeholder="Example: Do my homework"
                    type="text"
                    name=""
                    id=""
                />
            </div>

            <div className="field">
                <label htmlFor="">Estimated Time</label>

                <input className="u-full-width"
                    type="number"
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