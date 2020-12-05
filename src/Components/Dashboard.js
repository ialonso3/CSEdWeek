import React from 'react';

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h1>Available Activities</h1> 
      <div className="app-group">
          <p className="choice">Game: {props.game}</p>
          <p className="choice">Story: {props.story}</p>
          <p className="choice">Productivity: {props.productivity}</p>
          <p className="choice">Study Skills: {props.studyskills}</p>
          <p className="choice">Social: {props.social}</p>
      </div>
    </div>
  );
}

export default Dashboard;
