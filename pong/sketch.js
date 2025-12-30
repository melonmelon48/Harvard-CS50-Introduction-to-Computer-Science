// variables
let player1Score = 0;
let player2Score = 0;
let ball, player1, player2;
let gameState = "start";
let fontRetro; // retro font yay!!
let ponghit, pongbounce, pongscore;
let servingPlayer = 1;
let messageTimer = null;

// preload assets
function preload() {
    fontRetro = loadFont("font.ttf");
    ponghit = loadSound("ponghit.wav");
    pongbounce = loadSound("pongbounce.wav");
    pongscore = loadSound("pongscore.wav");
}

// Setup
function setup() {
    createCanvas(800, 500);
    ball = new Ball();
    player1 = new Paddle(20);
    player2 = new Paddle(width - 40);
    servingPlayer = 1;
}

// Main Loop
function draw() {
    background(0);
    dashedLine(25);
    displayMessages();
    score();

    // Different game states
    if (gameState === "start") {
        ball.reset();
    } else if (gameState === "play") {
        ball.update();
        player1.update();
        player2.aiMove(ball);
        checkCollisions();
        checkScore();
    }

    ball.draw();
    player1.draw();
    player2.draw();
}

// Game mssages
function displayMessages() {
    if (gameState === "start" && messageTimer === null) {
        title("Press Enter to Begin");
    } else if (gameState === "serve" && messageTimer !== null) {
        if (millis() - messageTimer < 2000) {
            title(`Player ${servingPlayer} serves`);
        } else {
            messageTimer = null;
            gameState = "play";
        }
    }
}

// title text
function title(message) {
    fill(255);
    noStroke();
    textSize(18);
    textFont(fontRetro);
    text(message, width / 2, 35);
}

// Draw scores on screen
function score() {
    fill(180);
    noStroke();
    textAlign(CENTER);
    textSize(60);
    textFont(fontRetro);
    text(player1Score, width / 4, 80);
    text(player2Score, 3 * width / 4, 80);
}

// Draw dashed center line
function dashedLine(pixels) {
    stroke(180);
    strokeWeight(2);
    let center = width / 2;
    for (let i = 0; i < height / pixels; i++) {
        line(center, i * pixels + 5, center, i * pixels + 15);
    }
}

// Handle key presses
function keyPressed() {
    if (keyCode === ENTER && gameState === "start") {
        gameState = "serve";
        messageTimer = millis();
    }
}

// Check ball collisions
function checkCollisions() {
    // Paddle hits
    if (ball.intersects(player1) || ball.intersects(player2)) {
        ball.bounce();
        ponghit.play();
    }

    // Wall bounces
    if (ball.y < 0 || ball.y > height) {
        ball.bounceY();
        pongbounce.play();
    }
}

// Check if someone scored
function checkScore() {
    if (ball.x < 0) {
        player2Score++;
        pongscore.play();
        gameState = "start";
    } else if (ball.x > width) {
        player1Score++;
        pongscore.play();
        gameState = "start";
    }
}

// ball class
class Ball {
    constructor() {
        this.reset();
    }

    // Reset ball position
    reset() {
        this.x = width / 2;
        this.y = height / 2;
        this.dx = random([-3, 3]);
        this.dy = random([-3, 3]);
        this.radius = 10;
        this.justBounced = false;
    }

    // Update ball position
    update() {
        this.x += this.dx;
        this.y += this.dy;

        // Reset bounce flag when between paddles
        if ((this.dx < 0 && this.x > player1.x + player1.width) ||
            (this.dx > 0 && this.x < player2.x - this.radius)) {
            this.justBounced = false;
        }
    }

    draw() {
        fill(255, 105, 180);
        ellipse(this.x, this.y, this.radius * 2);
    }

    bounce() {
        if (!this.justBounced) {
            this.dx *= -1;
            this.justBounced = true;
        }
    }

    // Bounce off wall
    bounceY() {
        this.dy *= -1;
    }

    // Check if bal hits paddle
    intersects(paddle) {
        if (this.y + this.radius > paddle.y &&
            this.y - this.radius < paddle.y + paddle.height &&
            !this.justBounced) {
            if (this.dx > 0 && this.x + this.radius > paddle.x &&
                this.x + this.radius < paddle.x + paddle.width) {
                return true;
            } else if (this.dx < 0 && this.x - this.radius < paddle.x + paddle.width &&
                this.x - this.radius > paddle.x) {
                return true;
            }
        }
        return false;
    }
}

// Paddle class
class Paddle {
    constructor(x) {
        this.x = x;
        this.y = height / 2 - 50;
        this.width = 10;
        this.height = 100;
        this.isLeft = this.x < width / 2;
    }

    // Update padle position for 1
    update() {
        if (this.isLeft && keyIsDown(UP_ARROW)) {
            this.y -= 5;
        } else if (this.isLeft && keyIsDown(DOWN_ARROW)) {
            this.y += 5;
        }

        this.y = constrain(this.y, 0, height - this.height);
    }

    // AI for player 2
    aiMove(ball) {
        if (!this.isLeft) {
            let targetY = ball.y;
            let dy = targetY - this.y;
            this.y += dy * 0.1;
            this.y = constrain(this.y, 0, height - this.height);
        }
    }

    // Draw paddle with clors
    draw() {
        fill(this.isLeft ? 0 : 255, this.isLeft ? 255 : 0, 0);
        rect(this.x, this.y, this.width, this.height);
    }
}
