import React, { Fragment, useState } from 'react';
import StartForm from './components/StartForm';
import TaskForm from './components/TaskForm';

function App() {
  // set global application state
  const [project_lifetime, setLifetime] = useState(0);
  const [remaining_time, updateRemainingTime] = useState(0);
  const [renderInitialForm, updateRenderInitialForm] = useState(true);
  const [tasks, updateTasks] = useState([]);

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
