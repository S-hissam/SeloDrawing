const canvas = document.getElementById('canvas');
const SizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false
let color = 'black';
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed)
    {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCicle(x2, y2);

        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function drawCicle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}


function drawLine(x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
});

increaseBtn.addEventListener('click', () => {
    size += 5;

    if (size > 50)
    {
        size = 50;
    }
    updateSizeOnScreen();

});

decreaseBtn.addEventListener('click', () => {
    size -= 5;
    if (size < 5)
    {
        size = 5;
    }
    updateSizeOnScreen();

});

function updateSizeOnScreen(){
    SizeEl.innerText = size;
}