// ACTIVITY 2 ----------------------------------------------------------------------------------
// Task: In this assignment, without refreshing the page, it will get the latest time.
// import React, { useEffect } from 'react';
// import './App.css';

// function App() {
//   useEffect(() => {
//     // This is a React hook called useEffect. It allows us to perform side effects in functional components. 
//     // The function passed to useEffect will run after the component renders.
//     // [] is an empty dependency array. It means that the function passed to useEffect will only run once, 
//     // after the component mounts. This ensures that useEffect doesn't run repeatedly.
//     // Side effect logic goes here ---- The side effect logic is the updateDateTime function.
//     const updateTime = () => {
//       // This function updates the time displayed on the page. It gets the current time using new Date().toLocaleTimeString().
//       const currentTime = new Date().toLocaleTimeString();
//       // This line finds the HTML element with the id "current-time".
//       const timeElement = document.getElementById('current-time');
//       // This conditional statement checks if the element with id "current-time" exists.
//       if (timeElement) {
//         // If the element exists, it sets its text content to display the current time.
//         timeElement.textContent = `It is: ${currentTime}`;
//       }
//     };

//     // This line sets up an interval that calls the updateTime function every second (1000 milliseconds).
//     const intervalId = setInterval(updateTime, 1000);

//     // Clean up the interval
//     // This is a cleanup function that runs when the component unmounts. 
//     // It clears the interval to prevent memory leaks.
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array ensures useEffect runs only once after the component mounts

//   return (
//     <div className="App">
//       <h1>Hello, React!</h1>
//       <div id="current-time">It is: </div>
//     </div>
//   );
// }

// export default App;

// ACTIVITY 1 ----------------------------------------------------------------------------------
// Task: In this assignment, you will need to output the following so that 
// whenever you refresh your page manually, it will get the latest time.
// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   // State Management with useState:
//   const [currentTime, setCurrentTime] = useState('');
//   // We use the useState hook to create a piece of state named "currentTime" 
//   // and a function "setCurrentTime" to update it.
//   // useState('') initializes currentTime with an empty string.

//   useEffect(() => {
//     // We use the useEffect hook to perform side effects in function components.
//     // Here, we define a function that will run as a side effect when the component mounts 
//     // (and only when it mounts) due to the empty dependency array [].
//     // Inside useEffect, we have a function updateTime() which updates the currentTime state 
//     // with the current time using new Date().toLocaleTimeString().
//     // Side effect logic goes here ---- The side effect logic is the updateDateTime function.
//     const updateTime = () => {
//       const time = new Date().toLocaleTimeString();
//       setCurrentTime(time);
//     };

//     updateTime(); // Update time once when component mounts

//     return () => {};
//     // We are returning an empty function from the useEffect hook. 
//     // This function serves as a cleanup mechanism, but in this case, it's empty because we don't need to perform any cleanup.
//     // This function is called when the component unmounts.
//   }, []); // Empty dependency array ensures useEffect runs only once after the component mounts

//   return (
//     <div className="App">
//       <h1>Hello, React!</h1>
//       <div>It is: {currentTime}</div>
//     </div>
//     // We return JSX (JavaScript XML), which represents the structure of our component's UI.
//     // JSX allows us to write HTML-like syntax within JavaScript.
//     // In this case, we have a <div> with the class name 'App', containing an <h1> element with the text 'Hello, React!',
//     // and another <div> element displaying the current time stored in the currentTime state.
//   );
// }

// export default App;

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

