function setup() {

    createCanvas(800,600);
    background(0);

    var buildings = [];
    var total = 10;
    for(i=0; i<total; i++) {
    
        x = Math.floor(Math.random()*width);
        y = Math.floor(Math.random()*(height/2))+x;
        z = Math.floor(Math.random()*400)+100;
    
        build = new Building(x,y,z);
        build.show();
        buildings.push(build);
    }

    var prevHeight;
    for(j = 0; j < width; j++) {
        var maxHeight = 0;
        for(i = 0; i < buildings.length; i++) {
            if(buildings[i].start<=j && j<=buildings[i].end) {
                if(buildings[i].size > maxHeight) {
                    maxHeight = buildings[i].size;
                }
            }
        }
        if(prevHeight!=maxHeight) {
            line(j, height-prevHeight, j, height-maxHeight);
        }
        stroke(0,0,255);
        strokeWeight(4);
        point(j,height-maxHeight);
        prevHeight = maxHeight;
    }
}

function draw() {
    
}