let message = "cmplx";
let x, y;
let easing = 0.005;

function preload() {
    font = loadFont('./fonts/HankenGrotesk-VariableFont_wght.ttf');
}

function setup() {
    let canvas = createCanvas(900, 160);
    canvas.parent('p5-container');
    textFont(font);
    textSize(100);
    fill(255);
    noStroke();
    x = width / 2 - textWidth(message) / 2;
    y = height / 2 + textSize() / 3;
}

function draw() {
    fill(0, 10);
    rect(0, 0, width, height);

    let targetX = mouseX - textWidth(message) / 2;
    let targetY = mouseY + textSize() / 3;

    targetX = constrain(targetX, 0, width - textWidth(message));
    targetY = constrain(targetY, textSize(), height);

    x += (targetX - x) * easing;
    y += (targetY - y) * easing;

    fill(255);
    text(message, x, y);
}