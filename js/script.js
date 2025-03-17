document.addEventListener("DOMContentLoaded", () => {
    updateClock();
    setInterval(updateClock, 1000); // Update clock every second
    displayPlayerName();
});

// Save Player Name in Local Storage
function saveName() {
    let playerName = document.getElementById("playerNameInput").value.trim();
    if (playerName === "") {
        alert("Please enter a valid name!");
        return;
    }
    localStorage.setItem("playerName", playerName);
    document.getElementById("namePrompt").style.display = "none";
    displayPlayerName();
}

// Display Player Name from Local Storage
function displayPlayerName() {
    let storedName = localStorage.getItem("playerName") || "Player";
    document.getElementById("playerName").textContent = storedName;
}

// Real-time Clock Function
function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}
