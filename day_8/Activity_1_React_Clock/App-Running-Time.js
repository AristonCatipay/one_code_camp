// ACTIVITY 2 ----------------------------------------------------------------------------------
// Task: In this assignment, without refreshing the page, it will get the latest time.
import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // This is a React hook called useEffect. It allows us to perform side effects in functional components. 
    // The function passed to useEffect will run after the component renders.
    // [] is an empty dependency array. It means that the function passed to useEffect will only run once, 
    // after the component mounts. This ensures that useEffect doesn't run repeatedly.
    // Side effect logic goes here ---- The side effect logic is the updateDateTime function.
    const updateTime = () => {
      // This function updates the time displayed on the page. It gets the current time using new Date().toLocaleTimeString().
      const currentTime = new Date().toLocaleTimeString();
      // This line finds the HTML element with the id "current-time".
      const timeElement = document.getElementById('current-time');
      // This conditional statement checks if the element with id "current-time" exists.
      if (timeElement) {
        // If the element exists, it sets its text content to display the current time.
        timeElement.textContent = `It is: ${currentTime}`;
      }
    };

    // This line sets up an interval that calls the updateTime function every second (1000 milliseconds).
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval
    // This is a cleanup function that runs when the component unmounts. 
    // It clears the interval to prevent memory leaks.
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures useEffect runs only once after the component mounts

  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <div id="current-time">It is: </div>
    </div>
  );
}

export default App;

