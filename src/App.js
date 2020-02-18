import React, { Fragment, useState, useEffect } from 'react';
import StartForm from './components/StartForm';
import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';
import TimeLeft from './components/TimeLeft';

function App() {
  // set global application state
  const [project_lifetime, setLifetime] = useState(0);
  const [remaining_time, updateRemainingTime] = useState(0);
  const [renderInitialForm, updateRenderInitialForm] = useState(true);
  const [tasks, updateTasks] = useState([]);

  // Listen for new tasks to update the remaining_time value
  useEffect(() => {

    const time_left = project_lifetime - tasks.reduce( (sum, task) => (task.task_time + sum), 0 );
    updateRemainingTime(time_left);

  }, [tasks]);

  const addTask = task => {
    updateTasks([
      ...tasks,
      task
    ]);
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
