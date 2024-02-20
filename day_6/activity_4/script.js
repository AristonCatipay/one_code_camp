document.addEventListener('DOMContentLoaded', function() {
    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('start-button');
    const resetButton = document.getElementById('reset-button');

    let minutes = 0;
    let seconds = 0;
    let timerInterval;

    startButton.addEventListener('click', function() {
      const userInput = prompt('Enter time between 1 to 60 (minutes)');
      minutes = parseInt(userInput);
      
      if (isNaN(minutes) || minutes < 1 || minutes > 60) {
        alert('Please enter a valid number between 1 to 60.');
        return;
      }

      timerDisplay.textContent = formatTime(minutes, seconds);
      
      timerInterval = setInterval(async function() {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
            return;
          }
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }
        timerDisplay.textContent = formatTime(minutes, seconds);
      }, 1000);
    });

    resetButton.addEventListener('click', function() {
      clearInterval(timerInterval);
      minutes = 0;
      seconds = 0;
      timerDisplay.textContent = formatTime(minutes, seconds);
    });

    function formatTime(minutes, seconds) {
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
      return `${formattedMinutes}:${formattedSeconds}`;
    }
});