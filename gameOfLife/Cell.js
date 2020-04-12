class Cell {
    
    constructor(x, y, size) {
        this.X = x;
        this.Y = y;
        this.Size = size;
        this.Near = [];
    }

    setState(state) {
        this.State = state;
    }

    setNear(cell) {
        this.Near.push(cell);
    }

    getNear() {
        return this.Near;
    }

    getNearStates() {
        
        for(j = 0; j < this.Near.length; j++) {
            if(this.Near[j].State==0) {
                dead+=1;
            }
            else {
                alive+=1;
            }
        }

        return [dead,alive];
    }

    show() {
        if(this.State === 0) {
            fill(0);
            stroke(255);
        }
        else {
            fill(255);
            stroke(0); 
        }
        rect(this.X, this.Y, this.Size, this.Size);
    }
}