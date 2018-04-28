document.addEventListener("DOMContentLoaded", function(event)
{
  const canvas = document.querySelector('.draw');
  const rotateButton = document.querySelector('.rotates')
  const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.strokeStyle = 'BADA55';
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.lineWidth = 10;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0
    let direction = true
    let ox = canvas.width  / 2;
    let oy = canvas.height / 2;
// Draw is setup so the function won't run without
//it being clicked - if not drawing return nothing.
  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    context.beginPath();
    // Starts from ^
    context.lineTo(e.offsetX, e.offsetY)
    // Creates Line ^
    context.stroke();
    // Applies lines
    [lastX, lastY] = [e.offsetX(), e.offsetY()]
  }

  const rotateCanvas = () => {
    context.translate(ox,oy);
    context.rotate((Math.PI / 180) * 10);
    context.translate(-ox,-oy);
  }

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
// run draw when the mouse is moving
// 26 when mouse is clicked user is drawing
// 27 when mouse is not clicked user isnt drawing
// 28 when user is off window they are not drawing
canvas.addEventListener('mouseout', () => isDrawing = false);
rotateButton.addEventListener('click', rotateCanvas() )
})

// You do not draw on the canvas directly - you draw on the context