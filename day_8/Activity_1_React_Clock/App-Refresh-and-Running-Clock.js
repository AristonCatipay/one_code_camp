// ACTIVITY 3 ----------------------------------------------------------------------------------
// Task: Combination of refresh before it shows the time and running time.

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [refreshedTime, setRefreshedTime] = useState('');
  const [runningTime, setRunningTime] = useState('');

  useEffect(() => {
    const updateRefreshedTime = () => {
      const time = new Date().toLocaleTimeString();
      setRefreshedTime(time);
    };

    updateRefreshedTime();

    const intervalId = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setRunningTime(time);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <div>Refreshed Time: {refreshedTime}</div>
      <div>Running Time: {runningTime}</div>
    </div>
  );
}

export default App;

