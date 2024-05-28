let message = "cmplx";
let x, y;
let easing = 0.005;

function setup() {
  let canvas = createCanvas(900, 160);
  canvas.parent("p5-container"); // Attach the canvas to the container
  textFont("Georgia");
  textSize(100);
  fill(255);
  noStroke();
  x = width / 2 - textWidth(message) / 2;
  y = height / 2 + textSize() / 3; // Offset to align vertically
}

function draw() {
  fill(0, 10); // More transparent fill for a subtler effect
  rect(0, 0, width, height);

  let targetX = mouseX - textWidth(message) / 2;
  let targetY = mouseY + textSize() / 3;

  // Constrain the target position so the text doesn't move off canvas
  targetX = constrain(targetX, 0, width - textWidth(message));
  targetY = constrain(targetY, textSize(), height);

  x += (targetX - x) * easing;
  y += (targetY - y) * easing;

  fill(255);
  text(message, x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
