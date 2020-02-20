import React from 'react';

const TasksList = ({ tasks }) => (
    <div className="tasks-list">
        <h2>Your Tasks</h2>
        {
            tasks.map( task => (
                <li key={ task.id } className="task-item">
                    <p>
                        { task.task_desc }
                        <span className="task">{ task.task_time }</span>
                    </p>
                </li>
            ))
        }
    </div>
);

export default TasksList;