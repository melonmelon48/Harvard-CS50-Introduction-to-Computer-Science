
let x, y;
let xvel, yvel;
let img;
let currentColor;
let colors = ['red', 'blue', 'green', 'yellow'];

function preload() {
  img = loadImage('dvdLogo.png');
}

function setup() {
  createCanvas(600, 400);
  x = random(width - 50);
  y = random(height - 50);
  xvel = random(1, 3);
  yvel = random(1, 3);
  noTint();
}

function draw() {
  background("pink");

  if (currentColor) tint(currentColor);
  image(img, x, y, 50, 50);

  x += xvel;
  y += yvel;

  // Right or left wall hit
  if (x + 50 > width || x < 0) {
    xvel *= -1;
    currentColor = colors[floor(random(4))];
  }


  if (y + 50 > height || y < 0) {
    yvel *= -1;
    currentColor = colors[floor(random(4))];
  }
}
