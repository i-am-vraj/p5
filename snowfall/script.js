
var list = [];

function setup() {
    createCanvas(800,600);
    background(0);
    balls = 200;
    
    for(i = 0; i < balls; i++) {
        
        x = random(0,width);
        y = random(0,height/2);
        r = random(2,10);

        flake = new Snowball(x,y,r);
        flake.show();
        list.push(flake);
    }
}

function draw() {
    clear();
    background(0);
    x = random(0,width);
    y = random(-10,0);
    r = random(2,10);

    flake = new Snowball(x, y, r);
    list.push(flake);
    
    
    for(i = 0; i < list.length; i++) {
        list[i].updateX(list[i].X + random(-0.2,0.2));
        list[i].updateY(list[i].Y + (list[i].radius/2));
        list[i].show();   
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mouseClicked(event) {
    var neighbour = 200;
    for(i = 0; i < list.length; i++) {
        if(event.clientX-neighbour<Math.floor(list[i].X) && Math.floor(list[i].X)<event.clientX+neighbour && event.clientY-neighbour<Math.floor(list[i].Y) && Math.floor(list[i].Y)<event.clientY+neighbour) {
            for(j = 0; j < 5; j++)
            {
                list[i].updateX(list[i].X+(event.clientX-list[i].X)/10);
                list[i].updateY(list[i].Y+(event.clientY-list[i].Y)/10);
                list[i].show();
                await sleep(100);
            }
        }
    }
}