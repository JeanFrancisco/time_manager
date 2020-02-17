import React, { Fragment } from 'react';
import StartForm from './components/StartForm'

function App() {
  return (
    <Fragment>
      <h1>Project Time Manager</h1>
      <div className="main-content">
        <div className="content">
          <StartForm/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
