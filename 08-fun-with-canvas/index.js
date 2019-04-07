const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw a hut
/*
ctx.lineWidth = 10;
ctx.strokeRect(75, 140, 150, 110);
ctx.fillRect(130, 190, 40, 60);
ctx.moveTo(50,140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
*/
//Hut code ends here

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return;
    // console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // Start from
    ctx.moveTo(lastX, lastY);
    // Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    // reset hue
    if (hue >= 360) {
    	hue = 0;
    }
    // toggle a flag to change the line width within a limit
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    	direction = !direction;
    }

    if (direction) {
    	ctx.lineWidth++;
    }else{
    	ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);