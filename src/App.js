import React from 'react';
import NavBar from './components/navbar';
import Graph from './components/graph';
import ToolPanel from './components/toolpanel';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Graph />
      <ToolPanel />
    </div>
  );
}

export default App;
