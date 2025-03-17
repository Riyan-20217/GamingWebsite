const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

let jet = { x: 400, y: 500, width: 50, height: 50 };
let bullets = [];
let enemies = [];
let score = 0;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && jet.x > 0) {
        jet.x -= 20;
    }
    if (event.key === "ArrowRight" && jet.x < canvas.width - jet.width) {
        jet.x += 20;
    }
    if (event.key === " ") {
        bullets.push({ x: jet.x + 20, y: jet.y });
    }
});

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "red";
    ctx.fillRect(jet.x, jet.y, jet.width, jet.height);
    
    bullets.forEach((bullet, index) => {
        bullet.y -= 5;
        ctx.fillStyle = "yellow";
        ctx.fillRect(bullet.x, bullet.y, 5, 10);
        if (bullet.y < 0) bullets.splice(index, 1);
    });

    if (Math.random() < 0.02) {
        enemies.push({ x: Math.random() * (canvas.width - 40), y: 0, width: 40, height: 40 });
    }

    enemies.forEach((enemy, index) => {
        enemy.y += 3;
        ctx.fillStyle = "green";
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        if (enemy.y > canvas.height) enemies.splice(index, 1);
    });

    requestAnimationFrame(updateGame);
}

updateGame();

