const SIZE = 10;
var HEAD;
var TAIL;
var moveX = SIZE;
var moveY = 0;
snake = [];


var video;
var mobilenet;
var mobilenetClassifier;
var leftButton;
var rightButton;
var upButton;
var downButton;
var trainingButton;
var runNow = false;

function whileTraining(loss) {
    if(loss == null) {
        console.log('training complete');
        mobilenetClassifier.classify(gotResults);
    } else {
        console.log(loss);
    }
}

function isReady() {
    console.log('Model Ready');
}

function videoReady() {
    console.log('Video Ready');
}

function gotResults(error, results) {
    if(error) {
        console.log(error);
    } else {
        
        if(results[0].label == 'up') {
            moveY = -SIZE;
            moveX = 0;
        } else if(results[0].label == 'down') {
            moveY = +SIZE;
            moveX = 0;
        } else if(results[0].label == 'right') {
            moveX = +SIZE;
            moveY = 0;
        } else if(results[0].label == 'left') {
            moveX = -SIZE;
            moveY = 0;
        } else {
            moveX = -SIZE;
            moveY = 0;
        }

        mobilenetClassifier.classify(gotResults);
    }
    runNow = true;
}

function setup() {
    frameRate(10);
    createCanvas(800, 600);
    rectMode(CENTER);

    
    mobilenet = ml5.featureExtractor('MobileNet', { numLabels : 4 }, isReady);
    video = createCapture(VIDEO);
    video.hide();
    mobilenetClassifier = mobilenet.classification(video, videoReady);
    
    leftButton = createButton('left');
    leftButton.addClass('btn');
    leftButton.addClass('btn-secondary');
    leftButton.addClass('addMargin');
    leftButton.mousePressed(function() {
        mobilenetClassifier.addImage('left');
    });

    rightButton = createButton('right');
    rightButton.addClass('btn');
    rightButton.addClass('btn-secondary');
    rightButton.addClass('addMargin');
    rightButton.mousePressed(function() {
        mobilenetClassifier.addImage('right');
    });

    upButton = createButton('up');
    upButton.addClass('btn');
    upButton.addClass('btn-secondary');
    upButton.addClass('addMargin');
    upButton.mousePressed(function() {
        mobilenetClassifier.addImage('up');
    });

    downButton = createButton('down');
    downButton.addClass('btn');
    downButton.addClass('btn-secondary');
    downButton.addClass('addMargin');
    downButton.mousePressed(function() {
        mobilenetClassifier.addImage('down');
    });

    trainingButton = createButton('train data');
    trainingButton.addClass('btn');
    trainingButton.addClass('btn-secondary');
    trainingButton.addClass('addMargin');
    trainingButton.mousePressed(function() {
        mobilenetClassifier.train(whileTraining);
    });



    cell = new snakeCell(random(width/2), random(height/2), SIZE);
    HEAD = cell;
    TAIL = cell;
    snake.push(cell);
    food = new snakeCell(random(width/2), random(height/2), SIZE);

}

function draw() {
    clear();
    background(0);

    image(video, 400, 300, 400, 300);


    if(runNow) {
    if(dist(food.x, food.y, HEAD.x, HEAD.y) < SIZE) {
        newTail = new snakeCell(TAIL.prevX, TAIL.prevY, SIZE);
        snake.push(newTail);
        TAIL = newTail;
        food = new snakeCell(random(width/2), random(height/2), SIZE);
    }

    
    food.show();
    HEAD.show();
    HEAD.prevX = HEAD.x;
    HEAD.prevY = HEAD.y;
    HEAD.x += moveX;
    HEAD.y += moveY;
    for(i = 1; i < snake.length; i++) {

        // if(dist(snake[i].x, snake[i].y, HEAD.x, HEAD.y) < SIZE) {
        //     noLoop();
        // }
        snake[i].prevX = snake[i].x;
        snake[i].prevY = snake[i].y;
        snake[i].x = snake[i-1].prevX;
        snake[i].y = snake[i-1].prevY;
        snake[i].show();
    }
    }
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        moveY = -SIZE;
        moveX = 0;
    } else if(keyCode === DOWN_ARROW) {
        moveY = +SIZE;
        moveX = 0;
    } else if(keyCode === RIGHT_ARROW) {
        moveX = +SIZE;
        moveY = 0;
    } else if(keyCode === LEFT_ARROW) {
        moveX = -SIZE;
        moveY = 0;
    } else {
        //nothing
    }
}