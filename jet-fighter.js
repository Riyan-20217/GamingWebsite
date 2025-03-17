const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 60,
    width: 50,
    height: 50,
    speed: 5,
    bullets: []
};

let enemies = [];
let keys = {};

// Load images
const playerImg = new Image();
playerImg.src = "images/jet.png";  // Ensure jet.png is in the images folder

const enemyImg = new Image();
enemyImg.src = "images/enemy.png";  // Ensure enemy.png is in the images folder

// Move player
window.addEventListener("keydown", (e) => keys[e.key] = true);
window.addEventListener("keyup", (e) => keys[e.key] = false);

function movePlayer() {
    if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
    if (keys["ArrowRight"] && player.x + player.width < canvas.width) player.x += player.speed;
    if (keys[" "]) shootBullet();
}

// Shoot bullet
function shootBullet() {
    player.bullets.push({ x: player.x + player.width / 2 - 2.5, y: player.y, width: 5, height: 10, speed: 7 });
}

function updateBullets() {
    player.bullets.forEach((bullet, index) => {
        bullet.y -= bullet.speed;
        if (bullet.y < 0) player.bullets.splice(index, 1);
    });
}

// Create enemies
function spawnEnemies() {
    setInterval(() => {
        let enemyX = Math.random() * (canvas.width - 50);
        enemies.push({ x: enemyX, y: 0, width: 50, height: 50, speed: 2 });
    }, 1000);
}

function updateEnemies() {
    enemies.forEach((enemy, index) => {
        enemy.y += enemy.speed;
        if (enemy.y > canvas.height) enemies.splice(index, 1);
    });
}

// Collision detection
function checkCollisions() {
    player.bullets.forEach((bullet, bIndex) => {
        enemies.forEach((enemy, eIndex) => {
            if (
                bullet.x < enemy.x + enemy.width &&
                bullet.x + bullet.width > enemy.x &&
                bullet.y < enemy.y + enemy.height &&
                bullet.y + bullet.height > enemy.y
            ) {
                player.bullets.splice(bIndex, 1);
                enemies.splice(eIndex, 1);
            }
        });
    });
}

// Draw everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
    player.bullets.forEach(bullet => {
        ctx.fillStyle = "red";
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });
    enemies.forEach(enemy => {
        ctx.drawImage(enemyImg, enemy.x, enemy.y, enemy.width, enemy.height);
    });
}

// Game loop
function gameLoop() {
    movePlayer();
    updateBullets();
    updateEnemies();
    checkCollisions();
    draw();
    requestAnimationFrame(gameLoop);
}

spawnEnemies();
gameLoop();
