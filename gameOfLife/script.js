var row;
var col;
var cells = [];
function setup() {
    createCanvas(500,500);
    background(0);
    row = 25;
    col = 25;
    
    for(i = 0; i < height; i=i+height/row) {
        for (j = 0; j < width; j=j+width/col) {
            
            sqr = new Cell(i, j, height/row);
            black = random(0,20);
            if(Math.floor(black) === 0) 
                sqr.setState(0);
            else
                sqr.setState(1);
            
            sqr.show();
            cells.push(sqr);
        }
    }

    for(i = 0; i < cells.length; i++) {
        let count = 8;
        
        try {
            cells[i].setNear(cells[i-1]);
        }
        catch(err) {}

        try {
            cells[i].setNear(cells[i+1]);
        }
        catch(err) {}

        try {
            cells[i].setNear(cells[i-1+col]);
        }
        catch(err) {}

        try {
            cells[i].setNear(cells[i+1+col]);
        }
        catch(err) {}

        try {
            cells[i].setNear(cells[i+col]);
        }
        catch(err) {}

        try {
            cells[i].setNear(cells[i-1-col]);
        }
        catch(err) {}

        try {
            cells[i].setNear(cells[i+1-col]);
        }
        catch(err) {}

        try {
            cells[i].setNear(cells[i-col]);
        }
        catch(err) {}

    }
}

function draw() {
    nextState();
}

function nextState() {
    for(i = 0; i < cells.length; i++) {
        states = cells[i].getNearStates();
        dead = states[0];
        alive = states[1];

        if(alive<=3 && dead>=3) {
            cells[i].State = -1;
        }

    }

    for(i = 0; i < cells.length; i++) {
        if(cells[i].State === -1) {
            cells[i].State = 0;
        }
        cells[i].show();
    }

}