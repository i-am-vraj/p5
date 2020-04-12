class Snowball {
    constructor(x,y,rad) {
        this.X = x;
        this.Y = y;
        this.radius = rad;
    }

    show() {
        fill(255);
        ellipse(this.X, this.Y, this.radius, this.radius);
    }

    updateX(x) {
        this.X = x;
    }

    updateY(y) {
        this.Y = y;
    }
}