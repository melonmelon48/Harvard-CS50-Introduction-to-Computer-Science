let bubs = [];

function setup() {
    createCanvas(500, 400);
    for (let i = 0; i < 100; i++) {
        bubs.push({
            x: random(width),
            y: random(height),
            size: 24,
            clicks: 0,
            col: [255, 100, 100]
        });
    }
}

function draw() {
    background(200);
    for (let bubble of bubs) {
        stroke(255);
        fill(bubble.col);
        ellipse(bubble.x, bubble.y, bubble.size);
    }
}

function mouseClicked() {
    let bubbleFound = false;
    for (let i = bubs.length - 1; i >= 0; i--) {
        let bubble = bubs[i];
        let d = dist(mouseX, mouseY, bubble.x, bubble.y);
        if (d < bubble.size / 2) {
            bubbleFound = true;
            bubble.clicks++;
            if (bubble.clicks === 3) {
                bubs.splice(i, 1);
            } else {
                bubble.size += 5;
                bubble.col = [random(255), random(255), random(255)];
            }
            break;
        }
    }
    if (!bubbleFound) {
        bubs.push({
            x: mouseX,
            y: mouseY,
            size: 20,
            clicks: 0,
            col: [255, 100, 100]
        });
    }
}
