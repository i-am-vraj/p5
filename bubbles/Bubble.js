class Bubble {
    
    constructor(x, y, r) {
        this.X = x;
        this.Y = y;
        this.Rad = r;
    }

    setColor(r, g, b) {
        this.R = r;
        this.G = g;
        this.B = b;
    }

    getStick(b) {
        this.isBound = b;
    }

    updateX(x) {
        this.X = x;
    }

    updateY(y) {
        this.Y = y;
    }

    show() {
        ellipseMode(CENTER);
        fill(this.R, this.G, this.B);
        ellipse(this.X, this.Y, this.Rad, this.Rad);
    }
}