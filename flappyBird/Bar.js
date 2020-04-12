class Bar {
    constructor() {
        this.x = random(width,width+100);
        this.R = random(255);
        this.G = random(255);
        this.B = random(255);
        
        this.y = random(0,400);
        this.gap = random(100,200);

        
    }

    move() {
        this.x -= 1;
    }

    show() {
        stroke(this.R,this.G,this.B);
        strokeWeight(8);
        line(this.x, 0, this.x, height);
     
        fill(0);
        stroke(0);
        strokeWeight(10);
        line(this.x, this.y, this.x, this.y+this.gap);
    }
}