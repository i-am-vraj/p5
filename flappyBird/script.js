var bars = [];
var addBar = 0;
const barDistance = 250;
const birdSize = 25;
const birdX = 800/10;
var birdY = 600/2;

function setup() {
    createCanvas(800, 600);
    background(0);
}

function draw() {
    //randomly add a bar
    if(addBar==0) {
        bar = new Bar();
        bars.push(bar);
    }
    addBar += 1;
    addBar %= barDistance;

    clear();
    background(0);

    //move and display updated bars
    for(i = 0; i < bars.length; i++) {
        if(bars[i].x < 0) {
            bars.splice(i,1);
            i++;
        }
        bars[i].show();
        bars[i].move();

        //check collision
        if(abs(birdX-bars[i].x) < birdSize && (birdY < bars[i].y || birdY > (bars[i].y + bars[i].gap)) )
            noLoop();
    }
    if(birdY+birdSize>600)
        noLoop();

    //just decorating the bird <[* *]>
    fill(255);
    noStroke();
    rect(birdX, birdY, birdSize, birdSize);
    triangle(birdX+birdSize, birdY+(birdSize/4), birdX+birdSize, birdY+(birdSize/2)+(birdSize/4), birdX+birdSize+(birdSize)/2, birdY+(birdSize/4)+(birdSize/4));
    triangle(birdX, birdY+(birdSize/4), birdX, birdY+(birdSize/2)+(birdSize/4), birdX-(birdSize)/2, birdY+(birdSize/4)+(birdSize/4));
    stroke(0)
    strokeWeight(8);
    point(birdX+5, birdY+5);
    point(birdX+20, birdY+5);
    
    //gravity
    birdY += 2;
}

function keyPressed() {
    if(keyCode === 32) {
        birdY -= 75;
    }
}