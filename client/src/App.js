import React from 'react';
import CueList from './CueList';
import CueCreate from './CueCreate';

const App = () => {
  return (
    <div className="container">
      <h1>Create Cue</h1>
      <CueCreate />
      <hr />
      <h1>Posts</h1>
      <CueList />
    </div>
  );
}

export default App;
