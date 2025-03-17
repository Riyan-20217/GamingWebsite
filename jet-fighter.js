// Jet Fighter Game (Mobile-Friendly)

// Get the canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set responsive canvas size
canvas.width = window.innerWidth > 600 ? 600 : window.innerWidth - 20;
canvas.height = window.innerHeight > 500 ? 500 : window.innerHeight - 20;

// Load player jet image
const playerImage = new Image();
playerImage.src = "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/images/jet.png"; 

// Load enemy jet image
const enemyImage = new Image();
enemyImage.src = "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/images/enemy.png"; 

// Player object
const player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 80,
    width: 50,
    height: 50,
    speed: 7
};

// Enemy array
let enemies = [];

// Function to create enemy jets
function createEnemy() {
    let x = Math.random() * (canvas.width - 50);
    let speed = Math.random() * 3 + 2;
    enemies.push({ x: x, y: 0, width: 50, height: 50, speed: speed });
}

// Move player with keyboard
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && player.x > 0) {
        player.x -= player.speed;
    } else if (event.key === "ArrowRight" && player.x < canvas.width - player.width) {
        player.x += player.speed;
    }
});

// Mobile touch controls
document.addEventListener("touchstart", (event) => {
    let touchX = event.touches[0].clientX;
    if (touchX < window.innerWidth / 2) {
        // Move left
        player.x -= player.speed * 2;
    } else {
        // Move right
        player.x += player.speed * 2;
    }
});

// Update game state
function update() {
    // Move enemies down
    enemies.forEach((enemy, index) => {
        enemy.y += enemy.speed;

        // Check for collision with player
        if (
            enemy.y + enemy.height >= player.y &&
            enemy.x < player.x + player.width &&
            enemy.x + enemy.width > player.x
        ) {
            alert("Game Over! You were hit!");
            enemies = [];
        }

        // Remove enemy if it goes out of screen
        if (enemy.y > canvas.height) {
            enemies.splice(index, 1);
        }
    });
}

// Draw everything
function draw() {
    // Clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);

    // Draw enemies
    enemies.forEach((enemy) => {
        ctx.drawImage(enemyImage, enemy.x, enemy.y, enemy.width, enemy.height);
    });
}

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start the game
setInterval(createEnemy, 2000); // Spawn enemies every 2 seconds
gameLoop();
