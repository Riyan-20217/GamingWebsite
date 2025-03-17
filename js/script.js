// Real-Time Clock Function
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock(); // Initialize clock immediately

// Save Player Name and Show it on Page
function saveName() {
    const nameInput = document.getElementById('playerNameInput').value;
    if (nameInput.trim() !== "") {
        localStorage.setItem('playerName', nameInput);
        document.getElementById('playerName').textContent = nameInput;
        document.getElementById('namePrompt').style.display = 'none';
    }
}

// Load Player Name from Storage
window.onload = function() {
    const storedName = localStorage.getItem('playerName');
    if (storedName) {
        document.getElementById('playerName').textContent = storedName;
        document.getElementById('namePrompt').style.display = 'none';
    }
};
