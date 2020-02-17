import React, { Fragment, useState } from 'react';
import StartForm from './components/StartForm';
import TaskForm from './components/TaskForm';

function App() {
  // set global application state
  const [project_lifetime, setLifetime] = useState(0);
  const [remaining_time, updateRemainingTime] = useState(0);

  return (
    <Fragment>
      <h1>Project Time Manager</h1>
      <div className="main-content">
        <div className="content">
          <StartForm
            updateLifetime = { setLifetime }
            setRemainingTime = { updateRemainingTime }
          />

          <div className="row">
            <div className="one-half column">
              <TaskForm/>
            </div>
            <div className="one-half column">
2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
