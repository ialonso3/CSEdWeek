import React from 'react';

function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Available Activities</h1> 
      <div className="app-group">
          <p className="app">Game</p>
          <p className="app">Story</p>
          <p className="app">Productivity</p>
          <p className="app">Study Skills</p>
          <p className="app">Social</p>
      </div>
    </div>
  );
}

export default Dashboard;
