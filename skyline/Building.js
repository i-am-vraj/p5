class Building {
    constructor(x,y,z)
    {
        this.start = x;
        this.end = y;
        this.size = z;
    }

    show() {
        fill(0,255,0,100);
        noStroke();
        rect(this.start,height-this.size,this.end-this.start,this.size);
    }

}