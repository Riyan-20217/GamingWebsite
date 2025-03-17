const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let gameActive = true;
let boardState = ["", "", "", "", "", "", "", "", ""];

function handleClick(event) {
    const index = event.target.dataset.index;
    
    if (boardState[index] === "" && gameActive) {
        boardState[index] = currentPlayer;
        event.target.innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            gameActive = false;
            alert(`${boardState[a]} Wins!`);
            return;
        }
    }

    if (!boardState.includes("")) {
        alert("It's a Draw!");
        gameActive = false;
    }
}

function resetGame() {
    boardState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    cells.forEach(cell => cell.innerText = "");
}

cells.forEach(cell => cell.addEventListener("click", handleClick));
