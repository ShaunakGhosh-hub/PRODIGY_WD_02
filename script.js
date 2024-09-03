let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;
let lapCount = 0;
let lapTimes = [];

const displayHours = document.getElementById('hours');
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const displayMilliseconds = document.getElementById('milliseconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapList = document.getElementById('lap-list');

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', recordLap);

function startStopwatch() {
    intervalId = setInterval(() => {
        milliseconds += 10;
        if (milliseconds === 1000) {
            seconds++;
            milliseconds = 0;
        }
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        updateDisplay();
    }, 10);
}

function stopStopwatch() {
    clearInterval(intervalId);
}

function resetStopwatch() {
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCount = 0;
    lapTimes = [];
    lapList.innerHTML = '';
    updateDisplay();
}

function updateDisplay() {
    displayHours.textContent = padZero(hours);
    displayMinutes.textContent = padZero(minutes);
    displaySeconds.textContent = padZero(seconds);
    displayMilliseconds.textContent = padZero(milliseconds, 3);
}

function padZero(value, length = 2) {
    let str = value.toString();
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

function recordLap() {
    lapCount++;
    const lapTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds, 3)}`;
    lapTimes.push(lapTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(lapItem);
}
