class snakeCell {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.prevX = x-size;
        this.prevY = y;
    }


    show() {
        fill(255);
        rect(this.x, this.y, this.size, this.size);
    }
}