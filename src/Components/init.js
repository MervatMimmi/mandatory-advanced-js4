
export function createEmptyBoard(){
    return Array(7).fill(null).map(
        () => Array(6).fill('white')
    );
}

export function initState() {
    return {
        grid: createEmptyBoard(),
        selectedPlayer: 'aqua',
        cellColor: 'white',
        isWinner: false,
        isDrawn: false,
         
    }
}

export function draw(grid){
    for(let column of grid){
        for(let cell of column) {
            if(cell === 'white'){
                return false;
            }
        }
    }
    return true;
}

export function winCondition(grid, cellColor) {
    //Now search vertical
    for(let column of grid) {
        let selectedColor = 0;
        for(let cell of column) {
            if(cell === cellColor) {
                selectedColor++;
                //console.log("red in row: "+selectedColor);  
                }else{
                    selectedColor = 0;
                }
            if(selectedColor === 4) {
                console.log('selectedColor: '+selectedColor);
                return true;
            }
        }
    }
    //Now search horizontal
    for(let columnCell = 0; columnCell < 6; columnCell++){
        let selectedColor = 0;
            for(let column of grid) {
                if(column[columnCell] === cellColor) {
                    selectedColor++;
                    //console.log("red in row: "+selectedColor);  
                    }else{
                        selectedColor = 0;
                    }
                if(selectedColor === 4) {
                    //console.log('selectedColor: '+selectedColor);
                    return true;
                }
            }
        }
    // now search diagonally right 
    for(let column = 3; column < 6; column ++) {
        for(let cell = 0; cell < 4; cell ++) {
            if(grid[column][cell] !== "white") {    
                if(grid[column][cell] === grid[column - 1][cell + 1] &&
                    grid[column][cell] === grid[column - 2][cell + 2] &&
                    grid[column][cell] === grid[column - 3][cell + 3]) {
                        return true;
                }
            }   
        }
    }
    // now search diagonally left
    for(let column = 0; column < 4; column++) {
        for(let cell = 0; cell < 3; cell ++) {
            if(grid[column][cell] !== 'white') {
                if(grid[column][cell] === grid[column + 1][cell + 1] &&
                    grid[column][cell] === grid[column + 2][cell + 2] &&
                    grid[column][cell] === grid[column + 3][cell + 3]) {
                        return true;
                }
            }
        }
    }
}