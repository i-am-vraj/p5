var trunkLen;
var angle;
var branches;
var angleSlider;
var branchSlider;
var trunkLenSlider;
var strokeW;

function setup() {
    angleMode(DEGREES);
    createCanvas(800, 500);
    angleSlider = createSlider(0, 90, 10, 0.01);
    branchSlider = createSlider(2, 8, 2, 2);
    trunkLenSlider = createSlider(50, 150, 100, 10);
}

function draw() {
    clear();
    background(0);
    angle = angleSlider.value();
    branches = branchSlider.value();
    trunkLen = trunkLenSlider.value();
    translate(width/2, height);
    line(0, 0, 0, -trunkLen);
    addBranch(trunkLen);
}

function addBranch(len) {
    
    if(len > trunkLen/5) {
        stroke(255);
        line(0, 0, 0, -len);
        translate(0, -len);

        var i = 0;
        for(; i < branches/2; i++) {
            push();
            rotate(angle*(i+1));
            addBranch(len*0.7);
            pop();

            push();
            rotate(-angle*(i+1));
            addBranch(len*0.7);
            pop();

        }  

    }
}