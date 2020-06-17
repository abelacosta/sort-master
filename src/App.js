import React from 'react';
import NavBar from './components/navbar';
import Graph from './components/graph';
import ToolPanel from './components/toolpanel';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="d-flex justify-content-center">
        <Graph/>
        <ToolPanel />
      </div>
    </div>
  );
}

export default App;
