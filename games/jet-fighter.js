const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

let jet = { x: 50, y: 200, width: 40, height: 40, speed: 5 };
let bullets = [];
let enemies = [];

function drawJet() {
    ctx.fillStyle = "blue";
    ctx.fillRect(jet.x, jet.y, jet.width, jet.height);
}

function drawBullets() {
    ctx.fillStyle = "red";
    bullets.forEach((bullet, index) => {
        bullet.x += 5;
        ctx.fillRect(bullet.x, bullet.y, 10, 5);
        if (bullet.x > canvas.width) bullets.splice(index, 1);
    });
}

function drawEnemies() {
    ctx.fillStyle = "green";
    enemies.forEach((enemy, index) => {
        enemy.x -= 3;
        ctx.fillRect(enemy.x, enemy.y, 40, 40);
        if (enemy.x < 0) enemies.splice(index, 1);
    });
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawJet();
    drawBullets();
    drawEnemies();
    requestAnimationFrame(gameLoop);
}

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && jet.y > 0) jet.y -= jet.speed;
    if (e.key === "ArrowDown" && jet.y < canvas.height - jet.height) jet.y += jet.speed;
    if (e.key === " ") bullets.push({ x: jet.x + jet.width, y: jet.y + 20 });
});

setInterval(() => enemies.push({ x: canvas.width, y: Math.random() * (canvas.height - 40) }), 2000);

gameLoop();


