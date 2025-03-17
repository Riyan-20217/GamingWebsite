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

// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCeMH3b9megieTaqIG56JUhOin154Ox3o0", // Replace with new API key
    authDomain: "riyan-acbbb.firebaseapp.com",
    databaseURL: "https://riyan-acbbb-default-rtdb.firebaseio.com",
    projectId: "riyan-acbbb",
    storageBucket: "riyan-acbbb.appspot.com",
    messagingSenderId: "999991585230",
    appId: "1:999991585230:web:e2b17678e83ecdda4ea39f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to save player score to Firebase
function saveScore(playerName, score) {
    const scoresRef = ref(db, "leaderboard");
    const newScoreRef = push(scoresRef);
    set(newScoreRef, { name: playerName, score: score });
}

// Function to load and display the leaderboard
function loadLeaderboard() {
    const scoresRef = ref(db, "leaderboard");
    onValue(scoresRef, (snapshot) => {
        const leaderboard = document.getElementById("leaderboard");
        leaderboard.innerHTML = "<h2>Leaderboard</h2>";
        let scores = [];

        snapshot.forEach((childSnapshot) => {
            scores.push(childSnapshot.val());
        });

        scores.sort((a, b) => b.score - a.score); // Sort by highest score

        scores.forEach((entry) => {
            leaderboard.innerHTML += `<p>${entry.name}: ${entry.score}</p>`;
        });
    });
}

// Load leaderboard when page loads
window.onload = function () {
    const storedName = localStorage.getItem('playerName');
    if (storedName) {
        document.getElementById('playerName').textContent = storedName;
        document.getElementById('namePrompt').style.display = 'none';
    }
    loadLeaderboard();
};
