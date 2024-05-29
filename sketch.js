let message = "cmplx";
let x, y;
let easing = 0.005;
let textColor;

function setup() {
    let canvasParent = document.getElementById('p5-container'); // Get the parent container
    let canvasWidth = canvasParent.offsetWidth; // Get the width of the parent container
    let canvasHeight = canvasParent.offsetHeight; // Get the height of the parent container

    let canvas = createCanvas(canvasWidth, canvasHeight); // Create canvas with the dimensions of the parent container
    canvas.parent('p5-container'); // Attach canvas to the p5-container div

    textFont('Arial'); // Set the font to Arial (or another system font)
    textSize(100); // Set the text size
    noStroke(); // Remove stroke from text
    textColor = color(255); // Initial text color (white)
    updateTextPosition(); // Calculate initial text position

    canvas.mousePressed(changeColor); // Call changeColor function on mouse press
}

function draw() {
    fill(0, 10); // Semi-transparent black for fade effect
    rect(0, 0, width, height); // Draw a rectangle over the canvas

    let targetX = mouseX - textWidth(message) / 2; // Calculate target X position
    let targetY = mouseY + textSize() / 3; // Calculate target Y position

    // Constrain target positions to ensure text stays on canvas
    targetX = constrain(targetX, 0, width - textWidth(message));
    targetY = constrain(targetY, textSize(), height);

    x += (targetX - x) * easing; // Smoothly move X position
    y += (targetY - y) * easing; // Smoothly move Y position

    fill(textColor); // Set fill color to current text color
    text(message, x, y); // Draw the text at the calculated position
}

function windowResized() {
    let canvasParent = document.getElementById('p5-container'); // Get the parent container
    let canvasWidth = canvasParent.offsetWidth; // Get the width of the parent container
    let canvasHeight = canvasParent.offsetHeight; // Get the height of the parent container

    resizeCanvas(canvasWidth, canvasHeight); // Resize canvas to the new dimensions of the parent container
    updateTextPosition(); // Recalculate text position
}

function updateTextPosition() {
    x = width / 2 - textWidth(message) / 2; // Center text horizontally
    y = height / 2 + textSize() / 3; // Center text vertically
}

function changeColor() {
    // Change text color to a random color
    textColor = color(random(255), random(255), random(255));
}