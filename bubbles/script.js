var list = [];
var total = 200;

function setup() {
    createCanvas(800,600);
    background(0);

    var color = [[255,0,0],[0,255,255],[0,255,0],[0,0,255]];
    var j = 0;
    for(i = 0; i < total; i++) {
        
        x = random(0, width);
        y = random(0, height);
        r = 20;
        
        bubble = new Bubble(x, y, r);
        bubble.setColor(color[j][0],color[j][1],color[j][2]);
        j=j+1;
        j=j%4;
        
        bubble.show();
        list.push(bubble);
    }

}

function draw() {
    
    clear();
    background(0);
    for(i= 0; i < total; i++) {
        x = random(-5, 5);
        y = random(-5, 5);
        if(list[i].isBound!=0 || list[i].R != 255) {
            list[i].updateX(list[i].X+x);
            list[i].updateY(list[i].Y+y);
        }
        for(j = 0; j < total; j++) {
            if((list[i].isBound!=0 || list[j].isBound!=0) && i!=j && (list[i].X<list[j].X+0.7*r && list[i].X>list[j].X-0.7*r) && (list[i].Y<list[j].Y+0.7*r && list[i].Y>list[j].Y-0.7*r) ) {
                list[i].setColor(255,0,0);
                list[j].setColor(255,0,0);
                list[i].getStick(0);
                list[j].getStick(0);
            }
        }
        list[i].show();
    }

}