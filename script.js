// script.js

let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;
let lapCount = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps');

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', recordLap);

function startStopwatch() {
    intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        displayTime();
    }, 1000);
}

function pauseStopwatch() {
    clearInterval(intervalId);
}

function resetStopwatch() {
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCount = 0;
    lapsList.innerHTML = '';
    displayTime();
}

function recordLap() {
    const lapTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount + 1}: ${lapTime}`;
    lapsList.appendChild(lapItem);
    lapCount++;
}

function displayTime() {
    const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    display.textContent = time;
}

