<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Riyan's Game Zone</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Riyan's Game Zone</h1>
        <div id="clock">00:00:00</div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="tic-tac-toe.html">Tic-Tac-Toe</a></li>
                <li><a href="jet-fighter.html">Jet Fighter</a></li>
                <li><a href="leaderboard.html">Leaderboard</a></li>
            </ul>
        </nav>
    </header>

    <section class="welcome">
        <h2>Welcome to Riyan's Game Zone</h2>
        <p>Enjoy exciting games with an anime-themed experience!</p>
    </section>

    <footer>
        <p>© 2025 Riyan's Game Zone | All rights reserved.</p>
    </footer>
    
    <script>
        function updateClock() {
            const now = new Date();
            let hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes().toString().padStart(2, '0');
            let seconds = now.getSeconds().toString().padStart(2, '0');
            document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
        }
        setInterval(updateClock, 1000);
        updateClock();
    </script>
</body>
</html>
