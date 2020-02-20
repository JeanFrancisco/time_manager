import React, { Fragment, useState, useEffect } from 'react';
import StartForm from './components/StartForm';
import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';
import TimeLeft from './components/TimeLeft';
import { convertTimeNotation, transformToTimeNotation } from './helpers';

function App() {
  // set global application state
  const [project_lifetime, setLifetime] = useState('');
  const [remaining_time, updateRemainingTime] = useState('');
  const [renderInitialForm, updateRenderInitialForm] = useState(true);
  const [tasks, updateTasks] = useState([]);

  // Listen for new tasks to update the remaining_time value
  useEffect( () => {

    const time_left_minutes = calculateTimeLeft('minutes');
    if(time_left_minutes >= 0) {
      const time_left = transformToTimeNotation(time_left_minutes, 'minutes');
      updateRemainingTime(time_left);  
    }

  }, [tasks]);

  const addTask = task => {
    updateTasks([
      ...tasks,
      task
    ]);
  }

  const calculateTimeLeft = (unit_of_time) => {
    const project_time_minutes = convertTimeNotation(project_lifetime, unit_of_time);
    const total_tasks_minutes = tasks.reduce( (sum, task) => ( convertTimeNotation(task.task_time, unit_of_time) + sum ), 0 );
    const time_left_minutes = project_time_minutes - total_tasks_minutes;
    return time_left_minutes;
  }

  return (
    <Fragment>
      <h1>Project Time Manager</h1>
      <div className="main-content">
        <div className="content">

          {
            renderInitialForm ?
            (
              <StartForm
                setLifetime = { setLifetime }
                updateRemainingTime = { updateRemainingTime }
                updateRenderInitialForm = { updateRenderInitialForm }
              />
            )
            :
            (
              <div className="row">
                <div className="one-half column">
                  <TaskForm
                    addTask = { addTask }
                    calculateTimeLeft = { calculateTimeLeft }
                  />
                </div>
                <div className="one-half column">
                  <TasksList
                    tasks = { tasks }
                  />

                  <TimeLeft
                    project_lifetime = { project_lifetime }
                    remaining_time = { remaining_time }
                  />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </Fragment>
  );
}

export default App;
