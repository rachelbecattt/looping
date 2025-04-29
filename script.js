const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const palette = [
    "#F7CAC9",
    "#92A8D1",
    "#034F84",
    "#F7786B",
    "#DEEAEE"
];

function getRandomColor() {
    return palette[Math.floor(Math.random() * palette.length)];
}

function getRandomGradient(x, y, radius) {
    const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
    grad.addColorStop(0, getRandomColor());
    grad.addColorStop(1, getRandomColor());
    return grad;
}

function drawRandomShape(x, y) {
    const radius = Math.random() * 40 + 10; 
    const choice = Math.random(); 
    ctx.fillStyle = getRandomGradient(x, y, radius);

    if (choice < 0.5) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    } else {
        ctx.beginPath();
        ctx.rect(x - radius/2, y - radius/2, radius, radius);
        ctx.fill();
    }
}

canvas.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;

    drawRandomShape(x, y);
});

function fadeCanvas() {
    ctx.fillStyle = "rgba(255,255,255,0.05)"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

setInterval(fadeCanvas, 100); 
