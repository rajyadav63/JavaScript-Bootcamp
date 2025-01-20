const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const gameStatus = document.getElementById('game-status');
const locationDisplay = document.getElementById('location-info');

canvas.width = 800;
canvas.height = 600;

let score = 0;
let trashItems = [];
let gameOver = false;
let userLocation = { lat: 0, lon: 0 };

// Trash object constructor
function Trash(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
}

// Generate random trash items
function generateTrash() {
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const trashCount = 5;

    for (let i = 0; i < trashCount; i++) {
        const x = Math.random() * (canvas.width - 50) + 25;
        const y = Math.random() * (canvas.height - 50) + 25;
        const radius = Math.random() * 20 + 20;
        const color = colors[Math.floor(Math.random() * colors.length)];

        trashItems.push(new Trash(x, y, radius, color));
    }
}

// Draw all trash items
function drawTrash() {
    trashItems.forEach(trash => {
        ctx.beginPath();
        ctx.arc(trash.x, trash.y, trash.radius, 0, Math.PI * 2);
        ctx.fillStyle = trash.color;
        ctx.fill();
        ctx.closePath();
    });
}

// Check if the trash item is clicked
function checkClick(event) {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    trashItems.forEach((trash, index) => {
        const dist = Math.sqrt((mouseX - trash.x) ** 2 + (mouseY - trash.y) ** 2);

        if (dist < trash.radius) {
            trashItems.splice(index, 1);
            score += 10;
            scoreDisplay.textContent = `Score: ${score}`;
        }
    });

    if (trashItems.length === 0 && !gameOver) {
        gameOver = true;
        gameStatus.textContent = `Game Over! Final Score: ${score}`;
    }
}

// Get user's location
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            userLocation.lat = position.coords.latitude;
            userLocation.lon = position.coords.longitude;
            locationDisplay.textContent = `Your Location: Lat: ${userLocation.lat.toFixed(2)}, Lon: ${userLocation.lon.toFixed(2)}`;

            // Custom behavior based on location (Kathmandu example)
            const kathmanduLat = 27.7172;
            const kathmanduLon = 85.3240;
            const tolerance = 0.1; // Allowable difference in coordinates

            // Check if user is in Kathmandu (within tolerance)
            if (Math.abs(userLocation.lat - kathmanduLat) < tolerance && Math.abs(userLocation.lon - kathmanduLon) < tolerance) {
                // If the user is near Kathmandu (within 0.1 degree tolerance)
                generateTrash(); // Generate more trash near Kathmandu!
                gameStatus.textContent = "You're in Kathmandu! Let's clean up!";
            }
        }, error => {
            locationDisplay.textContent = "Unable to retrieve location.";
        });
    } else {
        locationDisplay.textContent = "Geolocation is not supported by this browser.";
    }
}

// Main game loop
function gameLoop() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    drawTrash(); // Draw trash items

    requestAnimationFrame(gameLoop); // Keep the game loop running
}

// Start a new game
function startGame() {
    trashItems = [];
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    gameStatus.textContent = '';
    gameOver = false;

    generateTrash();
    gameLoop();
    getUserLocation();  // Fetch user's location when starting the game
}

// Event listener for mouse clicks
canvas.addEventListener('click', checkClick);

// Start the game when the page loads
window.onload = startGame;
