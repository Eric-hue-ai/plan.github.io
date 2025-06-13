let timer;
let timeLeft = 25 * 60; // 25 minutes
let isRunning = false;
let isFocus = true;

const timerDisplay = document.getElementById("timer");
const sessionType = document.getElementById("sessionType");

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        isFocus = !isFocus;
        timeLeft = isFocus ? 25 * 60 : 5 * 60;
        sessionType.textContent = isFocus ? "Focus" : "Break";
        updateDisplay();
        alert(isFocus ? "Time to focus!" : "Take a short break!");
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = isFocus ? 25 * 60 : 5 * 60;
  updateDisplay();
}

updateDisplay();
