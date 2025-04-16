const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

let boatX = 350;
let direction = 1;

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Sun
    ctx.beginPath();
    ctx.arc(700, 80, 40, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    for (let i = 0; i < 8; i++) {
        let angle = (Math.PI / 4) * i;
        let x1 = 700 + Math.cos(angle) * 50;
        let y1 = 80 + Math.sin(angle) * 50;
        let x2 = 700 + Math.cos(angle) * 70;
        let y2 = 80 + Math.sin(angle) * 70;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    
    // Pond
    ctx.beginPath();
    ctx.ellipse(400, 300, 150, 80, 0, 0, Math.PI * 2);
    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.stroke();
    
    // Boat
    ctx.beginPath();
    ctx.moveTo(boatX - 30, 300);
    ctx.lineTo(boatX + 30, 300);
    ctx.lineTo(boatX + 20, 320);
    ctx.lineTo(boatX - 20, 320);
    ctx.closePath();
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.stroke();
    
    // House
    ctx.fillStyle = "orange";
    ctx.fillRect(100, 250, 100, 100);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(100, 250);
    ctx.lineTo(200, 250);
    ctx.lineTo(150, 200);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fillRect(120, 270, 20, 20);
    ctx.fillStyle = "brown";
    ctx.fillRect(160, 300, 20, 50);
    
    // Duck (More Accurate)
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(550, 350, 20, 0, Math.PI * 2); // Body
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(570, 340, 15, 0, Math.PI * 2); // Head
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(575, 335, 3, 0, Math.PI * 2); // Eye
    ctx.fill();
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(580, 340);
    ctx.lineTo(590, 345);
    ctx.lineTo(580, 350);
    ctx.closePath(); // Beak
    ctx.fill();
    ctx.stroke();
    
    // Flower (More Accurate)
    ctx.fillStyle = "green";
    ctx.fillRect(620, 350, 10, 50); // Stem
    ctx.fillStyle = "pink";
    for (let i = 0; i < 5; i++) {
        let angle = (Math.PI / 2.5) * i;
        let x = 625 + Math.cos(angle) * 20;
        let y = 340 + Math.sin(angle) * 20;
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(625, 340, 10, 0, Math.PI * 2); // Flower center
    ctx.fill();
    ctx.stroke();
    
    // Stones
    ctx.fillStyle = "gray";
    [[90, 360], [110, 365], [95, 370], [505, 380], [520, 385]].forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });
}

function animateBoat() {
    boatX += direction * 1.5;
    if (boatX > 450 || boatX < 350) direction *= -1;
    drawScene();
    requestAnimationFrame(animateBoat);
}

drawScene();
animateBoat();
