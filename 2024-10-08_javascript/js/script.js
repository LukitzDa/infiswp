let watchInterval;
let isPaused = false;
let lastTime;

function updateClock() {
    const now = new Date();
    lastTime = now.toLocaleTimeString();
    document.getElementById("clock").textContent = lastTime;
}

function startWatch() {
    if (!isPaused) {
        updateClock();
        watchInterval = setInterval(updateClock, 1000);
    }
    isPaused = false;
}

function stopWatch() {
    clearInterval(watchInterval);
    isPaused = true;
    document.getElementById("clock").textContent = lastTime;
}
