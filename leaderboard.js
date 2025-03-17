document.addEventListener("DOMContentLoaded", () => {
    updateLeaderboard();
});

// Function to get stored leaderboard data
function getLeaderboard() {
    return JSON.parse(localStorage.getItem("leaderboard")) || [];
}

// Function to update leaderboard table
function updateLeaderboard() {
    const leaderboard = getLeaderboard();
    const tbody = document.getElementById("leaderboard-body");
    tbody.innerHTML = ""; 

    leaderboard.sort((a, b) => b.wins - a.wins); // Sort by most wins

    leaderboard.forEach((player, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.wins}</td>
        `;
        tbody.appendChild(row);
    });
}

// Function to add a win for a player
function addWin(playerName) {
    let leaderboard = getLeaderboard();
    let player = leaderboard.find(p => p.name === playerName);

    if (player) {
        player.wins += 1;
    } else {
        leaderboard.push({ name: playerName, wins: 1 });
    }

    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    updateLeaderboard();
}
