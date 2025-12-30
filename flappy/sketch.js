// game constants
let GROUND_SCROLL_SPEED = 1
let BACKGROUND_SCROLL_SPEED = 0.5
let SPACE = 32
let BACKGROUND_LOOPING_PT = 413
let GROUND_LOOPING_SPEED = 438

// Variables
let bgScroll = 0
let groundScroll = 0
let pipes = []
let points = 0
let gameState = "title"
let spawnTimer = 0
let count = 3
let lastY = 0

let bgImage, groundImage, birdImage, pipeImage
let flappyFont, gameFont, jump, score, hurt, explosion, music

function preload() {
    bgImage = loadImage('graphics/background.png')
    groundImage = loadImage('graphics/ground.png')
    birdImage = loadImage('graphics/bird.png')
    pipeImage = loadImage('graphics/pipe.png')

    // sound
    flappyFont = loadFont('fonts/flappy.ttf')
    jump = loadSound('sounds/jump.wav')
    score = loadSound('sounds/score.wav')
    music = loadSound('sounds/marios_way.mp3')
    hurt = loadSound('sounds/hurt.wav')
    explosion = loadSound('sounds/explosion.wav')
}

function setup() {
    createCanvas(800, 500)
    bird = new Bird(birdImage, width / 3.48, height / 3.48)
    lastY = random(150, 200)
    music.loop()
}

function draw() {
    scale(1.74)
    noSmooth()

    // scrolling
    image(bgImage, -bgScroll, 0)
    bgScroll = (bgScroll + BACKGROUND_SCROLL_SPEED) % BACKGROUND_LOOPING_PT

    image(groundImage, -groundScroll, height / 1.74 - 16)
    groundScroll = (groundScroll + GROUND_SCROLL_SPEED) % GROUND_LOOPING_SPEED

    if (gameState == "title") title()
    else if (gameState == "countdown") countdown()
    else if (gameState == "play") playGame()
    else if (gameState == "done") done()
}

// title
function title() {
    fill(255)
    textSize(28)
    textFont(flappyFont)
    textAlign(CENTER)
    text("Fifty Bird", width / 3.48, 100)
    textSize(14)
    text("Press Enter", width / 3.48, 130)
}

// Game over
function done() {
    fill(255)
    textSize(28)
    textFont(flappyFont)
    textAlign(CENTER)
    text(points > 0 ? "Good job!" : "Lost.", width/3.48, 100)
    textSize(14)
    text("Score: " + points, width/3.48, 150)
    text("Press ENTER to replay", width/3.48, 200)
}

// game!!!
function playGame() {
    bird.display()
    bird.update()

    spawnTimer += 1/60
    if (spawnTimer > 2) {
        let newPipe = new Pipe(pipeImage)
        newPipe.y = constrain(lastY + random(-20, 20), 100, 220)
        lastY = newPipe.y
        pipes.push(newPipe)
        spawnTimer = 0
    }

    for (let i = pipes.length - 1; i >= 0; i--) {
        let pipe = pipes[i]
        pipe.display()
        pipe.update()

        if (bird.collides(pipe)) {
            explosion.play()
            hurt.play()
            gameState = "done"
            break
        }

        if (!pipe.scored && pipe.x + pipe.width/2 < bird.x) {
            points++
            pipe.scored = true
            score.play()
        }

        if (pipe.x + pipe.width < 0) pipes.shift()
    }

    displayPoints()
}

// top left score
function displayPoints() {
    fill(255)
    textSize(32)
    textFont(flappyFont)
    textAlign(CENTER, TOP)
    text("Score: " + points, width/10, 10)
}

// Countdown before game starts
function countdown() {
    fill(255)
    textSize(56)
    textFont(flappyFont)
    textAlign(CENTER, CENTER)
    text(count, width/3.48, height/3.48)

    if (frameCount % 60 == 0) count--
    if (count == 0) {
        pipes = []
        gameState = "play"
        count = 3
    }
}

// key presses
function keyPressed() {
    if (keyCode == ENTER || keyCode == RETURN) {
        if (gameState == "title" || gameState == "done") {
            points = 0
            gameState = "countdown"
            bird.reset(height/3.48 - bird.height/2)
        }
    }
    if (gameState == "play" && keyCode == SPACE) {
        bird.jump()
        jump.play()
    }
}
